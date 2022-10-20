<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90 overflow-x-hidden overflow-y-auto flex items-center justify-center"
  @click.self="close"
)
  div(
    class="w-10 h-10 bg-white"
  ) cubeView
</template>
<script>
  // @ is an alias to /src
  import { ref,inject } from 'vue'
  export default {
    name: 'cubeView',
    components: {
    },
    setup() {
      const close = inject('close')

      return {
        close,
      }
    }
  }
</script>
<style scoped>

</style>
