if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let o={};const n=e=>i(e,f),d={module:{uri:f},exports:o,require:n};s[f]=Promise.all(r.map((e=>d[e]||n(e)))).then((e=>(c(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.css",revision:"43edc31fe58219781293d20fed6a70aa"},{url:"css/chunk-vendors.css",revision:"d818fcd7e424672b6f8e8659484a13e8"},{url:"img/img1.jpg",revision:"6c02af66aaf9f67e6721b8a50ed6f8bd"},{url:"img/img2.jpg",revision:"d794ac0b05eaf55bb7208ccb35ad813d"},{url:"img/img3.jpg",revision:"e2f2f502fe0fe9c5331788bfee55d98c"},{url:"index.html",revision:"4ba017f9c808f9e0760db40835f010fc"},{url:"js/about.js",revision:"8c3af619e51905c411473b774ba8a9d7"},{url:"js/app.js",revision:"a2d16e130a2cf6950fd21610c7575696"},{url:"js/chunk-vendors.js",revision:"be380f547f687c868dc834f4d8f502de"},{url:"manifest.json",revision:"9ced2ae6badb2a31e56186198a071805"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
