(function(){"use strict";var e={3582:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(5430),r=JSON.parse('{"__hello_world":"你好 世界"}'),a=JSON.parse('{"__hello_world":"hello world"}');const i=(0,o.o)({locale:"tw",fallbackLocale:"tw",messages:{tw:r,en:a}});var l=i},4961:function(e,t,n){var o=n(5860),r=n(3099);const a={class:"wrap md:w-screen w-full min-h-full flex flex-col md:flex-row h-auto",ref:"viewContainer"};function i(e,t,n,o,i,l){const u=(0,r.up)("menuView"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(u),(0,r.Wm)(c,{class:"md:w-screen w-full"})],512)}var l=n(4641),u=n(3936),c=n(9620),s=n(8317);const d={key:0},f={class:"w-auto p-2"},v={key:1},g={class:"w-screen h-[90px] bg-gradient-to-b from-[#ffb6c1] flex items-center justify-around"},m=["onClick"],h={class:"text-xs"};function p(e,t,n,o,a,i){const l=(0,r.up)("el-button"),u=(0,r.up)("el-icon"),c=(0,r.up)("el-menu-item"),p=(0,r.up)("el-menu");return(0,r.wg)(),(0,r.iD)("div",{class:(0,s.C_)([o.isMobile?"w-screen h-auto":"w-auto h-[100vh] border-r-2"])},[o.isMobile?((0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.nowMenu,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,s.C_)(["w-[60px]",[o.nowChose===e.route||o.nowChose===e.query?"scale-125":""]]),key:t,onClick:t=>o.toLink(e)},[(0,r.Wm)(u,{size:28},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e.icon)))])),_:2},1024),(0,r._)("div",h,(0,s.zw)(e.name),1)],10,m)))),128))])])):((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",f,[(0,r.Wm)(l,{class:"w-full",icon:o.Switch,onClick:t[0]||(t[0]=e=>o.isCollapse=!o.isCollapse)},null,8,["icon"])]),(0,r.Wm)(p,{"default-active":o.defaultActive,collapse:o.isCollapse,"background-color":"#ffffff",onOpen:o.handleOpen,onClose:o.handleClose,style:{"border-right":"0px"}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.nowMenu,((e,t)=>((0,r.wg)(),(0,r.j4)(c,{key:t,index:t+"",onClick:t=>o.toLink(e)},{title:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.name),1)])),default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e.icon)))])),_:2},1024)])),_:2},1032,["index","onClick"])))),128))])),_:1},8,["default-active","collapse","onOpen","onClose"])]))],2)}var b=n(9470),w=n(3465),k={name:"menuView",components:{Document:w.BBB,Setting:w.pEs,House:w.TXp,Switch:w.rsf,MagicStick:w.l8K,Picture:w.tap,Handbag:w.JUh},setup(){const e=(0,b.yj)(),t=(0,b.tv)(),n=(0,l.iH)(null),o=(0,r.Fl)((()=>u.Z.state.isMobile)),a=(0,l.iH)({original:[{name:"首頁",icon:"House",route:"/"},{name:"報表",icon:"document",route:"/form"},{name:"圖片",icon:"Picture",route:"/picture"},{name:"工具 / 樣式",icon:"Handbag",route:"/tool"},{name:"遊戲",icon:"MagicStick",route:"/game"}],game:[{name:"首頁",icon:"House",route:"/"},{name:"猜數字",icon:"MagicStick",query:"guess"},{name:"記憶遊戲",icon:"MagicStick",query:"memory"},{name:"踩地雷",icon:"MagicStick",query:"landmine"}]}),i=(0,l.iH)([]),c=(0,l.iH)(!1),s=(e,t)=>{},d=(e,t)=>{},f=e=>{if(g(e.query),!e.route)return!1;t.push(e.route)},v=e=>{i.value="/game"===e?a.value.game:a.value.original},g=n=>{const o=JSON.parse(JSON.stringify(e.query));n?o.gameMode=n:delete o.gameMode,t.replace({query:o})},m=(0,l.iH)("");(0,r.YP)((()=>e.path),(e=>{m.value=e,v(e)}),{immediate:!0}),(0,r.YP)((()=>e.query),(e=>{e.gameMode&&(m.value=e.gameMode)}),{immediate:!0});const h=()=>{};return h(),{isCollapse:c,handleOpen:s,handleClose:d,Document:w.BBB,Setting:w.pEs,House:w.TXp,Switch:w.rsf,MagicStick:w.l8K,Picture:w.tap,Handbag:w.JUh,nowMenu:i,toLink:f,defaultActive:n,isMobile:o,nowChose:m}}},y=n(5727);const I=(0,y.Z)(k,[["render",p]]);var C=I,Z={name:"HomeView",components:{menuView:C},setup(){const e=(0,l.iH)(null),t=new ResizeObserver((e=>{n(e[0].contentRect)})),n=(0,c.debounce)((e=>{u.Z.commit("setMobile",e.width)}),500);return(0,r.bv)((()=>{t.observe(e.value)})),{viewContainer:e}}};const W=(0,y.Z)(Z,[["render",i]]);var R=W,N=n(3276);(0,N.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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";const V={class:"home"},M=(0,r._)("img",{alt:"Vue logo",src:E},null,-1),j=(0,r._)("h1",{class:"text-fuchsia-700 text-3xl"},"tailwind and pug and ghpage test",-1);function z(e,t,n,o,a,i){const l=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",V,[M,(0,r.Wm)(l,{msg:"Welcome to Your Vue.js App"}),j])}const B={class:"hello"},O=(0,r.uE)('<p data-v-db1ff97e> For a guide and recipes on how to configure / customize this project,<br data-v-db1ff97e> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>vue-cli documentation</a>. </p><h3 data-v-db1ff97e>Installed CLI Plugins</h3><ul data-v-db1ff97e><li data-v-db1ff97e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-db1ff97e>babel</a></li><li data-v-db1ff97e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-db1ff97e>pwa</a></li><li data-v-db1ff97e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-db1ff97e>router</a></li><li data-v-db1ff97e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-db1ff97e>vuex</a></li><li data-v-db1ff97e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-db1ff97e>eslint</a></li></ul><h3 data-v-db1ff97e>Essential Links</h3><ul data-v-db1ff97e><li data-v-db1ff97e><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>Core Docs</a></li><li data-v-db1ff97e><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>Forum</a></li><li data-v-db1ff97e><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>Community Chat</a></li><li data-v-db1ff97e><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-db1ff97e>Twitter</a></li><li data-v-db1ff97e><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>News</a></li></ul><h3 data-v-db1ff97e>Ecosystem</h3><ul data-v-db1ff97e><li data-v-db1ff97e><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>vue-router</a></li><li data-v-db1ff97e><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>vuex</a></li><li data-v-db1ff97e><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-db1ff97e>vue-devtools</a></li><li data-v-db1ff97e><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-db1ff97e>vue-loader</a></li><li data-v-db1ff97e><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-db1ff97e>awesome-vue</a></li></ul>',7);function S(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",B,[(0,r._)("h1",null,(0,s.zw)(n.msg),1),O])}n(701);var Q={name:"HelloWorld",props:{msg:String},setup(){const e="abcdefd",t="d";let n="";const o=e.indexOf(t);n=o?e.substring(0,o+1).split("").reverse().join("")+e.substring(o+1,e.length):e,console.log(n)}};const x=(0,y.Z)(Q,[["render",S],["__scopeId","data-v-db1ff97e"]]);var A=x,G={name:"HomeView",components:{HelloWorld:A}};const P=(0,y.Z)(G,[["render",z]]);var U=P;const Y=(0,r._)("h1",null,"main view",-1),J=[Y];function D(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,J)}var H={name:"mainView",components:{},setup(){return{}}};const L=(0,y.Z)(H,[["render",D]]);var K=L;const T=(0,r._)("h1",null,"form view",-1),X=[T];function F(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,X)}var q={name:"formView",components:{},setup(){return{}}};const _=(0,y.Z)(q,[["render",F]]);var $=_;const ee=(0,r._)("h1",null,"game view",-1);function te(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,[ee,((0,r.wg)(),(0,r.j4)((0,r.LL)(o.gameName)))])}const ne=(0,r._)("h1",null,"guess view",-1),oe=[ne];function re(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,oe)}var ae={name:"guessView",components:{},setup(){return{}}};const ie=(0,y.Z)(ae,[["render",re]]);var le=ie;const ue=(0,r._)("h1",null,"landmine view",-1),ce=[ue];function se(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,ce)}var de={name:"landmineView",components:{},setup(){return{}}};const fe=(0,y.Z)(de,[["render",se]]);var ve=fe;const ge=(0,r._)("h1",null,"memory view",-1),me=[ge];function he(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,me)}var pe={name:"memoryView",components:{},setup(){return{}}};const be=(0,y.Z)(pe,[["render",he]]);var we=be,ke={name:"gameView",components:{guess:le,landmine:ve,memory:we},setup(){const e=(0,b.yj)(),t=((0,b.tv)(),(0,r.Fl)((()=>e.query.gameMode))),n=()=>{};return n(),{gameName:t}}};const ye=(0,y.Z)(ke,[["render",te]]);var Ie=ye;const Ce=(0,r._)("h1",null,"picture view",-1),Ze=[Ce];function We(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,Ze)}var Re={name:"pictureView",components:{},setup(){return{}}};const Ne=(0,y.Z)(Re,[["render",We]]);var Ee=Ne;const Ve=(0,r._)("h1",null,"tool view",-1),Me=[Ve];function je(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,Me)}var ze={name:"toolView",components:{},setup(){return{}}};const Be=(0,y.Z)(ze,[["render",je]]);var Oe=Be;const Se=[{path:"/",component:K},{path:"/home",component:U},{path:"/form",component:$},{path:"/game",component:Ie},{path:"/picture",component:Ee},{path:"/tool",component:Oe},{path:"/about",component:()=>n.e(443).then(n.bind(n,5641))},{path:"/:catchAll(.*)",redirect:"/"}],Qe=(0,b.p7)({history:(0,b.r5)(""),routes:Se});var xe=Qe,Ae=n(3582),Ge=n(3287);n(1246);(0,o.ri)(R).use(u.Z).use(xe).use(Ge.Z).use(Ae.Z).mount("#app")},3936:function(e,t,n){var o=n(9973),r=n(3582);t["Z"]=(0,o.MT)({state:{lang:"tw",loading:!1,isMobile:!1},getters:{},mutations:{setLang(e,t){e.lang=t,localStorage.setItem("locale",t),r.Z.global.locale=t},setMobile(e,t){e.isMobile=t<=768}},actions:{},modules:{}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-web:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var l,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(v);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),l=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var s=u(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkvue_web"]=self["webpackChunkvue_web"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4961)}));o=n.O(o)})();
//# sourceMappingURL=app.js.map