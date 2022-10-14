<template lang='pug'>
div(class="w-full h-[100vh] flex flex-wrap items-center justify-center")
  div.drop-zone(
    v-if="!tableData.length"
    ref="fileDiv"
    :class="[ \
      borderStyle ? 'border-solid' : 'border-dashed', \
    ]"
    class="w-full md:w-[600px] h-[200px] md:h-[400px] flex flex-col items-center justify-center cursor-pointer border-[#009578] border-4 rounded-2xl bg-[#e0ffb5]"
    @click="choseFile"
    @drop="dropFile"
    @dragover="dragOver"
    @dragleave="setBorder"
    @dragend="setBorder"
  )
    span.drop-zone__prompt Drop file here or click to upload
    input.drop-zone__input(
      class="hidden"
      ref="fileInput"
      type='file' name='myFile'
      @change="changeFile"
    )
  div(
    v-else
    class="w-full h-auto px-1"
  )
    el-table(
      :data='tableData' :height='isMobile ? 400 : 500' style='width: 100%'
    )
      el-table-column(prop='A1' label='Date' fit="true")
      el-table-column(prop='B1' label='Name' fit="true")
      el-table-column(prop='C1' label='Address' fit="true")
    button(
      class='bg-green-500 text-white my-2 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400'
      @click="clear"
    ) 清除

</template>
<script>
  // @ is an alias to /src
  import { ref,computed,onMounted } from 'vue'
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
      const init = () => {

      }

      const fileInput = ref(null)
      const fileDiv = ref(null)
      const borderStyle = ref(false)
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
      console.log('type',file.type)
      const reader = new FileReader()
      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file)
        reader.onload = () => {
          fileDiv.value.style.backgroundImage = `url('${reader.result}')`
          // fileDiv.value.style.backgroundImage = null
        }
      } else if (file.type.includes('spreadsheetml.sheet')) {
        reader.readAsArrayBuffer(file)
        reader.onload = () => {
            const data = new Uint8Array(reader.result)
            const wb = XLSX.read(data, {type:'array'})
            // console.log('wb', wb)
            if(!wb.Sheets[wb.SheetNames[0]]['!merges'] && wb.Sheets[wb.SheetNames[0]]['!ref'].includes(':C')) {
              console.log('成功',wb.Sheets[wb.SheetNames[0]])
              let range = parseInt(wb.Sheets[wb.SheetNames[0]]['!ref'].split(':C')[1])
              // console.log('range', range)
              let data = []

              // console.log('values',Object.values(wb.Sheets[wb.SheetNames[0]]))
              // console.log('keys',Object.keys(wb.Sheets[wb.SheetNames[0]]))
              for(let item of Object.keys(wb.Sheets[wb.SheetNames[0]])) {
                let index = parseInt(item.replace(/[^0-9']/g, ''))
                if (!index) continue
                if(!data[index]) data[index] = {}
                data[index][item] = wb.Sheets[wb.SheetNames[0]][item]?.w
              }
              // console.log('data',data)

              let tatget = []
              for(let i = 1;i<=range;i++) {
                tatget.push({
                  A1:data[i]['A'+i],
                  B1:data[i]['B'+i],
                  C1:data[i]['C'+i],
                })
              }
              tableData.value = tatget
              // console.log('tatget',tatget)
            } else {
              console.log('有合併儲存格或超出範圍(only A~C)')
            }
        }
      }
    }

    const clear = () => {
      location.reload()
    }

    onMounted(() => {
      // init()
    })

      return {
        isMobile,
        tableData,
        fileInput,
        changeFile,
        fileDiv,
        dropFile,
        dragOver,
        setBorder,
        borderStyle,
        choseFile,
        clear,
      }
    }
  }
</script>
