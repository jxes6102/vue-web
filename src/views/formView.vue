<template lang='pug'>
div(class="w-full h-[100vh] flex flex-wrap items-center justify-center")
  div(
    class="w-full md:w-[80%] h-auto px-1"
    v-if="tableData.length"
  )
    el-table(
      :data='tableData' :height='isMobile ? 300 : 500' style='width: 100%'
    )
      el-table-column(prop='date' label='Date' width='180')
      el-table-column(prop='name' label='Name' width='180')
      el-table-column(prop='address' label='Address')
</template>
<script>
  // @ is an alias to /src
  import { ref,computed } from 'vue'
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
      init()


      return {
        isMobile,
        tableData,
      }
    }
  }
</script>
