<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col md:flex-row items-center justify-center")
  div(
    class="w-1/2 h-full flex items-center justify-end p-5 scale-[0.625] md:scale-100"
  )
    canvas(
      ref="drawItem"
      id="canvas"
    )
  div(class="w-1/2 h-full flex flex-col items-start justify-center ml-5")
    div(class="w-full h-auto flex flex-col items-center justify-center")
      div(class="w-full h-auto flex items-center justify-center my-5")
        input(
          class="p-2 bg-white focus:outline-none focus:shadow-outline rounded-md py-2 px-2 block appearance-none leading-normal"
          type="text" v-model="editText"
        )
        button(
          class='bg-green-500 text-white mx-5 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400'
          @click="addText"
        ) 新增文字
      button(
        class='bg-red-500 text-white my-5 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-red-400'
        @click="delText"
      ) 清空
      button(
        class='bg-blue-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-blue-400'
        @click="download"
      ) 下載
</template>
<script>
  import { fabric } from "fabric"
  import { ref,onMounted,watch,computed } from 'vue'
  import store from '@/store'
  import dog from '@/assets/originDog.png'
  // @ is an alias to /src
  export default {
    name: 'pictureView',
    components: {
    },
    setup() {
      const isMobile = computed(() => store.state.isMobile)
      const drawItem = ref(null)
      const editText = ref('')
      const size = computed(() => {
        let target = {w:0,h:0}
        if (isMobile.value) {
          target.w = 300
          target.h = 275
        } else {
          target.w = 480
          target.h = 440
        }
        return target
      })
      const block = computed(() => 'w-['+ size.value.w +'px]' + ' h-['+ size.value.h +'px]')

      let canvas
      const init = () => {

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

      }

      let fontItem = []
      const addText = () => {
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

      watch(() => isMobile.value ,() => {

      },{deep: true})

      const download = () => {
        let item = document.getElementById("canvas")
        let image = item.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream")
        let link = document.createElement('a')
        link.download = "my-image.png"
        link.href = image
        link.click()
      }

      onMounted(async() => {
        // await late()
        init()
        canvas.renderAll()
      })

      const late = async() => {
        await new Promise(resolve => setTimeout(resolve, 3000))
      }

      return {
        size,
        download,
        block,
        isMobile,
        drawItem,
        editText,
        addText,
        delText,
      }
    }
  }
</script>
