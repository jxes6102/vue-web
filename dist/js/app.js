(function(){var e={3582:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5430),i=JSON.parse('{"__hello_world":"你好 世界"}'),o=JSON.parse('{"__hello_world":"hello world"}');const l=(0,a.o)({locale:"tw",fallbackLocale:"tw",messages:{tw:i,en:o}});var r=l},2514:function(e,t,n){"use strict";var a=n(5860),i=n(3099);const o={class:"wrap w-screen h-auto max-h-[100vh] max-w-screen",ref:"viewContainer"};function l(e,t,n,a,l,r){const u=(0,i.up)("menuView"),s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[(0,i.Wm)(u,{class:"fixed w-screen h-[80px] md:h-[10vh] z-[10]"})],512),(0,i.Wm)(s,{class:"pt-[80px] md:pt-[10vh] bg-[#FBFBEA]"})],64)}var r=n(4641),u=n(3936),s=n(9620),c=n(8317);const d=["onClick"],v={class:"text-xs"};function m(e,t,n,a,o,l){const r=(0,i.up)("el-icon");return(0,i.wg)(),(0,i.iD)("div",{class:(0,c.C_)(["flex items-center justify-around",["bg-gradient-to-b from-[#ffb6c1] to-[#FBFBEA]"]])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.nowMenu,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,c.C_)(["w-[60px] cursor-pointer",[a.nowChose===e.route||a.nowChose===e.query?"scale-125":""]]),key:t,onClick:t=>a.toLink(e)},[(0,i.Wm)(r,{size:28},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)((0,i.LL)(e.icon)))])),_:2},1024),(0,i._)("div",v,(0,c.zw)(e.name),1)],10,d)))),128))])}var g=n(9470),f=n(3465),p={name:"menuView",components:{Document:f.BBB,Setting:f.pEs,House:f.TXp,Switch:f.rsf,MagicStick:f.l8K,Picture:f.tap,Handbag:f.JUh},props:{},setup(){const e=(0,g.yj)(),t=(0,g.tv)(),n=(0,r.iH)(null),a=(0,i.Fl)((()=>u.Z.state.isMobile)),o=(0,r.iH)({original:[{name:"首頁",icon:"House",route:"/"},{name:"報表",icon:"document",route:"/form"},{name:"圖片",icon:"Picture",route:"/picture"},{name:"工具 / 樣式",icon:"Handbag",route:"/tool"},{name:"遊戲",icon:"MagicStick",route:"/game"}],game:[{name:"首頁",icon:"House",route:"/"},{name:"猜數字",icon:"MagicStick",query:"guess"},{name:"記憶遊戲",icon:"MagicStick",query:"memory"},{name:"踩地雷",icon:"MagicStick",query:"landmine"}]}),l=(0,r.iH)([]),s=e=>{if(d(e.query),!e.route)return!1;t.push(e.route)},c=e=>{l.value="/game"===e?o.value.game:o.value.original},d=n=>{const a=JSON.parse(JSON.stringify(e.query));n?a.gameMode=n:delete a.gameMode,t.replace({query:a})},v=(0,r.iH)("");(0,i.YP)((()=>e.path),(e=>{v.value=e,c(e)}),{immediate:!0}),(0,i.YP)((()=>e.query),(e=>{e.gameMode&&(v.value=e.gameMode)}),{immediate:!0});const m=()=>{};return m(),{Document:f.BBB,Setting:f.pEs,House:f.TXp,Switch:f.rsf,MagicStick:f.l8K,Picture:f.tap,Handbag:f.JUh,nowMenu:l,toLink:s,defaultActive:n,isMobile:a,nowChose:v}}},h=n(5727);const w=(0,h.Z)(p,[["render",m]]);var b=w,k={name:"HomeView",components:{menuView:b},setup(){const e=(0,r.iH)(null),t=new ResizeObserver((e=>{n(e[0].contentRect)})),n=(0,s.debounce)((e=>{u.Z.commit("setMobile",e.width)}),500);return(0,i.bv)((()=>{t.observe(e.value)})),{viewContainer:e}}};const y=(0,h.Z)(k,[["render",l]]);var x=y,C=n(3276);(0,C.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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";const j={class:"home"},I=(0,i._)("img",{alt:"Vue logo",src:S},null,-1),N=(0,i._)("h1",{class:"text-fuchsia-700 text-3xl"},"tailwind and pug and ghpage test",-1);function B(e,t,n,a,o,l){const r=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.iD)("div",j,[I,(0,i.Wm)(r,{msg:"Welcome to Your Vue.js App"}),N])}const Z={class:"hello"},M=(0,i.uE)('<p data-v-0af53232> For a guide and recipes on how to configure / customize this project,<br data-v-0af53232> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-0af53232>vue-cli documentation</a>. </p><h3 data-v-0af53232>Installed CLI Plugins</h3><ul data-v-0af53232><li data-v-0af53232><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-0af53232>babel</a></li><li data-v-0af53232><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-0af53232>pwa</a></li><li data-v-0af53232><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-0af53232>router</a></li><li data-v-0af53232><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-0af53232>vuex</a></li><li data-v-0af53232><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-0af53232>eslint</a></li></ul><h3 data-v-0af53232>Essential Links</h3><ul data-v-0af53232><li data-v-0af53232><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-0af53232>Core Docs</a></li><li data-v-0af53232><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-0af53232>Forum</a></li><li data-v-0af53232><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-0af53232>Community Chat</a></li><li data-v-0af53232><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-0af53232>Twitter</a></li><li data-v-0af53232><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-0af53232>News</a></li></ul><h3 data-v-0af53232>Ecosystem</h3><ul data-v-0af53232><li data-v-0af53232><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-0af53232>vue-router</a></li><li data-v-0af53232><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-0af53232>vuex</a></li><li data-v-0af53232><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-0af53232>vue-devtools</a></li><li data-v-0af53232><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-0af53232>vue-loader</a></li><li data-v-0af53232><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-0af53232>awesome-vue</a></li></ul>',7);function z(e,t,n,a,o,l){return(0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("h1",null,(0,c.zw)(n.msg),1),M])}n(701);var R={name:"HelloWorld",props:{msg:String},setup(){const e=[6,7,9];let t=0;for(let n=1;n<=Math.min(...e);n++)Math.min(...e)%n===0&&Math.max(...e)%n===0&&(t=n);console.log(t)}};const W=(0,h.Z)(R,[["render",z],["__scopeId","data-v-0af53232"]]);var E=W,V={name:"HomeView",components:{HelloWorld:E}};const A=(0,h.Z)(V,[["render",B]]);var D=A,H=n(6657);const O=(0,i._)("h1",null,"form view",-1),Y=[O];function P(e,t,n,a,o,l){return(0,i.wg)(),(0,i.iD)("div",null,Y)}var Q={name:"formView",components:{},setup(){return{}}};const G=(0,h.Z)(Q,[["render",P]]);var U=G;const J={class:"w-full h-[100vh] flex flex-col items-center justify-start"},T={class:"text-3xl my-2"};function K(e,t,n,a,o,l){return(0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("div",T,(0,c.zw)(a.displayName),1),((0,i.wg)(),(0,i.j4)((0,i.LL)(a.gameName)))])}const L={class:"w-[100vw] md:w-[50vw] h-[80vh] md:h-[90vh] flex flex-col items-center justify-start"},X={class:"flex p-1 justify-center items-center"},F={key:0,class:"text-base text-rose-600"},q={class:"w-full flex mt-1 p-2 justify-around items-center"},_=(0,i._)("div",null,"數字",-1),$=(0,i._)("div",null,"AB",-1),ee={key:0},te={class:"w-full h-auto max-h-[45vh] md:max-h-[55vh] mt-2 overflow-auto",ref:"mainView"},ne={class:"w-full flex p-2 justify-around items-center"},ae={key:0},ie={key:1,class:"w-full h-auto overflow-auto flex flex-col"},oe={class:"my-1 text-xl text-red-700"};function le(e,t,n,o,l,r){return(0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("div",X,[(0,i.wy)((0,i._)("input",{class:(0,c.C_)(["w-[50%] p-2 bg-white focus:outline-none focus:shadow-outline rounded-md py-2 px-2 block appearance-none leading-normal",[o.errorMessage?"border border-red-500":"border border-gray-500"]]),"onUpdate:modelValue":t[0]||(t[0]=e=>o.guessNum=e),type:"",placeholder:"輸入要猜的數字"},null,2),[[a.nr,o.guessNum]]),(0,i._)("button",{class:"bg-blue-600 text-white ml-3 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-blue-500",onClick:t[1]||(t[1]=(...e)=>o.action&&o.action(...e))},"送出"),(0,i._)("button",{class:"bg-red-600 text-white ml-3 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-red-500",onClick:t[2]||(t[2]=e=>o.tipStatus=!o.tipStatus)},"提示")]),o.errorMessage?((0,i.wg)(),(0,i.iD)("div",F,(0,c.zw)(o.errorMessage),1)):(0,i.kq)("",!0),(0,i._)("div",q,[_,$,o.tipStatus?((0,i.wg)(),(0,i.iD)("div",ee,"提示")):(0,i.kq)("",!0)]),(0,i._)("div",te,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.data,(e=>((0,i.wg)(),(0,i.iD)("div",ne,[(0,i._)("div",null,(0,c.zw)(e.guessNum),1),(0,i._)("div",null,(0,c.zw)(e.AB),1),o.tipStatus?((0,i.wg)(),(0,i.iD)("div",ae,(0,c.zw)(e.tip),1)):(0,i.kq)("",!0)])))),256))],512),o.endStatus?((0,i.wg)(),(0,i.iD)("div",ie,[(0,i._)("div",oe,"猜中了 共猜了"+(0,c.zw)(o.times)+"次",1),(0,i._)("div",null,[(0,i._)("button",{class:"bg-green-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400",onClick:t[3]||(t[3]=(...e)=>o.madeNum&&o.madeNum(...e))},"再玩一次")])])):(0,i.kq)("",!0)])}var re={name:"guessView",components:{},setup(){const e=(0,r.iH)([]),t=(0,r.iH)(null),n=(0,r.iH)(""),a=(0,r.iH)(!1),o=(0,r.iH)(!1);let l="";const u=(0,r.iH)(null),s=(0,r.iH)(0),c=()=>{a.value=!1,e.value=[];let n="";t.value=null,s.value=0;const i=["0","1","2","3","4","5","6","7","8","9"];while(n.length<4){const e=i[Math.floor(10*Math.random())];n.includes(e)||(n+=e)}l=n,console.log("trueNum",l)};c();const d=e=>{let t="";return e?4!==e.length?t="長度須為4":isNaN(e)?t="只能輸入數字":new Set(e.split("")).size!==e.split("").length&&(t="數字不能重覆"):t="請輸入數字",t},v=()=>{if(n.value=d(t.value),n.value||a.value)return!1;s.value++,m(),(0,i.Y3)((()=>{u.value.scrollTop=u.value.scrollHeight}))},m=()=>{let n=0,i=0,o=[],r=[];for(let e=0;e<t.value.length;e++)t.value.charAt(e)===l.charAt(e)?(n++,o.push(l.charAt(e))):l.includes(t.value.charAt(e))&&(i++,r.push(l.charAt(l.indexOf(t.value.charAt(e)))));const u=(n?"A:"+o.toString():"")+(i?" B:"+r.toString():"");e.value.push({guessNum:t.value,AB:n+"A"+i+"B",tip:u}),4===n&&(a.value=!0)};return{guessNum:t,data:e,errorMessage:n,endStatus:a,mainView:u,tipStatus:o,times:s,madeNum:c,action:v}}};const ue=(0,h.Z)(re,[["render",le]]);var se=ue;const ce={class:"w-[310px] md:w-[400px] h-auto flex flex-col items-center justify-start"},de={class:"flex flex-wrap justify-center items-center"},ve=["onClick"],me={key:0,class:"flex flex-wrap justify-center items-center"},ge={key:1,class:"flex flex-wrap justify-center items-center"};function fe(e,t,n,a,o,l){return(0,i.wg)(),(0,i.iD)("div",ce,[(0,i._)("div",de,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.land[0].length,((e,t)=>((0,i.wg)(),(0,i.iD)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.land,((e,n)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,c.C_)(["w-[30px] h-[30px] md:w-[40px] md:h-[40px] border-2 border-[#b59ec2] flex justify-center items-center",[a.land[n][t].check?"bg-[#fcfccf]":"bg-[#79fcac]"]]),onClick:e=>a.action(n,t)},(0,c.zw)(a.land[n][t].display),11,ve)))),256))])))),256))]),a.endStatus?((0,i.wg)(),(0,i.iD)("div",me,"暴了")):(0,i.kq)("",!0),a.endStatus?((0,i.wg)(),(0,i.iD)("div",ge,[(0,i._)("button",{class:"bg-green-500 text-white py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-400",onClick:t[0]||(t[0]=(...e)=>a.re&&a.re(...e))},"再玩一次")])):(0,i.kq)("",!0)])}var pe={name:"landmineView",components:{},setup(){const e=(0,r.iH)(!1),t=(0,r.iH)([]);let n=[];const a=()=>{e.value=!1,t.value=[],n=[];for(let e=0;e<10;e++){t.value[e]=[];for(let n=0;n<8;n++)t.value[e][n]={isBoom:!1,flag:!1,display:"",check:!1}}i()},i=()=>{let e=11;for(let a=0;a<e;){const e=Math.floor(10*Math.random()),i=Math.floor(8*Math.random());t.value[e][i].isBoom||(t.value[e][i].isBoom=!0,n.push(e+","+i),a++)}};a();const o=(n,a)=>{if(e.value)return!1;if(t.value[n][a].isBoom)return t.value[n][a].display="x",t.value[n][a].check=!0,e.value=!0,!1;let i=0;n-1>=0&&a-1>=0&&t.value[n-1][a-1].isBoom&&i++,n-1>=0&&t.value[n-1][a].isBoom&&i++,n-1>=0&&a+1<8&&t.value[n-1][a+1].isBoom&&i++,a-1>=0&&t.value[n][a-1].isBoom&&i++,a+1<8&&t.value[n][a+1].isBoom&&i++,n+1<10&&a-1>=0&&t.value[n+1][a-1].isBoom&&i++,n+1<10&&t.value[n+1][a].isBoom&&i++,n+1<10&&a+1<8&&t.value[n+1][a+1].isBoom&&i++,t.value[n][a].check=!0,i?t.value[n][a].display=i:(n-1>=0&&a-1>=0&&(t.value[n-1][a-1].check||o(n-1,a-1)),n-1>=0&&(t.value[n-1][a].check||o(n-1,a)),n-1>=0&&a+1<8&&(t.value[n-1][a+1].check||o(n-1,a+1)),a-1>=0&&(t.value[n][a-1].check||o(n,a-1)),a+1<8&&(t.value[n][a+1].check||o(n,a+1)),n+1<10&&a-1>=0&&(t.value[n+1][a-1].check||o(n+1,a-1)),n+1<10&&(t.value[n+1][a].check||o(n+1,a)),n+1<10&&a+1<8&&(t.value[n+1][a+1].check||o(n+1,a+1)))},l=()=>{console.log("re"),a()};return{land:t,endStatus:e,action:o,re:l}}};const he=(0,h.Z)(pe,[["render",fe]]);var we=he;const be={class:"w-[350px] md:w-[500px] h-[80vh] md:h-[90vh] mt-[-10px] flex flex-col items-center justify-start"},ke={class:"flex flex-wrap justify-center items-center"},ye=["onClick","textContent"],xe={key:1,class:"flex justify-end items-end text-4xl mt-10"},Ce={class:"flex justify-center items-center mt-10"},Se={key:0,class:"text-4xl"},je=["textContent"];function Ie(e,t,n,a,o,l){return(0,i.wg)(),(0,i.iD)("div",be,[(0,i._)("div",ke,[a.viewStatus&&!a.endText?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(a.data,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"w-[100px] h-[100px] md:w-[150px] md:h-[150px] m-1 flex items-center justify-center text-5xl bg-green-400",key:t,onClick:t=>a.action(e),textContent:(0,c.zw)(a.displayStatus?e:"")},null,8,ye)))),128)):((0,i.wg)(),(0,i.iD)("div",xe,(0,c.zw)(a.endText),1))]),(0,i._)("div",Ce,[a.viewStatus?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Se,"猜"+(0,c.zw)(a.trueNum),1)),a.data.length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"bg-green-600 text-white ml-3 py-2 px-4 font-medium rounded-xl transition-all duration-300 hover:bg-green-500",textContent:(0,c.zw)(a.hasChange?"再玩一次":"開始"),onClick:t[0]||(t[0]=(...e)=>a.play&&a.play(...e))},null,8,je))])])}var Ne={name:"memoryView",components:{},setup(){const e=(0,r.iH)([]),t=(0,r.iH)(null),n=(0,r.iH)(!0),a=(0,r.iH)(!1),o=(0,r.iH)(!0),l=(0,r.iH)(""),u=(0,r.iH)(!1),s=()=>{e.value=[];while(e.value.length<9){const t=Math.floor(99*Math.random())+1;e.value.includes(t)||e.value.push(t)}t.value=e.value[Math.floor(10*Math.random())]},c=()=>{o.value=!0,u.value&&(a.value=!1,l.value=""),a.value||(s(),d())},d=()=>{n.value=!0,setTimeout((()=>{n.value=!1,setTimeout((()=>{a.value=!0,n.value=!0,o.value=!1}),3e3)}),5e3)},v=n=>{if(!a.value)return!1;n===t.value?l.value="猜對了":l.value="猜錯了",e.value=[]};return(0,i.YP)((()=>l.value),(()=>{u.value=!0})),{data:e,viewStatus:n,trueNum:t,endText:l,hasChange:u,playStatus:a,displayStatus:o,play:c,setRandomNum:s,action:v}}};const Be=(0,h.Z)(Ne,[["render",Ie]]);var Ze=Be,Me={name:"gameView",components:{guess:se,landmine:we,memory:Ze},setup(){const e=(0,g.yj)(),t=((0,g.tv)(),(0,i.Fl)((()=>e.query.gameMode))),n=(0,i.Fl)((()=>{const e={guess:"猜數字",memory:"記憶遊戲",landmine:"踩地雷"};return e[t.value]||"在選單點擊你想玩的遊戲"})),a=()=>{};return a(),{gameName:t,displayName:n}}};const ze=(0,h.Z)(Me,[["render",K]]);var Re=ze;const We=(0,i._)("h1",null,"picture view",-1),Ee=[We];function Ve(e,t,n,a,o,l){return(0,i.wg)(),(0,i.iD)("div",null,Ee)}var Ae={name:"pictureView",components:{},setup(){return{}}};const De=(0,h.Z)(Ae,[["render",Ve]]);var He=De;const Oe=(0,i._)("h1",null,"tool view",-1),Ye=[Oe];function Pe(e,t,n,a,o,l){return(0,i.wg)(),(0,i.iD)("div",null,Ye)}var Qe={name:"toolView",components:{},setup(){return{}}};const Ge=(0,h.Z)(Qe,[["render",Pe]]);var Ue=Ge;const Je=[{path:"/",component:H["default"]},{path:"/home",component:D},{path:"/form",component:U},{path:"/game",component:Re},{path:"/picture",component:He},{path:"/tool",component:Ue},{path:"/about",component:()=>n.e(443).then(n.bind(n,5641))},{path:"/:catchAll(.*)",redirect:"/"}],Te=(0,g.p7)({history:(0,g.r5)(""),routes:Je});var Ke=Te,Le=n(3582),Xe=n(3287);n(1246);(0,a.ri)(x).use(u.Z).use(Ke).use(Xe.Z).use(Le.Z).mount("#app")},3936:function(e,t,n){"use strict";var a=n(9973),i=n(3582);t["Z"]=(0,a.MT)({state:{lang:"tw",loading:!1,isMobile:null,menuSize:0},getters:{offset(e){return e.isMobile?0:e.menuSize}},mutations:{setLang(e,t){e.lang=t,localStorage.setItem("locale",t),i.Z.global.locale=t},setMobile(e,t){e.isMobile=t<=768},setMenuSize(e,t){e.menuSize=t}},actions:{},modules:{}})},6657:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(3099),i=n(8317);const o={class:"overflow-auto w-screen h-[100vh] min-h-[100vh] flex flex-col items-center justify-center"},l=["src"],r=["src","onClick"];function u(e,t,u,s,c,d){const v=(0,a.up)("swiper-slide"),m=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(m,{class:"w-[80vw] md:w-[35vw]",onSwiper:s.onSwiper,loop:!1,autoplay:!1,slidesPerView:1,initialSlide:s.nowSlide,speed:1e3,spaceBetween:5},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.lists,((e,i)=>((0,a.wg)(),(0,a.j4)(v,{key:e},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("img",{class:"w-full rounded-[20px]",src:n(8753)(`${e}`),onClick:t[0]||(t[0]=(...e)=>s.change&&s.change(...e))},null,8,l)])])),_:2},1024)))),128))])),_:1},8,["onSwiper","initialSlide"]),(0,a.Wm)(m,{class:"w-[80vw] md:w-[35vw] mt-5",loop:!1,autoplay:!1,slidesPerView:5,initialSlide:0,speed:1e3,spaceBetween:10},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.lists,((e,t)=>((0,a.wg)(),(0,a.j4)(v,{key:e},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("img",{class:(0,i.C_)(["w-full",[s.nowSlide===t?"opacity-100":"opacity-50"]]),src:n(8753)(`${e}`),onClick:t=>s.action(e)},null,10,r)])])),_:2},1024)))),128))])),_:1})])}var s=n(4641),c=(n(1751),n(4282)),d={name:"mainView",components:{Swiper:c.tq,SwiperSlide:c.o5},props:{},setup(){const e=(0,s.iH)(["./image/img2.jpg","./image/img3.jpg","./image/img5.jpg","./image/img6.jpg","./image/img4.jpg"]),t=(0,s.iH)(0);let n=null;const a=e=>{n=e,n.on("slideChange",(()=>{t.value=n.realIndex}))},i=a=>{const i=e.value.indexOf(a);n.slideTo(i,1e3,!1),t.value=i},o=e=>{const t=window.innerWidth/2;t>e.clientX&&!n.isBeginning?n.slidePrev(1e3,!1):t<=e.clientX&&!n.isEnd&&n.slideNext(1e3,!1)};return{lists:e,nowSlide:t,action:i,onSwiper:a,change:o}}},v=n(5727);const m=(0,v.Z)(d,[["render",u]]);var g=m},8753:function(e,t,n){var a={".":6657,"./":6657,"./image/img1.jpg":6425,"./image/img2.jpg":8601,"./image/img3.jpg":2689,"./image/img4.jpg":595,"./image/img5.jpg":2503,"./image/img6.jpg":3001,"./index":6657,"./index.vue":6657};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=8753},6425:function(e,t,n){"use strict";e.exports=n.p+"img/img1.jpg"},8601:function(e,t,n){"use strict";e.exports=n.p+"img/img2.jpg"},2689:function(e,t,n){"use strict";e.exports=n.p+"img/img3.jpg"},595:function(e,t,n){"use strict";e.exports=n.p+"img/img4.jpg"},2503:function(e,t,n){"use strict";e.exports=n.p+"img/img5.jpg"},3001:function(e,t,n){"use strict";e.exports=n.p+"img/img6.jpg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],o=e[c][2];for(var r=!0,u=0;u<a.length;u++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-web:";n.l=function(a,i,o,l){if(e[a])e[a].push(i);else{var r,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){r=d;break}}r||(u=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=a),e[a]=[i];var v=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var i=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(v.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=v.bind(null,r.onerror),r.onload=v.bind(null,r.onload),u&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=o);var l=n.p+n.u(t),r=new Error,u=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",r.name="ChunkLoadError",r.type=o,r.request=l,i[1](r)}};n.l(l,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,l=a[0],r=a[1],u=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(u)var c=u(n)}for(t&&t(a);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkvue_web"]=self["webpackChunkvue_web"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2514)}));a=n.O(a)})();
//# sourceMappingURL=app.js.map