(function(t){function e(e){for(var o,c,u=e[0],a=e[1],s=e[2],p=0,d=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/standing-echo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"07d8":function(t,e,n){},"0ea1":function(t,e,n){"use strict";var o=n("845d"),r=n.n(o);r.a},"2ec6":function(t,e,n){t.exports=n.p+"img/feather-sprite.8bf209bf.svg"},"549d":function(t,e,n){"use strict";var o=n("74a5"),r=n.n(o);r.a},"74a5":function(t,e,n){},"7dad":function(t,e,n){},"845d":function(t,e,n){},9993:function(t,e,n){"use strict";var o=n("7dad"),r=n.n(o);r.a},a551:function(t,e,n){},bacb:function(t,e,n){"use strict";var o=n("07d8"),r=n.n(o);r.a},cbe0:function(t,e,n){"use strict";var o=n("a551"),r=n.n(o);r.a},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[n("Player")],1)},i=[],c=n("9ab4"),u=n("60a3"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"player"},[n("audio",{on:{loadedmetadata:t.loadedMetadata,timeupdate:t.timeUpdate}}),n("input",{attrs:{type:"file",id:"browse",accept:"audio/*"},on:{change:t.browse}}),n("section",{staticClass:"seekbar"},[n("time",{attrs:{datetime:t.currentTimeFormatString}},[t._v(t._s(t.currentTimeString))]),n("progress",{attrs:{max:t.duration},domProps:{value:t.currentTime},on:{click:t.progressClick}}),n("time",{attrs:{datetime:t.durationFormatString}},[t._v(t._s(t.durationString))])]),n("fieldset",{staticClass:"controls"},[n("player-button",{attrs:{icon:"skip-back",disabled:t.trackIndex<=0,title:"Previous"},on:{click:t.skipBack}}),n("player-button",{attrs:{icon:"play",disabled:-1==t.trackIndex,hidden:!t.isPaused,title:"Play"},on:{click:t.play}}),n("player-button",{attrs:{icon:"pause",disabled:-1==t.trackIndex,hidden:t.isPaused,title:"Pause"},on:{click:t.pause}}),n("player-button",{attrs:{icon:"skip-forward",disabled:-1==t.trackIndex||t.trackIndex>=t.tracks.length-1,title:"Next"},on:{click:t.skipForward}}),n("player-button",{attrs:{icon:"folder",title:"Open file(s)"},on:{click:t.open}})],1),n("volume",{attrs:{loudness:t.volume,muted:t.isMuted},on:{"volume-change":t.volumeChange,"max-vol":t.maxVolume,"mute-vol":t.muteVolume}})],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"player-button",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[n("feather-icon",{staticClass:"skip-back",attrs:{icon:t.icon}})],1)},p=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"feather-icon"},[o("use",{attrs:{"xlink:href":n("2ec6")+"#"+t.icon}})])},f=[],b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),Object(c["b"])([Object(u["b"])()],e.prototype,"icon",void 0),e=Object(c["b"])([u["a"]],e),e}(u["c"]),h=b,m=h,v=(n("bacb"),n("2877")),y=Object(v["a"])(m,d,f,!1,null,"97655ed0",null),g=y.exports,k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),Object(c["b"])([Object(u["b"])()],e.prototype,"icon",void 0),e=Object(c["b"])([Object(u["a"])({components:{FeatherIcon:g}})],e),e}(u["c"]),O=k,j=O,w=(n("549d"),Object(v["a"])(j,l,p,!1,null,"2b4d83b3",null)),P=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"volume"},[n("player-button",{attrs:{icon:t.muteIcon,title:"Mute"},on:{click:function(e){return t.$emit("mute-vol")}}}),n("progress",{attrs:{max:"1"},domProps:{value:t.loudness},on:{click:t.volumeChange}}),n("player-button",{attrs:{icon:"volume-2",title:"Max"},on:{click:function(e){return t.$emit("max-vol")}}})],1)},S=[],_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),Object.defineProperty(e.prototype,"muteIcon",{get:function(){return this.muted?"volume-x":"volume-1"},enumerable:!1,configurable:!0}),e.prototype.mounted=function(){this.elProgress=this.$el.querySelector("progress")},e.prototype.volumeChange=function(t){var e=t.target,n=(t.pageX-e.offsetLeft)/e.offsetWidth;this.$emit("volume-change",n)},Object(c["b"])([Object(u["b"])()],e.prototype,"loudness",void 0),Object(c["b"])([Object(u["b"])()],e.prototype,"muted",void 0),e=Object(c["b"])([Object(u["a"])({components:{PlayerButton:P}})],e),e}(u["c"]),A=_,T=A,C=(n("cbe0"),Object(v["a"])(T,x,S,!1,null,"4ea38c6a",null)),M=C.exports;function $(t){var e=new Date(1e3*t).toISOString();return e.substr(11,8).split(":")}var I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.currentTime=0,e.duration=0,e.isPaused=!1,e.isMuted=!1,e.trackIndex=-1,e.tracks=[],e.volume=0,e}return Object(c["c"])(e,t),Object.defineProperty(e.prototype,"currentTimeString",{get:function(){var t=$(this.currentTime),e=t[0],n=t[1],o=t[2];return"00"==e?n+":"+o:e+":"+n+":"+o},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentTimeFormatString",{get:function(){var t=$(this.currentTime),e=t[0],n=t[1],o=t[2];return"PT"+e+"H"+n+"M"+o+"S"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"durationString",{get:function(){var t=$(this.duration),e=t[0],n=t[1],o=t[2];return"00"==e?n+":"+o:e+":"+n+":"+o},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"durationFormatString",{get:function(){var t=$(this.duration),e=t[0],n=t[1],o=t[2];return"PT"+e+"H"+n+"M"+o+"S"},enumerable:!1,configurable:!0}),e.prototype.browse=function(t){var e=t.target,n=e.files||[];n.length&&(this.pause(),this.tracks.forEach((function(t){return URL.revokeObjectURL(t)})),Object.assign(this,{tracks:Array.from(e.files||[],URL.createObjectURL),currentTime:0,duration:0,isMuted:!1,trackIndex:0,volume:0}),this.elAudio.src=this.tracks[0],this.play())},e.prototype.loadedMetadata=function(){this.duration=this.elAudio.duration,this.volume=this.elAudio.volume},e.prototype.maxVolume=function(){this.volume=this.elAudio.volume=1},e.prototype.muteVolume=function(){this.isMuted=this.elAudio.muted=!this.elAudio.muted},e.prototype.mounted=function(){this.elAudio=this.$el.querySelector("audio"),this.elBrowse=this.$el.querySelector("#browse"),this.isPaused=this.elAudio.paused},e.prototype.pause=function(){this.isPaused=!0,this.elAudio.pause()},e.prototype.play=function(){return Object(c["a"])(this,void 0,void 0,(function(){return Object(c["d"])(this,(function(t){switch(t.label){case 0:return this.tracks.length?[3,1]:[2];case 1:return this.isPaused=!1,[4,this.elAudio.play()];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))},e.prototype.progressClick=function(t){var e=t.target,n=(t.pageX-e.offsetLeft)/e.offsetWidth,o=n*this.elAudio.duration;this.elAudio.currentTime=o},e.prototype.skipBack=function(){console.log("skipBack")},e.prototype.skipForward=function(){console.log("skipForward")},e.prototype.timeUpdate=function(){this.currentTime=this.elAudio.currentTime},e.prototype.volumeChange=function(t){this.volume=this.elAudio.volume=t},e.prototype.open=function(){this.elBrowse.click()},e=Object(c["b"])([Object(u["a"])({components:{PlayerButton:P,Volume:M}})],e),e}(u["c"]),F=I,B=F,E=(n("0ea1"),Object(v["a"])(B,a,s,!1,null,"0c0b1029",null)),L=E.exports,U=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),e.prototype.created=function(){document.title="Standing Echo"},e=Object(c["b"])([Object(u["a"])({components:{Player:L}})],e),e}(u["c"]),V=U,q=V,N=(n("9993"),Object(v["a"])(q,r,i,!1,null,null,null)),R=N.exports,H=n("9483");Object(H["a"])("/standing-echo/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),new o["a"]({render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.790c71a1.js.map