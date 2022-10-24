<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col items-center justify-start")
  div(class="text-3xl my-2") {{displayName}}
  component(:is="gameName")
</template>
<script>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import guess from '@/components/game/guess.vue'
  import landmine from '@/components/game/landmine.vue'
  import memory from '@/components/game/memory.vue'
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
        if (!base[gameName.value] && gameName.value) back()
        return base[gameName.value] || '在選單點擊你想玩的遊戲'
      })

      const back = () => {
        router.push('/error')
      }

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
