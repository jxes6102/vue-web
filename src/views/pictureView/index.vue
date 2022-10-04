<template lang='pug'>
div(class="w-full h-[100vh] flex flex-col items-center justify-center")
  div
    canvas(
      ref="drawItem"
      id="canvas"
      :width="size.w" :height="size.h"
      style="border: 1px solid #ccc;"
    )
  div
    input(type="text" v-model="text1")
</template>
<script>
  import { fabric } from "fabric"
  import { ref,onMounted,watch } from 'vue'
  import dog from '@/assets/origin.png'
  // import ball from './image/ball2.png'
  // @ is an alias to /src
  export default {
    name: 'pictureView',
    components: {
    },
    setup() {
      const drawItem = ref(null)
      const text1 = ref('')
      const size = ref({
        w:480,
        h:440
      })

      // 12:11 = 600 : 550  = 300 : 275
      let canvas
      const init = () => {
        canvas = new fabric.Canvas('canvas')
        fabric.Image.fromURL(dog, oImg => {
          oImg.scaleToWidth(480)
          oImg.scaleToHeight(440)
          canvas.add(oImg)
          canvas.sendToBack(oImg)
        })
      }

      const addText = () => {
        const editText1 = new fabric.IText(text1.value, {
          top: 0,
          left: 0
        })
        canvas.add(editText1)
        // const editText2 = new fabric.IText('2', {
        //   top: 0,
        //   left: 200
        // })
        // const editText3 = new fabric.IText('3', {
        //   top: 200,
        //   left: 0
        // })
        // const editText4 = new fabric.IText('4', {
        //   top: 200,
        //   left: 200
        // })
        // canvas.add(editText1,editText2,editText3,editText4)
      }

      watch(() => text1.value ,() => {
        console.log('123')
        // const target = this.editTexts[index]
        // target.set('text', val)
        addText()
        canvas.renderAll()
      })

      onMounted(() => {
        init()
        addText()
      })

      return {
        text1,
        size
      }
    }
  }
</script>
