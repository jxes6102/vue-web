<template lang='pug'>
div(
  class="fixed top-0 left-0 w-screen h-[100vh] bg-zinc-700 opacity-90"
)
  .body(
    class="min-h-[100vh] overflow-hidden bg-[#1d0035]"
  )
    section(
      class="absolute w-full h-full mine-flex-center"
      @click.self="close"
    )
      .box(
        class="absolute top-[150px] scale-75 md:scale-100"
      )
        .cube(
          class="relative w-[200px] h-[200px]"
        )
          .top(
            class="absolute top-0 left-0 w-[200px] h-[200px] bg-[#b22708]"
          )
          div(
            class="absolute top-0 left-0 w-full h-full"
          )
            span(
              class="absolute top-0 left-0 w-full h-full"
              v-for="item in data"
              :style="setSpanData(item)"
            )
</template>
<script>
  // @ is an alias to /src
  import { ref,inject } from 'vue'
  export default {
    name: 'rotateView',
    components: {
    },
    setup() {
      const close = inject('close')
      const data = ref([0,1,2,3])
      const setSpanData = (val) => '--i:'+val

      return {
        data,
        close,
        setSpanData,
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
section {
  transform-style: preserve-3d;
  transform: perspective(700px);
}
.box {
  transform-style: preserve-3d;
}
.box .cube {
  transform-style: preserve-3d;
  animation: rotateCube 20s linear infinite;
}
@keyframes rotateCube {
  0%{
    transform: rotateY(0deg)
  }
  100% {
    transform: rotateY(360deg)
  }
}
.box .cube div {
  transform-style: preserve-3d;
}
.box .cube div span {
  background: linear-gradient(
    135deg,
    hsl(170deg, 80%, 70%),
    hsl(190deg, 80%, 70%),
    hsl(250deg, 80%, 70%),
    hsl(320deg, 80%, 70%)
  );
  background-size: 200% 200%;
  transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
  animation: colorChange 7s infinite;
}
.box .cube .top {
  transform: rotateX(90deg) translateZ(100px);
}
.box .cube .top::before{
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: #fb6200;
  filter: blur(50px);
  transform: translateZ(-300px);
  box-shadow: 0 0 500px rgb(251,98,0,1);
  animation: shadowChange 7s infinite;
}
@keyframes colorChange {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
@keyframes shadowChange {
  0% {
    box-shadow: 0 0 100px rgba(243, 239, 237, 0.2);
    background: rgb(251,98,0,0.2)
  }
  50% {
    box-shadow: 0 0 1000px rgb(251,98,0,1);
    background: #fb6200;
  }
  100% {
    box-shadow: 0 0 100px rgba(249, 245, 243, 0.2);
    background: rgb(251,98,0,0.2);
  }
}
</style>
