<template lang='pug'>
div(class="about flex flex-col")
  nav.dropdownmenu
    ul
      li
        a() Home
      li
        a() About Me
      li
        a(href='#') Articles on HTML5 & CSS3
        ul#submenu
          li
            a() Difference between SVG vs. Canvas
          li
            a() New features in HTML5
          li
            a() Creating links to sections within a webpage
      li
        a() News
      li
        a() Contact Us
  h1(class="text-lg text-teal-300") This is an about page
  h1 {{$t('__hello_world')}}
  h1(
    :class="[ \
      status ? 'text-orange-400' : 'text-blue-700', \
      isOpen ? 'text-sm' : 'text-xl', \
    ]"
  ) ref css test
  div(class="mine-flex-center")
    button(class="rounded-full h-auto w-auto bg-teal-300 block p-2" @click="changeLang") changeLang
</template>
<script>
  import {ref } from 'vue'
  import store from '@/store'
  // @ is an alias to /src
  export default {
    name: 'aboutView',
    setup() {
      const status = ref(true)
      const isOpen = ref(true)
      const changeLang = () => {
        if (localStorage.getItem('locale') === 'tw') store.commit('setLang', 'en')
        else store.commit('setLang', 'tw')
      }
      return {
        changeLang,
        status,
        isOpen,
      }
    }
  }
</script>
<style scoped>
.dropdownmenu ul, .dropdownmenu li {
	margin: 0;
	padding: 0;
}
.dropdownmenu ul {
	background: gray;
	list-style: none;
	width: 100%;
}
.dropdownmenu li {
	float: left;
	position: relative;
	width:auto;
}
.dropdownmenu a {
	background: #30A6E6;
	color: #FFFFFF;
	display: block;
	font: bold 12px/20px sans-serif;
	padding: 5px 10px;
	text-align: center;
	text-decoration: none;
	-webkit-transition: all .25s ease;
	-moz-transition: all .25s ease;
	-ms-transition: all .25s ease;
	-o-transition: all .25s ease;
	transition: all .25s ease;
}
.dropdownmenu li:hover a {
	background: #000000;
}
#submenu {
	left: 0;
	opacity: 0;
	position: absolute;
	top: 35px;
	visibility: hidden;
	z-index: 1;
}
li:hover ul#submenu {
	opacity: 1;
	top: 40px;	/* adjust this as per top nav padding top & bottom comes */
	visibility: visible;
}
#submenu li {
	float: none;
	width: 100%;
}
#submenu a:hover {
	background: #DF4B05;
}
#submenu a {
	background-color:#000000;
}
</style>
