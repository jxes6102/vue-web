<template lang='pug'>
.wrap(class="w-full md:min-h-full flex h-auto")
  div(class="w-auto h-[100vh] border-r-2")
    div(class="w-auto  p-2")
      el-button(class="w-full" @click="isCollapse = !isCollapse" v-text="isCollapse ? 'open' : 'close'")
    el-menu(
      class=""
      default-active='2'
      :collapse='isCollapse'
      background-color="#ffffff"
      @open='handleOpen'
      @close='handleClose'
      style="border-right: 0px;"
      )
      el-sub-menu(index='1')
        template(#title)
          el-icon
            location
          span Navigator One
        el-menu-item-group
          template(#title)
            span Group One
          el-menu-item(index='1-1') item one
          el-menu-item(index='1-2') item two
        el-menu-item-group(title='Group Two')
          el-menu-item(index='1-3') item three
        el-sub-menu(index='1-4')
          template(#title)
            span item four
          el-menu-item(index='1-4-1') item one
      el-menu-item(index='2')
        el-icon
          icon-menu
        template(#title) Navigator Two
      el-menu-item(index='3' disabled='')
        el-icon
          document
        template(#title) Navigator Three
      el-menu-item(index='4')
        el-icon
          setting
        template(#title) Navigator Four
  router-view(class="w-full")

</template>
<script>
  // @ is an alias to /src
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    CaretRight,
    CaretLeft,
  } from '@element-plus/icons-vue'
  export default {
    name: 'HomeView',
    components: {
      Document,
      IconMenu,
      Location,
      Setting,
      CaretRight,
      CaretLeft,
    },
    setup() {
      const isCollapse = ref(false)
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
      }
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
      }
      return {
        isCollapse,
        handleOpen,
        handleClose
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
