<template lang='pug'>
div(
  :class="[ \
      isMobile ? 'w-screen h-auto' : 'w-auto h-[100vh] border-r-2', \
    ]"
  )
  div(v-if="!isMobile")
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
  div(v-else)
    div(class="w-screen h-[90px] bg-gradient-to-b from-[#ffb6c1] flex items-center justify-around")
      div(
        v-for="(item, index) of nowMenu" :key="index"
        :class="[ \
          ((nowChose === item.route) || (nowChose === item.query)) ? 'scale-125' : '', \
        ]"
        class="w-[60px]"
        @click="toLink(item)"
        )
        el-icon(:size="28")
          component(:is="item.icon")
        div(class="text-xs") {{item.name}}
</template>
  <script>
    // @ is an alias to /src
    import { ref, watch, computed } from 'vue'
    import store from '@/store'
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
        const isMobile = computed(() => store.state.isMobile)
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
            {name: '猜數字', icon:'MagicStick',query:'guess'},
            {name: '記憶遊戲', icon:'MagicStick',query:'memory'},
            {name: '踩地雷', icon:'MagicStick',query:'landmine'},
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
          setQuery(item.query)
          if(!item.route) return false
          router.push(item.route)
        }

        const setMenu = (routePath) => {
          if(routePath === '/game') nowMenu.value = menuData.value.game
          else nowMenu.value = menuData.value.original
        }

        const setQuery = (data) => {
          const query = JSON.parse(JSON.stringify(route.query))
          if (data) query.gameMode = data
          else delete query.gameMode
          router.replace({ query })
        }
        const nowChose = ref('')
        watch(() => route.path,(val) => {
          nowChose.value = val
          setMenu(val)
        },{immediate:true})

        watch(() => route.query,(val) => {
          if(val.gameMode) nowChose.value = val.gameMode
        },{immediate:true})

        const init = () => {
        }
        init()

        return {
          isCollapse,
          handleOpen,
          handleClose,
          Document,
          Setting,
          House,
          Switch,
          MagicStick,
          Picture,
          Handbag,
          nowMenu,
          toLink,
          defaultActive,
          isMobile,
          nowChose,
        }
      }
    }
  </script>

