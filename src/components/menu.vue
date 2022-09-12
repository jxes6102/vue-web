<template lang='pug'>
div(class="w-auto h-[100vh] border-r-2")
  div(class="w-auto  p-2")
    el-button(:icon="Switch" class="w-full" @click="isCollapse = !isCollapse")
  el-menu(
    :default-active='defaultActive'
    :collapse='isCollapse'
    background-color="#ffffff"
    @open='handleOpen'
    @close='handleClose'
    style="border-right: 0px;"
    )
    el-menu-item(
      v-for="(item, index) of nowMenu" :key="index"
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
        const defaultActive = ref(null)
        const menuData = ref({
          original: [
            {name: '首頁', icon:'House',route:'/'},
            {name: '報表', icon:'document',route:'/form'},
            {name: '圖片', icon:'Picture',route:'/picture'},
            {name: '工具 / 樣式', icon:'Handbag',route:'/tool'},
            {name: '遊戲', icon:'MagicStick',route:'/game'},
          ],
          game: [
            {name: '首頁', icon:'House',route:'/'},
            {name: '猜數字', icon:'MagicStick'},
            {name: '記憶遊戲', icon:'MagicStick'},
            {name: '踩地雷', icon:'MagicStick'},
          ],
        })
        const nowMenu = ref([])
        const isCollapse = ref(false)
        const handleOpen = (key, keyPath) => {
          // console.log('open',key, keyPath)
        }
        const handleClose = (key, keyPath) => {
          // console.log('close',key, keyPath)
        }
        const toLink = (item) => {
          if(!item.route) return false
          router.push(item.route)
          // const query = JSON.parse(JSON.stringify(route))
          setMenu(item.route)
        }

        const setMenu = (routePath = '') => {
          if(routePath === '/game') {
            nowMenu.value = menuData.value.game
          } else {
            nowMenu.value = menuData.value.original
          }
        }

        const init = () => {
          setMenu()
        }
        init()

        return {
          isCollapse,
          handleOpen,
          handleClose,
          Switch,
          nowMenu,
          toLink,
          defaultActive,
        }
      }
    }
  </script>

