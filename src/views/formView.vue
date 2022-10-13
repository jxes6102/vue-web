<template lang='pug'>
div(class="w-full h-[100vh] flex flex-wrap items-center justify-center")
  div.drop-zone(
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
    class="w-full md:w-[80%] h-auto px-1"
  )
    el-table(
      v-if="tableData.length"
      :data='tableData' :height='isMobile ? 300 : 500' style='width: 100%'
    )
      el-table-column(prop='date' label='Date' width='180')
      el-table-column(prop='name' label='Name' width='180')
      el-table-column(prop='address' label='Address')
</template>
<script>
  // @ is an alias to /src
  import { ref,computed,onMounted } from 'vue'
  import store from '@/store'
  export default {
    name: 'formView',
    components: {
    },
    setup() {
      const isMobile = computed(() => store.state.isMobile)
      const tableData = ref([])
      const init = () => {
        tableData.value = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]

      }

      const fileInput = ref(null)
      const fileDiv = ref(null)
      const borderStyle = ref(false)
      const choseFile = () => {
        fileInput.value.click()
      }
      const changeFile = () => {
        if(fileInput.value.files.length === 1) {
          console.log('changeFile', fileInput.value.files)
          dealFile(fileInput.value.files[0])
        }
      }
      const dropFile = (e) => {
        e.preventDefault()
        borderStyle.value = false
        if (e.dataTransfer.files.length === 1) {
          console.log('dropFile', e.dataTransfer.files)
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
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          fileDiv.value.style.backgroundImage = `url('${reader.result}')`
        }
      } else {
        fileDiv.value.style.backgroundImage = null
      }
    }


    onMounted(() => {
      // init()
      // loadFile()
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
      }
    }
  }
</script>
