(function(t){function e(e){for(var n,o,a=e[0],c=e[1],l=e[2],d=0,g=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&g.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pick-a-gift/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"02e0":function(t,e,i){t.exports=i.p+"img/lottering.41cc06f0.gif"},2747:function(t,e,i){t.exports=i.p+"img/hongbao.b2eb74b6.png"},3625:function(t,e,i){t.exports=i.p+"img/bg.6d06b6ed.jpg"},"3a68":function(t,e,i){},"3e77":function(t,e,i){"use strict";i("d706")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("b0c0");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Home")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("header",{staticClass:"header"},[n("img",{staticClass:"icon",attrs:{src:i("d437")}}),n("span",{staticClass:"money"},[t._v(t._s(t.myPrize))])]),n("div",{staticClass:"count"},[t._v("¥"+t._s(t.defaultList[0])+"~"+t._s(t.defaultList[t.defaultList.length-1])+"，当前剩余抽奖次数: "+t._s(t.num))]),n("ul",{staticClass:"list"},t._l(t.prizeList,(function(e){return n("li",{key:e,staticClass:"list-item",on:{click:function(i){return t.onClickItem(e)}}},[n("img",{staticClass:"list-item-bg",attrs:{src:i("2747")}}),t.isOver||t.allMyPrize.includes(e)?n("div",{staticClass:"money",class:{has:t.allMyPrize.includes(e)}},[n("span",{staticClass:"money-value"},[t._v("¥"+t._s(e))])]):t._e()])})),0),t.isLottering?n("div",{staticClass:"lottering"},[n("img",{staticClass:"lottering-img",attrs:{src:i("02e0")}})]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.prizeVisible,expression:"prizeVisible"}],staticClass:"dialog-mask"},[n("transition",{attrs:{name:"show"}},[t.prizeVisible?n("DialogPrize",{attrs:{prize:t.myPrize},on:{close:function(e){t.prizeVisible=!1}}}):t._e()],1)],1)])},a=[],c=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog"},[i("div",{staticClass:"dialog-body"},[i("div",{staticClass:"bg"}),i("span",{staticClass:"val"},[t._v("¥"+t._s(t.prize))])]),i("div",{staticClass:"dialog-footer",on:{click:t.onClickOk}},[t._v("确 定")])])}),l=[],u=(i("a9e3"),{name:"DialogPrize",props:{prize:Number},methods:{onClickOk:function(){this.$emit("close")}}}),d=u,g=(i("70e3"),i("2877")),p=Object(g["a"])(d,c,l,!1,null,"8a7f39f2",null),m=p.exports;i("8a79"),i("fb6a"),i("1276"),i("ac1f"),i("159b");function f(t){if(!t)return"";var e=window.location.href;if(-1===e.indexOf(t))return"";var i=e.split("?")[1],n="";return i.split("&").forEach((function(e){e.split("=")[0]===t&&(n=e.split("=")[1])})),decodeURIComponent(n)}var h,v={name:"Home",components:{DialogPrize:m},data:function(){return{num:3,userId:"",prizeList:[],allMyPrize:[],defaultList:[666,800,999,1080,1111,1234,1314,1366,1500],isOver:!1,isLottering:!1,prizeVisible:!1}},computed:{myPrize:function(){return this.allMyPrize.length>0?this.allMyPrize[this.allMyPrize.length-1]:0}},watch:{isOver:function(t){t&&this.$toast("🎉 恭喜获得 ¥".concat(this.myPrize," 红包！"))}},created:function(){this.init()},methods:{init:function(){var t=localStorage.getItem("num"),e=localStorage.getItem("userId");if(this.userId=f("id"),e&&e===this.userId&&t)return this.prizeList=JSON.parse(localStorage.getItem("prizeList")),this.allMyPrize=JSON.parse(localStorage.getItem("allMyPrize")),this.num=+t,void(this.num<=0&&(this.isOver=!0));var i=this.defaultList.concat();this.prizeList=i.sort((function(){return Math.random()-.5}))},onClickItem:function(t){var e=this;if(this.num<=0)this.$toast("您的次数已用完了！");else{var i=confirm("确认领取该红包吗？");i&&(this.isLottering=!0,setTimeout((function(){e.allMyPrize.push(t),e.num--,e.isOver=e.num<=0,e.isLottering=!1,e.prizeVisible=!0,localStorage.setItem("prizeList",JSON.stringify(e.prizeList)),localStorage.setItem("allMyPrize",JSON.stringify(e.allMyPrize)),localStorage.setItem("num",e.num),localStorage.setItem("userId",e.userId)}),2130))}}}},A=v,b=(i("846e"),Object(g["a"])(A,o,a,!1,null,"5e0f95b0",null)),y=b.exports,C={name:"App",components:{Home:y},created:function(){this.init(),window.addEventListener("resize",this.init,!1)},methods:{init:function(){var t=750,e=770,i=document.documentElement.clientWidth,n=i/t;i>=e&&(n=1),document.documentElement.style.fontSize=100*n+"px",document.body.style.fontSize="0.22rem"}}},w=C,O=Object(g["a"])(w,s,r,!1,null,null,null),z=O.exports,E=(i("d3b7"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.animation,appear:""}},[t.visible?i("div",{staticClass:"toast"},[t.hiddenIcon?t._e():["success"===t.type?i("svg",{staticClass:"toast-icon",attrs:{t:"1629785287303",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3491"}},[i("path",{attrs:{d:"M883.2 247.466667c-17.066667-17.066667-44.8-17.066667-59.733333 0L409.6 665.6l-209.066667-204.8c-17.066667-17.066667-44.8-17.066667-59.733333 0-17.066667 17.066667-17.066667 44.8 0 59.733333l238.933333 234.666667c8.533333 8.533333 19.2 12.8 29.866667 12.8 10.666667 0 21.333333-4.266667 29.866667-12.8l443.733333-448c17.066667-17.066667 17.066667-42.666667 0-59.733333z","p-id":"3492",fill:"#1c9b31"}})]):t._e(),"error"===t.type?i("svg",{staticClass:"toast-icon",attrs:{t:"1629785783299",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3878"}},[i("path",{attrs:{d:"M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z","p-id":"3879",fill:"#c22219"}})]):t._e()],i("span",{staticClass:"toast-message"},[t._v(t._s(t.message))])],2):t._e()])}),B=[],M={name:"AToast",data:function(){return{message:"",visible:!0,hiddenIcon:!1,type:"",animation:"bounce"}}},S=M,j=(i("3e77"),Object(g["a"])(S,E,B,!1,null,"9ff5f0e8",null)),L=j.exports;function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new h,i=t.message,n=t.hiddenIcon,s=t.type,r=t.animation;e.message=i,n&&(e.hiddenIcon=!0),s&&(e.type=s),r&&(e.animation=r);var o=e.$mount().$el;document.body.appendChild(o),setTimeout((function(){e.visible=!1}),2e3)}function R(t){if(x(t))return P(t);var e="",i=arguments[1];return"string"===typeof t&&(e=t),i&&x(i)?(i.message=e,P(i)):P({message:e})}function x(t){return!!t&&"[object Object]"===Object.prototype.toString.call(t)}R.success=function(t){return P({message:t,type:"success"})},R.error=function(t){return P({message:t,type:"error"})};var I={install:function(t){h=t.extend(L),t.prototype.$toast=R}},k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{style:{width:t.imgW+"rem",height:t.imgH+"rem",background:"url("+t.imgURL+") no-repeat","background-size":"100% 100%",display:"block","text-decoration":"none"},attrs:{href:t.href?t.href:"javascript:;"},on:{click:t.handleClick}})},N=[],D={name:"ABtn",props:{src:String,w:[Number,String],h:[Number,String],href:String},data:function(){return{imgURL:"",imgW:this.w,imgH:this.h}},created:function(){var t=this;this.imgURL=i("7584")("./".concat(this.src.split("/").pop()));var e=document.createElement("img");e.src=this.imgURL,e.onload=function(){t.w||(t.imgW=e.width/100),t.h||(t.imgH=e.height/100),e=null}},methods:{handleClick:function(t){this.$emit("click",t)}}},U=D,Y=Object(g["a"])(U,k,N,!1,null,null,null),J=Y.exports;i("b20f");n["a"].use(I),n["a"].component(J.name,J),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},"591c":function(t,e,i){t.exports=i.p+"img/gongxi.7366d8bb.png"},"5db0":function(t,e,i){},"70e3":function(t,e,i){"use strict";i("5db0")},7584:function(t,e,i){var n={"./bg.jpg":"3625","./gongxi.png":"591c","./hongbao-icon.png":"fdd1","./hongbao.png":"2747","./lottering.gif":"02e0","./money-icon.png":"d437"};function s(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="7584"},"846e":function(t,e,i){"use strict";i("3a68")},b20f:function(t,e,i){},d437:function(t,e){t.exports="data:image/png;base64,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"},d706:function(t,e,i){},fdd1:function(t,e){t.exports="data:image/png;base64,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"}});