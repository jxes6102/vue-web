<template lang='pug'>
.wrap(
  ref="viewContainer"
  class="w-screen h-auto max-h-[100vh] max-w-screen"
  )
  menuView(class='fixed w-screen h-[80px] md:h-[10vh] z-[10]')
router-view(
  class="pt-[80px] md:pt-[10vh] bg-[#FBFBEA]"
)
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
        viewContainer,
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
