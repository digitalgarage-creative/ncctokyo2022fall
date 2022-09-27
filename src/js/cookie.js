/*! js-cookie v3.0.1 | MIT */
!function(e,o){var t,n;"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e=e||self,t=e.Cookies,(n=e.Cookies=o()).noConflict=function(){return e.Cookies=t,n})}(this,function(){"use strict";function e(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)e[n]=t[n]}return e}return function o(t,n){function r(o,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=o+"="+t.write(r,o)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var o=document.cookie?document.cookie.split("; "):[],n={},r=0;r<o.length;r++){var i=o[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(n[u]=t.read(c,u),e===u)break}catch(e){}}return e?n[e]:n}},remove:function(o,t){r(o,"",e({},t,{expires:-1}))},withAttributes:function(t){return o(this.converter,e({},this.attributes,t))},withConverter:function(t){return o(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})});const myCookie=Cookies.get("cookie"),cookieBar=document.querySelector("#cookie"),cookieAgree=document.querySelector("#cookie .agree");cookieAgree.addEventListener("click",function(){Cookies.set("cookie","true",{expires:365,path:"/"}),cookieBar.style.opacity="0",setTimeout(()=>cookieBar.remove(),1e3)}),myCookie&&(cookieBar.style.display="none");