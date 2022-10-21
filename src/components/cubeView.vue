<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90 flex items-center justify-center"
  @click.self="close"
)
  .body
    .wrap(
      class=""
    )
      .cube(class="")
        div(class="" style="--x:-1;--y:0;")
          span(class="" style="--i:3")
          span(class="" style="--i:2")
          span(class="" style="--i:1")
        div(class="" style="--x:0;--y:0;")
          span(class="" style="--i:3")
          span(class="" style="--i:2")
          span(class="" style="--i:1")
        div(class="" style="--x:1;--y:0;")
          span(class="" style="--i:3")
          span(class="" style="--i:2")
          span(class="" style="--i:1")

</template>
<script>
  // @ is an alias to /src
  import { ref,inject } from 'vue'
  export default {
    name: 'cubeView',
    components: {
    },
    setup() {
      const close = inject('close')

      return {
        close,
      }
    }
  }
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25335b;
}
.wrap {
  position: relative;
  top: -80px;
  transform: skewY(-20deg);
}
.wrap .cube {
  z-index: 2;
}
.wrap .cube:nth-child(2) {
  z-index: 1;
  translate: -60px -60px;
}
.wrap .cube:nth-child(3) {
  z-index: 3;
  translate: 60px 60px;
}
.wrap .cube div {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 30px;
  translate: calc(-70px *var(--x)) calc(-60px*var(--y));
}
.wrap .cube div span {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #dcdcdc;
  z-index: calc(1*var(--i));
  transition: 1.5s;
}
</style>
