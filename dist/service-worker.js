if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const t=e=>r(e,n),f={module:{uri:n},exports:c,require:t};s[n]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(o(...e),c)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.css",revision:"e3e5f0c73c5fa5893d1bf166ed74220b"},{url:"index.html",revision:"e9cdaf385699a2e65d8fd8b5109bdb39"},{url:"js/about.js",revision:"57727b0db96c11a69e3c452f203a820e"},{url:"js/app.js",revision:"0727e4e8c38cfe5e26020d7f1796a1f5"},{url:"js/chunk-vendors.js",revision:"2ee3bc3983a22fd025c275ba9d8b15fb"},{url:"manifest.json",revision:"9ced2ae6badb2a31e56186198a071805"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
