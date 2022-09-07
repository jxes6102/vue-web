<template lang='pug'>
div(class="home")
  img(alt="Vue logo" src="../assets/logo.png")
  HelloWorld(msg="Welcome to Your Vue.js App")
  h1(class="text-fuchsia-700 text-3xl") tailwind and pug test
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
