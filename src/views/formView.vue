<template lang='pug'>
div(class="w-full h-[100vh] flex-wrap mine-flex-center")
  div.drop-zone(
    v-if="!tableData.length"
    ref="fileDiv"
    :class="[ \
      borderStyle ? 'border-solid' : 'border-dashed', \
    ]"
    class="w-[300px] md:w-[500px] h-[300px] md:h-[500px] flex-col mine-flex-center cursor-pointer border-[#009578] border-4 rounded-2xl bg-[#e0ffb5]"
    @click="choseFile"
    @drop="dropFile"
    @dragover="dragOver"
    @dragleave="setBorder"
    @dragend="setBorder"
  )
    span 匯入檔案
    span xlsx檔(剛好三欄且無合併儲存格)
    input.drop-zone__input(
      class="hidden"
      ref="fileInput"
      type='file' name='myFile'
      @change="changeFile"
    )
  div(
    v-else
    class="w-full md:w-3/4 h-auto px-1 flex-col mine-flex-center"
  )
    el-table(
      :data='nowData' style='width: 100%'
    )
      el-table-column(
        v-for="(item, index) of tableTitle" :key="index"
        :prop='item.prop' :label='item.label'
        show-overflow-tooltip
      )
      //- el-table-column(prop='A1' label='Date')
      //- el-table-column(prop='B1' label='Name')
      //- el-table-column(prop='C1' label='Address')
    el-pagination(
      small
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :page-size="isMobile ? 8 : 10"
      class="mt-2"
      @current-change="changePage"
      :current-page="nowPage"
    )
    button(
      class='bg-green-500 text-white my-2 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400'
      @click="clear"
    ) 清除

</template>
<script>
  // @ is an alias to /src
  import { ref,computed,onMounted,watch } from 'vue'
  import * as XLSX from 'xlsx/xlsx.mjs'
  import store from '@/store'
  export default {
    name: 'formView',
    components: {
    },
    setup() {
      const isMobile = computed(() => store.state.isMobile)
      const tableTitle = ref([])
      const tableData = ref([])
      const fileInput = ref(null)
      const fileDiv = ref(null)
      const borderStyle = ref(false)
      const nowPage = ref(1)
      const nowData = computed(() => {
        let count = isMobile.value ? 8 : 10
        return tableData.value.slice((nowPage.value - 1)*count, nowPage.value*count)
      })
      const choseFile = () => {
        fileInput.value.click()
      }
      const changeFile = () => {
        if(fileInput.value.files.length === 1) dealFile(fileInput.value.files[0])
      }
      const dropFile = (e) => {
        e.preventDefault()
        borderStyle.value = false
        if (e.dataTransfer.files.length === 1) {
          fileInput.value.files = e.dataTransfer.files
          dealFile(e.dataTransfer.files[0])
        }
      }
      const dragOver = (e) => {
        // 未知 未用時會另開頁面
        e.preventDefault()
        borderStyle.value = true
      }
      const setBorder = () => {
        borderStyle.value = false
      }

    const dealFile = (file) => {
      if(store.state.loading) return false
      store.commit('setLoad', true)
      // console.log('type',file.type)
      const reader = new FileReader()
      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file)
        reader.onload = () => {
          fileDiv.value.style.backgroundImage = `url('${reader.result}')`
          // fileDiv.value.style.backgroundImage = null
          store.commit('setLoad', false)
        }
      } else if (file.type.includes('spreadsheetml.sheet')) {
        reader.readAsArrayBuffer(file)
        reader.onload = () => {
            const data = new Uint8Array(reader.result)
            const wb = XLSX.read(data, {type:'array'})
            if(!wb.Sheets[wb.SheetNames[0]]['!merges'] && wb.Sheets[wb.SheetNames[0]]['!ref'].includes(':C')) {
              let range = parseInt(wb.Sheets[wb.SheetNames[0]]['!ref'].split(':C')[1])
              let data = []
              for(let item of Object.keys(wb.Sheets[wb.SheetNames[0]])) {
                let index = parseInt(item.replace(/[^0-9']/g, ''))
                if (!index) continue
                if(!data[index]) data[index] = {}
                data[index][item] = wb.Sheets[wb.SheetNames[0]][item]?.w
              }
              let tatget = []
              for(let i = 1;i<=range;i++) {
                tatget.push({
                  A1:data[i]['A'+i],
                  B1:data[i]['B'+i],
                  C1:data[i]['C'+i],
                })
              }
              for(let index in tatget[0]) {
                tableTitle.value.push({
                  prop:index,
                  label:tatget[0][index],
                })
              }
              tatget.splice(0, 1)
              tableData.value = tatget
            }
            store.commit('setLoad', false)
        }
      }
    }
    const changePage = (val) => {
      nowPage.value = val
    }

    const clear = () => {
      tableData.value = []
      tableTitle.value = []
      nowPage.value = 1
    }

    watch(() => isMobile.value,() => {
      nowPage.value = 1
    })

    onMounted(() => {

    })

      return {
        isMobile,
        tableData,
        fileInput,
        fileDiv,
        borderStyle,
        tableTitle,
        nowData,
        nowPage,
        changeFile,
        dropFile,
        dragOver,
        setBorder,
        choseFile,
        clear,
        changePage,
      }
    }
  }
</script>
