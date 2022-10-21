<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90 mine-flex-center"
  @click.self="close"
)
  .body(
    class="min-h-[] mine-flex-center bg-[#25335b] scale-75 md:scale-100"
  )
    .wrap(
      class="relative top-[-80px] skew-y-[-20deg]"
    )
      .cube(
        class=""
        v-for="item in cubeCount"
      )
        div(
          class="absolute flex flex-col gap-[30px]"
          v-for="divVal in divData"
          :style="setDivData(divVal)"
        )
          span(
            v-for="spanVal in spanData"
            class="relative inline-block w-[50px] h-[50px] bg-[#dcdcdc]"
            :style="setSpanData(spanVal)"
          )
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
      const cubeCount = ref(3)
      const divData = ref([-1,0,1])
      const spanData = ref([3,2,1])
      const setDivData = (val) => '--x:'+ val +';--y:0'
      const setSpanData = (val) => '--i:'+val

      return {
        close,
        divData,
        spanData,
        cubeCount,
        setDivData,
        setSpanData
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
.wrap {
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
  translate: calc(-70px *var(--x)) calc(-60px*var(--y));
}
.wrap .cube div span {
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
