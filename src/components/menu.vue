<template lang='pug'>
div(class="w-auto h-[100vh] border-r-2")
  div(class="w-auto  p-2")
    el-button(:icon="Switch" class="w-full" @click="isCollapse = !isCollapse")
  el-menu(
    class=""
    :collapse='isCollapse'
    background-color="#ffffff"
    @open='handleOpen'
    @close='handleClose'
    style="border-right: 0px;"
    )
    el-menu-item(
      v-for="(item, index) of menuData" :key="index"
      :index='index + ""'
      @click="toLink(item)"
      )
      el-icon
        component(:is="item.icon")
      template(#title) {{item.name}}
</template>
  <script>
    // @ is an alias to /src
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
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
        const route = useRoute()
        const router = useRouter()
        const routeData = ref({
          original: [
            {name: '首頁', icon:'House',route:'/'},
            {name: '遊戲', icon:'MagicStick',route:'/game'},
            {name: '報表', icon:'document',route:'/form'},
            {name: '圖片', icon:'Picture',route:'/picture'},
            {name: '工具 / 樣式', icon:'Handbag',route:'/tool'}
          ],
          game: [
            {name: '首頁', icon:'House',route:'/'},
            {name: '猜數字', icon:'MagicStick'},
            {name: '記憶遊戲', icon:'MagicStick'},
            {name: '踩地雷', icon:'MagicStick'},
          ],
        })
        const menuData = ref([
          {name: '首頁', icon:'House',route:'/'},
          {name: '遊戲', icon:'MagicStick',route:'/game'},
          {name: '報表', icon:'document',route:'/form'},
          {name: '圖片', icon:'Picture',route:'/picture'},
          {name: '工具 / 樣式', icon:'Handbag',route:'/tool'}
        ])
        const isCollapse = ref(false)
        const handleOpen = (key, keyPath) => {
          // console.log('open',key, keyPath)
        }
        const handleClose = (key, keyPath) => {
          // console.log('close',key, keyPath)
        }
        const toLink = (item) => {
          if(!item.route) return false
          // console.log('gogo', item.route)
          router.push(item.route)
          // const query = JSON.parse(JSON.stringify(route))
          if(item.route === '/game') {
            menuData.value = [
              {name: '首頁', icon:'House',route:'/'},
              {name: '猜數字', icon:'MagicStick'},
              {name: '記憶遊戲', icon:'MagicStick'},
              {name: '踩地雷', icon:'MagicStick'},
            ]
          } else {
            menuData.value = [
              {name: '首頁', icon:'House',route:'/'},
              {name: '遊戲', icon:'MagicStick',route:'/game'},
              {name: '報表', icon:'document',route:'/form'},
              {name: '圖片', icon:'Picture',route:'/picture'},
              {name: '工具 / 樣式', icon:'Handbag',route:'/tool'}
            ]
          }
        }
        const init = () => {

        }
        return {
          isCollapse,
          handleOpen,
          handleClose,
          Switch,
          menuData,
          toLink,
        }
      }
    }
  </script>

