<template lang='pug'>
.wrap(class="w-full md:min-h-full flex h-auto")
  menuView
  router-view(class="w-full")

</template>
<script>
  // @ is an alias to /src
  import menuView from '@/components/menu.vue'
  export default {
    name: 'HomeView',
    components: {
      menuView,
    },
    setup() {
      return {
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
