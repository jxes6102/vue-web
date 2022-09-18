<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col items-center justify-center md:justify-start")
  div(class="text-3xl") {{displayName}}
  component(:is="gameName")
</template>
<script>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import guess from '@/components/guess.vue'
  import landmine from '@/components/landmine.vue'
  import memory from '@/components/memory.vue'
  // @ is an alias to /src
  export default {
    name: 'gameView',
    components: {
      guess,
      landmine,
      memory,
    },
    setup() {
      const route = useRoute()
      const router = useRouter()
      const gameName = computed(() => route.query.gameMode)
      const displayName = computed(() => {
        const base = {
          guess: '猜數字',
          memory: '記憶遊戲',
          landmine: '踩地雷'
        }
        return base[gameName.value] || '在選單點擊你想玩的遊戲'
      })
      const init = () => {
        // const query = JSON.parse(JSON.stringify(route.query))
      }
      init()

      return {
        gameName,
        displayName,
      }
    }
  }
</script>
