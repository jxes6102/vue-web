<template lang='pug'>
div
  el-radio-group(v-model='isCollapse' style='margin-bottom: 20px')
    el-radio-button(:label='false') expand
    el-radio-button(:label='true') collapse
  el-menu.el-menu-vertical-demo(default-active='2' :collapse='isCollapse' @open='handleOpen' @close='handleClose')
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

</template>
<script>
  // import { computed } from 'vue'
  // import store from '@/store'
  // @ is an alias to /src
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  export default {
    name: 'mainView',
    components: {
      Document,
      IconMenu,
      Location,
      Setting,
    },
    setup() {
      const isCollapse = ref(true)
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
