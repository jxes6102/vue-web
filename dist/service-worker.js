if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const n=e=>s(e,a),f={module:{uri:a},exports:o,require:n};i[a]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(c(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.css",revision:"7c66157fdd0384f254b94ad2b99f1ed1"},{url:"css/chunk-vendors.css",revision:"a840aeaa3532ad3822b94af1ba88bd3a"},{url:"img/img1.jpg",revision:"6c02af66aaf9f67e6721b8a50ed6f8bd"},{url:"img/img2.jpg",revision:"d794ac0b05eaf55bb7208ccb35ad813d"},{url:"img/img3.jpg",revision:"e2f2f502fe0fe9c5331788bfee55d98c"},{url:"img/img4.jpg",revision:"5279d990bfcb087d454beace692bec79"},{url:"img/img5.jpg",revision:"801cbae8c14bd2ed8c8a92866fd5b230"},{url:"img/img6.jpg",revision:"c13d4e9fc9ee47356b942a914de876a3"},{url:"img/loading4.svg",revision:"481eefbbfca8530593afb5683efe88c6"},{url:"img/originDog.png",revision:"ad6e5ba2c5bc227b199e1e048f21969b"},{url:"index.html",revision:"4ba017f9c808f9e0760db40835f010fc"},{url:"js/about.js",revision:"8c3af619e51905c411473b774ba8a9d7"},{url:"js/app.js",revision:"ba84d2b175a8ecc4a2aa5bc2ab187b87"},{url:"js/chunk-vendors.js",revision:"06f0a3a93c3575c3d033139c27facb34"},{url:"manifest.json",revision:"9ced2ae6badb2a31e56186198a071805"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
