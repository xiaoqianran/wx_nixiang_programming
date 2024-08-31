require("../../@babel/runtime/helpers/Objectvalues");var e=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),t=require("../../@babel/runtime/helpers/createClass"),r=require("../../@babel/runtime/helpers/classCallCheck"),n=require("../../@babel/runtime/helpers/inherits"),a=require("../../@babel/runtime/helpers/createSuper"),i=require("../../@babel/runtime/helpers/regeneratorRuntime"),o=require("../../@babel/runtime/helpers/asyncToGenerator"),s=require("../../@babel/runtime/helpers/typeof");!function(e,t){if("object"===("undefined"==typeof exports?"undefined":s(exports))&&"object"===("undefined"==typeof module?"undefined":s(module)))module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"===("undefined"==typeof exports?"undefined":s(exports))?exports:e)[n]=r[n]}}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===s(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports={hex:function(e){var t=null;return!/^#/.test(e)||7!==e.length&&9!==e.length?null!==(t=/^(rgb|rgba)\((.+)\)/.exec(e))?"#"+t[2].split(",").map((function(e,t){return e=e.trim(),1===(e=(e=3===t?Math.floor(255*parseFloat(e)):parseInt(e,10)).toString(16)).length&&(e="0"+e),e})).join(""):"#00000000":e},splitLineToCamelCase:function(e){return e.split("-").map((function(e,t){return 0===t?e:e[0].toUpperCase()+e.slice(1)})).join("")},compareVersion:function(e,t){e=e.split("."),t=t.split(".");for(var r=Math.max(e.length,t.length);e.length<r;)e.push("0");for(;t.length<r;)t.push("0");for(var n=0;n<r;n++){var a=parseInt(e[n],10),i=parseInt(t[n],10);if(a>i)return 1;if(a<i)return-1}return 0}}},function(e,t,r){var n=r(2),a=r(3).Widget,s=r(5).Draw,u=r(0).compareVersion;Component({properties:{width:{type:Number,value:400},height:{type:Number,value:300}},data:{use2dCanvas:!1},lifetimes:{attached:function(){var e=this,t=wx.getSystemInfoSync(),r=t.SDKVersion,n=t.pixelRatio,a=u(r,"2.9.2")>=0;this.dpr=n,this.setData({use2dCanvas:a},(function(){a?e.createSelectorQuery().select("#".concat("weui-canvas")).fields({node:!0,size:!0}).exec((function(t){var r=t[0].node,a=r.getContext("2d");r.width=t[0].width*n,r.height=t[0].height*n,a.scale(n,n),e.ctx=a,e.canvas=r})):e.ctx=wx.createCanvasContext("weui-canvas",e)}))}},methods:{renderToCanvas:function(e){var t=this;return o(i().mark((function r(){var o,u,c,l,f,d,h,v,p,m;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.wxml,u=e.style,c=t.ctx,l=t.canvas,!(f=t.data.use2dCanvas)||l){r.next=6;break}return r.abrupt("return",Promise.reject(new Error("renderToCanvas: fail canvas has not been created")));case 6:return c.clearRect(0,0,t.data.width,t.data.height),d=n(o),h=d.root,v=new a(h,u),p=v.init(),t.boundary={top:p.layoutBox.top,left:p.layoutBox.left,width:p.computedStyle.width,height:p.computedStyle.height},m=new s(c,l,f),r.next=14,m.drawNode(p);case 14:if(f){r.next=17;break}return r.next=17,t.canvasDraw(c);case 17:return r.abrupt("return",Promise.resolve(p));case 18:case"end":return r.stop()}}),r)})))()},canvasDraw:function(e,t){return new Promise((function(r){e.draw(t,(function(){r()}))}))},canvasToTempFilePath:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.data.use2dCanvas;return new Promise((function(n,a){var i=e.boundary,o=i.top,s=i.left,u=i.width,c=i.height,l={x:s,y:o,width:u,height:c,destWidth:u*e.dpr,destHeight:c*e.dpr,canvasId:"weui-canvas",fileType:t.fileType||"png",quality:t.quality||1,success:n,fail:a};r&&(delete l.canvasId,l.canvas=e.canvas),wx.canvasToTempFilePath(l,e)}))}}})},function(e,t){e.exports=function(e){return e=(e=e.trim()).replace(/<!--[\s\S]*?-->/g,""),{declaration:t(),root:r()};function t(){if(a(/^<\?xml\s*/)){for(var e={attributes:{}};!i()&&!o("?>");){var t=n();if(!t)return e;e.attributes[t.name]=t.value}return a(/\?>\s*/),e}}function r(){var e=a(/^<([\w-:.]+)\s*/);if(e){for(var t,s={name:e[1],attributes:{},children:[]};!(i()||o(">")||o("?>")||o("/>"));){var u=n();if(!u)return s;s.attributes[u.name]=u.value}if(a(/^\s*\/>\s*/))return s;for(a(/\??>\s*/),s.content=function(){var e=a(/^([^<]*)/);return e?e[1]:""}();t=r();)s.children.push(t);return a(/^<\/[\w-:.]+>\s*/),s}}function n(){var e,t=a(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);if(t)return{name:t[1],value:(e=t[2],e.replace(/^['"]|['"]$/g,""))}}function a(t){var r=e.match(t);if(r)return e=e.slice(r[0].length),r}function i(){return 0==e.length}function o(t){return 0==e.indexOf(t)}}},function(e,i,o){var s=o(4),u=o(0).splitLineToCamelCase,c=function(e){n(o,e);var i=a(o);function o(e){var t;return r(this,o),(t=i.call(this,e.style)).name=e.name,t.attributes=e.attributes,t}return t(o)}(s),l=function(){function e(t,n){r(this,e),this.xom=t,this.style=n,this.inheritProps=["fontSize","lineHeight","textAlign","verticalAlign","color"]}return t(e,[{key:"init",value:function(){return this.container=this.create(this.xom),this.container.layout(),this.inheritStyle(this.container),this.container}},{key:"inheritStyle",value:function(e){var t=this,r=e.parent||null,n=e.children||{},a=e.computedStyle;r&&this.inheritProps.forEach((function(e){a[e]=a[e]||r.computedStyle[e]})),Object.values(n).forEach((function(e){t.inheritStyle(e)}))}},{key:"create",value:function(e){var t=this,r=(e.attributes.class||"").split(" ");r=r.map((function(e){return u(e.trim())}));var n={};r.forEach((function(e){Object.assign(n,t.style[e]||{})}));for(var a={name:e.name,style:n},i={},o=0,s=Object.keys(e.attributes);o<s.length;o++){var l=s[o],f=e.attributes[l],d=u(l);i[d]=""===f||"true"===f||"false"!==f&&f}i.text=e.content,a.attributes=i;var h=new c(a);return e.children.forEach((function(e){var r=t.create(e);h.add(r)})),h}}]),e}();e.exports={Widget:l}},function(e,t){e.exports=require("widget-ui")},function(n,a){var s=function(){function n(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(this,n),this.ctx=e,this.canvas=t||null,this.use2dCanvas=a}var a,s;return t(n,[{key:"roundRect",value:function(e,t,r,n,a){var i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],o=arguments.length>6&&void 0!==arguments[6]&&arguments[6];if(!(a<0)){var s=this.ctx;s.beginPath(),s.arc(e+a,t+a,a,Math.PI,3*Math.PI/2),s.arc(e+r-a,t+a,a,3*Math.PI/2,0),s.arc(e+r-a,t+n-a,a,0,Math.PI/2),s.arc(e+a,t+n-a,a,Math.PI/2,Math.PI),s.lineTo(e,t+a),o&&s.stroke(),i&&s.fill()}}},{key:"drawView",value:function(e,t){var r=this.ctx,n=e.left,a=e.top,i=e.width,o=e.height,s=t.borderRadius,u=void 0===s?0:s,c=t.borderWidth,l=void 0===c?0:c,f=t.borderColor,d=t.color,h=void 0===d?"#000":d,v=t.backgroundColor,p=void 0===v?"transparent":v;r.save(),l>0&&(r.fillStyle=f||h,this.roundRect(n,a,i,o,u)),r.fillStyle=p;var m=i-2*l,b=o-2*l,x=u-l>=0?u-l:0;this.roundRect(n+l,a+l,m,b,x),r.restore()}},{key:"drawImage",value:(s=o(i().mark((function e(t,r,n){var a=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,i){var o=a.ctx,s=a.canvas,u=n.borderRadius,c=void 0===u?0:u,l=r.left,f=r.top,d=r.width,h=r.height;o.save(),a.roundRect(l,f,d,h,c,!1,!1),o.clip();var v=function(t){if(a.use2dCanvas){var r=s.createImage();r.onload=function(){o.drawImage(r,l,f,d,h),o.restore(),e()},r.onerror=function(){i(new Error("createImage fail: ".concat(t)))},r.src=t}else o.drawImage(t,l,f,d,h),o.restore(),e()},p=/^wxfile:\/\//.test(t),m=/^https?:\/\//.test(t);p?v(t):m?wx.downloadFile({url:t,success:function(e){200===e.statusCode?v(e.tempFilePath):i(new Error("downloadFile:fail ".concat(t)))},fail:function(){i(new Error("downloadFile:fail ".concat(t)))}}):i(new Error("image format error: ".concat(t)))}));case 2:case"end":return e.stop()}}),e)}))),function(e,t,r){return s.apply(this,arguments)})},{key:"drawText",value:function(t,r,n){var a=this.ctx,i=r.left,o=r.top,s=r.width,u=r.height,c=n.color,l=void 0===c?"#000":c,f=n.lineHeight,d=void 0===f?"1.4em":f,h=n.fontSize,v=void 0===h?14:h,p=n.textAlign,m=void 0===p?"left":p,b=n.verticalAlign,x=void 0===b?"top":b,w=n.backgroundColor,g=void 0===w?"transparent":w;if("string"==typeof d&&(d=Math.ceil(parseFloat(d.replace("em"))*v)),t&&!(d>u)){switch(a.save(),a.textBaseline="top",a.font="".concat(v,"px sans-serif"),a.textAlign=m,a.fillStyle=g,this.roundRect(i,o,s,u,0),a.fillStyle=l,m){case"left":break;case"center":i+=.5*s;break;case"right":i+=s}var y=a.measureText(t).width,k=Math.ceil(y/s)*d,S=Math.ceil((u-k)/2);switch(S<0&&(S=0),x){case"top":break;case"middle":o+=S;break;case"bottom":o+=2*S}var C=Math.ceil((d-v)/2);if(y<=s)a.fillText(t,i,o+C);else{var P,T=t.split(""),I=o,j="",M=e(T);try{for(M.s();!(P=M.n()).done;){var O=P.value,q=j+O;if(a.measureText(q).width>s){if(a.fillText(j,i,o+C),j=O,(o+=d)+d>I+u)break}else j=q}}catch(e){M.e(e)}finally{M.f()}o+d<=I+u&&a.fillText(j,i,o+C),a.restore()}}}},{key:"drawNode",value:(a=o(i().mark((function e(t){var r,n,a,o,s,u,c,l,f,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.layoutBox,n=t.computedStyle,a=t.name,o=t.attributes,s=o.src,u=o.text,"view"!==a){e.next=6;break}this.drawView(r,n),e.next=12;break;case 6:if("image"!==a){e.next=11;break}return e.next=9,this.drawImage(s,r,n);case 9:e.next=12;break;case 11:"text"===a&&this.drawText(u,r,n);case 12:c=Object.values(t.children),l=0,f=c;case 14:if(!(l<f.length)){e.next=21;break}return d=f[l],e.next=18,this.drawNode(d);case 18:l++,e.next=14;break;case 21:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})}]),n}();n.exports={Draw:s}}])}));