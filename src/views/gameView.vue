<template lang='pug'>
div(class="")
  h1 game view
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
      const init = () => {
        // const query = JSON.parse(JSON.stringify(route.query))
      }
      init()

      return {
        gameName,
      }
    }
  }
</script>
