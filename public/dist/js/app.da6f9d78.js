(function(e){function t(t){for(var n,r,o=t[0],f=t[1],d=t[2],u=0,i=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&i.push(a[r][0]),a[r]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);l&&l(t);while(i.length)i.shift()();return c.push.apply(c,d||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],n=!0,r=1;r<s.length;r++){var o=s[r];0!==a[o]&&(n=!1)}n&&(c.splice(t--,1),e=f(f.s=s[0]))}return e}var n={},r={app:0},a={app:0},c=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-5baed6df":"b720836f","chunk-04af20c8":"321a17f4","chunk-0c269795":"1bab64e3","chunk-ca2ffe8c":"05ee8ac5"}[e]+".js"}function f(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,f),s.l=!0,s.exports}f.e=function(e){var t=[],s={"chunk-04af20c8":1,"chunk-0c269795":1,"chunk-ca2ffe8c":1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var n="css/"+({}[e]||e)+"."+{"chunk-5baed6df":"31d6cfe0","chunk-04af20c8":"936f3e64","chunk-0c269795":"6d28d8e9","chunk-ca2ffe8c":"33852434"}[e]+".css",a=f.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var d=c[o],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===a))return t()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){d=i[o],u=d.getAttribute("data-href");if(u===n||u===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],l.parentNode.removeChild(l),s(c)},l.href=a;var j=document.getElementsByTagName("head")[0];j.appendChild(l)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,s){n=a[e]=[t,s]}));t.push(n[2]=c);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,f.nc&&u.setAttribute("nonce",f.nc),u.src=o(e);var i=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(l);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,s[1](i)}a[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},f.m=e,f.c=n,f.d=function(e,t,s){f.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,t){if(1&t&&(e=f(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(f.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)f.d(s,n,function(t){return e[t]}.bind(null,n));return s},f.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var l=u;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3f4f":function(e,t,s){"use strict";s("89b9")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("f23d"),r=(s("3aed"),s("a026")),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],o={name:"App",components:{},data(){return{}},watch:{},methods:{}},f=o,d=(s("3f4f"),s("2877")),u=Object(d["a"])(f,a,c,!1,null,null,null),i=u.exports,l=s("8c4f");const j={name:"RouteView",render:e=>e("router-view")},b=[{path:"/",component:()=>Promise.all([s.e("chunk-5baed6df"),s.e("chunk-04af20c8")]).then(s.bind(null,"73b0")),children:[{path:"/wallpaper",name:"Wallpaper",component:j,redirect:{name:"HomeIndex"},children:[{path:"/home",name:"HomeIndex",component:()=>s.e("chunk-ca2ffe8c").then(s.bind(null,"d504"))},{path:"/wallpaper/index",name:"WallPaperIndex",component:()=>Promise.all([s.e("chunk-5baed6df"),s.e("chunk-0c269795")]).then(s.bind(null,"5496"))}]}]}],p=l["a"].prototype.push;l["a"].prototype.push=function(e,t,s){return t||s?p.call(this,e,t,s):p.call(this,e).catch(e=>e)},r["default"].use(l["a"]);var h=new l["a"]({mode:"hash",routes:b});const m=window.require&&window.require("electron")||window.electron||{},v=m.ipcRenderer||void 0;var g=s("b775"),k=s("2b27"),y=s.n(k);r["default"].use(n["a"]),r["default"].use(g["a"]),r["default"].prototype.$ipc=v,r["default"].use(y.a),r["default"].config.productionTip=!1,new r["default"]({router:h,render:e=>e(i)}).$mount("#app")},"89b9":function(e,t,s){},b775:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s("bc3a"),r=s.n(n),a=s("cff8"),c=s.n(a),o=s("56cd");const f={vm:{},install(e,t){this.installed||(this.installed=!0,t?(e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})):console.error("You have to install axios"))}},d=r.a.create({baseURL:"",timeout:6e4}),u=e=>{if(e.response){const t=e.response.data;403===e.response.status&&o["a"].error({message:"Forbidden",description:t.message}),401!==e.response.status||t.result&&t.result.isLogin||o["a"].error({message:"Unauthorized",description:"Authorization verification failed"})}return Promise.reject(e)};d.interceptors.request.use(e=>{const t=c.a.get("token");return t&&(e.headers["Access-Token"]=t),e},u),d.interceptors.response.use(e=>e.data,u);const i={vm:{},install(e){e.use(f,d)}};t["b"]=d}});
//# sourceMappingURL=app.da6f9d78.js.map