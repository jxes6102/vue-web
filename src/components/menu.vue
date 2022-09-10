<template lang='pug'>
div(class="w-auto h-[100vh] border-r-2")
  div(class="w-auto  p-2")
    el-button(:icon="Switch" class="w-full" @click="isCollapse = !isCollapse")
  el-menu(
    class=""
    default-active='2'
    :collapse='isCollapse'
    background-color="#ffffff"
    @open='handleOpen'
    @close='handleClose'
    style="border-right: 0px;"
    )
    el-menu-item(index='1')
      el-icon
        House
      template(#title) 報表
    el-sub-menu(index='2')
      template(#title)
        el-icon
          MagicStick
        span 遊戲
      el-menu-item-group
        el-menu-item(index='2-1') 猜數字
        el-menu-item(index='2-2') 記憶遊戲
        el-menu-item(index='2-3') 踩地雷
    el-menu-item(index='3')
      el-icon
        document
      template(#title) 報表
    el-menu-item(index='4')
      el-icon
        Picture
      template(#title) 圖片
    el-menu-item(index='5')
      el-icon
        Handbag
      template(#title) 工具 / 樣式
</template>
  <script>
    // @ is an alias to /src
    import { ref } from 'vue'
    import {
      Document,
      Setting,
      House,
      Switch,
      MagicStick,
      Picture,
      Handbag,
    } from '@element-plus/icons-vue'
    export default {
      name: 'menuView',
      components: {
        Document,
        Setting,
        House,
        Switch,
        MagicStick,
        Picture,
        Handbag,
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
          handleClose,
          Switch
        }
      }
    }
  </script>

