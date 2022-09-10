<template lang='pug'>
div(class="w-auto h-[100vh] border-r-2")
  div(class="w-auto  p-2")
    el-button(:icon="Switch" class="w-full" @click="isCollapse = !isCollapse")
  el-menu(
    class=""
    default-active='0'
    :collapse='isCollapse'
    background-color="#ffffff"
    @open='handleOpen'
    @close='handleClose'
    style="border-right: 0px;"
    )
    component(v-for="(item, index) of menuData" :key="index" :is="item.child ? 'el-sub-menu' : 'el-menu-item'" :index='index + ""')
      el-icon(v-if="!item.child")
        component(v-if="!item.child" :is="item.icon")
      template(v-if="!item.child" #title) {{item.name}}
      template(v-if="item.child" #title)
        el-icon
          component(:is="item.icon")
        span {{item.name}}
      el-menu-item-group(v-if="item.child" v-for="(childItem, childIndex) of item.child")
        el-menu-item(:index='index + "-" + childIndex') {{childItem}}
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
        const menuData = ref([
          {name: '首頁', icon:'House',},
          {name: '遊戲', icon:'MagicStick', child: ['猜數字', '記憶遊戲', '踩地雷']},
          {name: '報表', icon:'document',},
          {name: '圖片', icon:'Picture',},
          {name: '工具 / 樣式', icon:'Handbag',}
        ])
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
          Switch,
          menuData,
        }
      }
    }
  </script>

