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
  animation: colorchange 5s linear infinite;
}
@keyframes colorchange {
  0%{
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.wrap .cube {
  position: relative;
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
.wrap .cube div span:hover {
  background-color: #ef4149;
  transition: 0s;
  filter: drop-shadow(0 0 30px #ef4149);
}
.wrap .cube div span::before {
  content: '';
  position: absolute;
  left:-40px;
  width: 40px;
  height: 100%;
  background-color: #fff;
  transform-origin: right;
  transform: skewY(45deg);
  transition: 1.5s;
}
.wrap .cube div span:hover:before {
  background-color: #f75d64;
  transition: 0s;
}
.wrap .cube div span::after {
  content: '';
  position: absolute;
  top:-40px;
  left:0px;
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  transform-origin: bottom;
  transform: skewX(45deg);
  transition: 1.5s;
}
.wrap .cube div span:hover::after {
  background-color: #f14155;
  transition: 0s;
}
</style>
