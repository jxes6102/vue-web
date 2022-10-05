<template lang='pug'>
div(class="w-full h-[100vh] flex items-center justify-center")
  div(class="")
    canvas(
      ref="drawItem"
      id="canvas"
      :width="size.w" :height="size.h"
      style="border: 1px solid #ccc;"
    )
  div(class="flex flex-col items-center justify-center")
    input(type="text" v-model="text1")
    input(type="text" v-model="text2")
    input(type="text" v-model="text3")
    input(type="text" v-model="text4")
    button(
      class='bg-blue-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-blue-400'
      @click="download"
    ) 下載
  //- div
  //-   input(type="text" v-model="editTextArr[0]")
</template>
<script>
  import { fabric } from "fabric"
  import { ref,onMounted,watch } from 'vue'
  import dog from '@/assets/originDog.png'
  // @ is an alias to /src
  export default {
    name: 'pictureView',
    components: {
    },
    setup() {
      const drawItem = ref(null)
      const text1 = ref('111')
      const text2 = ref('222')
      const text3 = ref('333')
      const text4 = ref('444')
      const editTextArr = ref(new Array(4))
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

      let editText1,editText2,editText3,editText4
      // let editItem = new Array(4)
      const addText = () => {
        editText1 = new fabric.IText(text1.value, {
          top: 0,
          left: 0
        })
        editText2 = new fabric.IText(text2.value, {
          top: 0,
          left: 200
        })
        editText3 = new fabric.IText(text3.value, {
          top: 200,
          left: 0
        })
        editText4 = new fabric.IText(text4.value, {
          top: 200,
          left: 200
        })
        canvas.add(editText1,editText2,editText3,editText4)
        // editItem[0] = new fabric.IText(editTextArr.value[0], {
        //   top: 100,
        //   left: 100
        // })
        // canvas.add(editItem)

      }

      watch(() => text1.value ,() => {
        editText1.set('text',text1.value)
        canvas.renderAll()
      })
      watch(() => text2.value ,() => {
        editText2.set('text',text2.value)
        canvas.renderAll()
      })
      watch(() => text3.value ,() => {
        editText3.set('text',text3.value)
        canvas.renderAll()
      })
      watch(() => text4.value ,() => {
        editText4.set('text',text4.value)
        canvas.renderAll()
      })

      // watch(() => editTextArr.value ,() => {
      //   editItem[0].set('text',editTextArr.value[0])
      //   canvas.renderAll()
      // },{deep: true})

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
        text1,
        text2,
        text3,
        text4,
        size,
        download,
        editTextArr,
      }
    }
  }
</script>
