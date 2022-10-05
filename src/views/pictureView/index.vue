<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col md:flex-row items-center justify-center")
  div(class="w-1/2 h-full flex items-center justify-end p-5")
    canvas(
      ref="drawItem"
      id="canvas"
      :width="size.w" :height="size.h"
      style="border: 1px solid #ccc;"
    )
    div(
      class="fixed w-[0px] h-[0px] md:w-1/2 md:h-full top-[0px] left-[0px] bg-black opacity-0"
    )
  div(class="w-1/2 h-full flex flex-col items-start justify-center ml-5")
    div(class="w-full 2xl:w-2/3 h-1/3 flex flex-wrap items-center justify-center")
      div(
        class="w-1/2 h-auto flex flex-col items-center justify-center"
        v-for="(item, index) in editTextArr"
      )
        div(class="italic text-xl font-extrabold") {{textTitle[index]}}
        input(
          class="p-2 bg-white focus:outline-none focus:shadow-outline rounded-md py-2 px-2 block appearance-none leading-normal"
          type="text" v-model="editTextArr[index]"
        )
    div(class="w-full 2xl:w-2/3 h-auto flex items-center justify-center mt-5")
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
      const editTextArr = ref(new Array(4).fill(''))
      const textTitle = ref(['大狗(上)','小狗(上)','大狗(下)','小狗(下)'])
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
        canvas = new fabric.Canvas('canvas')
        fabric.Image.fromURL(dog, oImg => {
          oImg.scaleToWidth(size.value.w)
          oImg.scaleToHeight(size.value.h)
          canvas.add(oImg)
          canvas.sendToBack(oImg)
        })
      }

      let editItem = new Array(4)
      const addText = () => {
        editItem[0] = new fabric.IText(editTextArr.value[0], {
          top: 40,
          left: 10,
        })
        editItem[1] = new fabric.IText(editTextArr.value[1], {
          top: 40,
          left: 300,
        })
        editItem[2] = new fabric.IText(editTextArr.value[2], {
          top: 300,
          left: 10,
        })
        editItem[3] = new fabric.IText(editTextArr.value[3], {
          top: 300,
          left: 300,
        })
        canvas.add(editItem[0],editItem[1],editItem[2],editItem[3])

      }

      watch(() => editTextArr.value ,() => {
        for(let index in editTextArr.value) editItem[index].set('text',editTextArr.value[index])
        canvas.renderAll()
      },{deep: true})
      watch(() => isMobile.value ,() => {
        // canvas.clear()
        // editTextArr.value = new Array(4).fill('')
        // editItem = new Array(4)
        // canvas.renderAll()
        // init()
        // addText()
      },{deep: true})

      const download = () => {
        let item = document.getElementById("canvas")
        let image = item.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream")
        let link = document.createElement('a')
        link.download = "my-image.png"
        link.href = image
        link.click()
      }

      onMounted(() => {
        init()
        addText()
      })

      return {
        size,
        download,
        editTextArr,
        textTitle,
        block,
      }
    }
  }
</script>
