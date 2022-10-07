<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col md:flex-row items-center justify-center overflow-hidden")
  div(class="w-auto md:w-auot h-auto mt-[-100px] md:mt-0 flex items-center justify-center md:justify-end md:p-5 scale-[0.625] md:scale-100")
    canvas(ref="drawItem" id="canvas")
  div(class="w-full md:w-auto h-auto mt-[-60px] md:mt-0 flex flex-col items-center justify-center px-2")
    div(class="w-full h-auto flex flex-col items-center justify-center p-4 border-2 border-dashed border-green-400 rounded-lg")
      div(class="w-full h-auto flex flex-wrap items-center justify-center my-1 md:my-5")
        input(
          :class="[ \
            errorMessage ? 'border border-red-500' : 'border border-gray-500', \
          ]"
          class=" bg-white focus:outline-none focus:shadow-outline rounded-md py-2 px-2 block appearance-none leading-normal"
          type="text" v-model="editText"
        )
        button(
          class='bg-green-500 text-white md:mx-5 py-2 px-4 my-2 md:my-2 mx-1 font-medium rounded-xl transition-all duration-300 hover:bg-green-400'
          @click="addText"
        ) 新增文字
      button(
        class='bg-red-500 text-white my-2 md:my-5 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-red-400'
        @click="delText"
      ) 清空
      button(
        class='bg-blue-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-blue-400'
        @click="download"
      ) 下載
</template>
<script>
  import { fabric } from "fabric"
  import { ref,onMounted } from 'vue'
  import store from '@/store'
  import dog from '@/assets/originDog.png'
  // @ is an alias to /src
  export default {
    name: 'pictureView',
    components: {
    },
    setup() {
      const drawItem = ref(null)
      const editText = ref('')
      const size = ref({w:480,h:440})
      const errorMessage = ref('')

      let canvas
      const init = async() => {
        if(store.state.loading) return false
        store.commit('setLoad', true)
        canvas = null
        drawItem.value.width = size.value.w
        drawItem.value.height = size.value.h

        canvas = new fabric.Canvas('canvas')
        fabric.Image.fromURL(dog, oImg => {
          oImg.scaleToWidth(size.value.w)
          oImg.scaleToHeight(size.value.h)
          canvas.setBackgroundImage(oImg)
          // canvas.add(oImg)
          // canvas.sendToBack(oImg)
          canvas.requestRenderAll()
        })
        store.commit('setLoad', false)
      }

      let fontItem = []
      const addText = () => {
        errorMessage.value = checkFont(editText.value)
        if(errorMessage.value) return false
        const target = new fabric.IText(editText.value, {
          top: 10,
          left: 10,
          fontSize: 36,
        })
        fontItem.push(target)
        canvas.add(target)
        editText.value = ''
      }

      const delText = () => {
        for (let index in fontItem) canvas.remove(fontItem[index])
        canvas.renderAll()
      }

      const download = () => {
        if(store.state.loading) return false
        store.commit('setLoad', true)
        let item = document.getElementById("canvas")
        let image = item.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream")
        let link = document.createElement('a')
        link.download = "image"+ Date.now() +".png"
        link.href = image
        link.click()
        store.commit('setLoad', false)
      }

      onMounted(() => {
        init()
        canvas.renderAll()
      })

      const checkFont = (val) => {
        let target = ''
        if(!val) target = '請輸入文字'
        return target
      }

      return {
        size,
        drawItem,
        editText,
        errorMessage,
        addText,
        delText,
        download,
      }
    }
  }
</script>
