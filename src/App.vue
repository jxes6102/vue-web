<template lang='pug'>
.wrap(
  ref="viewContainer"
  class="h-[100%] w-screen max-h-[100vh] max-w-screen flex flex-col md:flex-row"
  )
  menuView(class='fixed z-[10] bg-white')
  router-view(class='bg-[#FBFBEA]')

</template>
<script>
  // @ is an alias to /src
  import { ref, onMounted } from 'vue'
  import store from '@/store'
  import { debounce } from 'lodash'
  import menuView from '@/components/menu.vue'
  export default {
    name: 'HomeView',
    components: {
      menuView,
    },
    setup() {
      const viewContainer = ref(null)
      const resizeWidth = new ResizeObserver(entries => {
        getContainerWidth(entries[0].contentRect)
      })
      const getContainerWidth = debounce((el) => {
        store.commit('setMobile', el.width)
      }, 500)
      onMounted(() => {
        resizeWidth.observe(viewContainer.value)
      })

      return {
        viewContainer
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
