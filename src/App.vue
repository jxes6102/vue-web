<template lang='pug'>
.wrap(
  ref="viewContainer"
  class="w-screen h-auto max-h-[100vh] max-w-screen"
  )
  menuView(class='fixed w-screen h-[80px] md:h-[10vh] z-[10]')
router-view(
  class="pt-[80px] md:pt-[10vh] bg-[#FBFBEA]"
)
loadView(v-if="block")
</template>
<script>
  // @ is an alias to /src
  import { ref,computed,onMounted } from 'vue'
  import store from '@/store'
  import { debounce } from 'lodash'
  import menuView from '@/components/menu.vue'
  import loadView from '@/components/loadView.vue'
  export default {
    name: 'HomeView',
    components: {
      menuView,
      loadView,
    },
    setup() {
      const block = computed(() => store.state.loading)
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

      const loadTest = async () => {
        store.commit('setLoad', true)
        await new Promise(resolve => setTimeout(resolve, 3000))
        store.commit('setLoad', false)
      }
      // loadTest()

      return {
        viewContainer,
        block,
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
