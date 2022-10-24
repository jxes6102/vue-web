<template lang='pug'>
div(class="w-full h-[100vh] flex-wrap mine-flex-center overflow-auto")
  div(class="w-auto h-auto flex-wrap mine-flex-center")
    div(
      class="w-[150px] h-[150px] bg-[#66CCCC] m-3 rounded-lg hover:opacity-[0.8] hover:scale-105 mine-flex-center"
      v-for="(item, index) in data"
      @click="action(item)"
    ) {{item.name}}
  component(v-if="choseItem" :is="choseItem")
</template>
<script>
  // @ is an alias to /src
  import { ref, provide } from 'vue'
  import move from '@/components/ballView.vue'
  import scroll from '@/components/scrollView.vue'
  import square from '@/components/squareView.vue'
  import cube from '@/components/cubeView.vue'
  import rotate from '@/components/rotateView.vue'
  import store from '@/store'
  export default {
    name: 'toolView',
    components: {
      move,
      scroll,
      square,
      cube,
      rotate
    },
    setup() {
      const data = ref([
        { name:'move',isLoad:false},
        { name:'scroll',isLoad:false},
        { name:'square',isLoad:true},
        { name:'cube',isLoad:false},
        { name:'rotate',isLoad:false},
      ])
      const loadStatus = ref(false)
      provide('loadStatus', loadStatus)
      const choseItem = ref('')

      const action = (item) => {
        loadStatus.value = item.isLoad
        if(loadStatus.value) store.commit('setLoad', true)
        choseItem.value = item.name
      }

      const close = () => {
        choseItem.value = ''
      }
      provide('close', close)

      return {
        data,
        choseItem,
        loadStatus,
        action,
      }
    }
  }
</script>
