<template lang='pug'>
div(class="w-[100vw] md:w-[50vw] h-[70vh] md:h-[90vh] flex flex-col items-center justify-start bg-[#ffffff]")
  div(class="flex p-2 justify-center items-center")
    input(
      class="p-2 bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-2 block appearance-none leading-normal"
      type='email'
      placeholder='輸入要猜的數字'
    )

</template>
<script>
  // @ is an alias to /src
  export default {
    name: 'guessView',
    components: {
    },
    setup(prop, {emit}) {
      // emit('name', '猜數字')

      return {
      }
    }
  }
</script>
