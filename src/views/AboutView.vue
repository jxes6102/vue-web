<template lang='pug'>
div(class="about")
  h1(class="text-lg text-teal-300") This is an about page
  h1 {{$t('__hello_world')}}
  div(class="flex items-center justify-center")
    button(class="rounded-full h-auto w-auto bg-teal-300 block p-2" @click="changeLang") changeLang
</template>
<script>
  // import { computed } from 'vue'
  import store from '@/store'
  // @ is an alias to /src
  export default {
    name: 'aboutView',
    setup() {
      const changeLang = () => {
        if (localStorage.getItem('locale') === 'tw') store.commit('setLang', 'en')
        else store.commit('setLang', 'tw')
      }
      return {
        changeLang
      }
    }
  }
</script>
