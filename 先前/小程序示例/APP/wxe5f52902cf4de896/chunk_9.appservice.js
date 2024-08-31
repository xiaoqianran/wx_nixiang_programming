__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'miniprogram_npm/miniprogram-recycle-view/recycle-view':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"scrollWithAnimation":new Array(1),"width":new Array(1),"innerScrollIntoView":new Array(1),"hasAfterSlotHeight":new Array(2),"scrollY":new Array(1),"lowerThreshold":new Array(1),"beforeSlotHeight":new Array(2),"innerBeforeHeight":new Array(1),"totalHeight":new Array(2),"innerScrollTop":new Array(1),"height":new Array(1),"enableBackToTop":new Array(1),"throttle":new Array(1),"useInPage":new Array(2),"placeholderImageStr":new Array(1),"upperThreshold":new Array(1),"hasBeforeSlotHeight":new Array(2),"afterSlotHeight":new Array(2)},K=U===true,d=(C,T,E,B,F,S)=>{S("itemsize")},e=(C,T,E,B,F,S)=>{S("before")},g=(C,T,E,B,F,S)=>{S("")},f=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.innerBeforeHeight||undefined)R.y(N,"position: absolute;left:0;width:100%;top:"+Y(D.innerBeforeHeight)+"px;");A["innerBeforeHeight"][0]=(D,E,T)=>{R.y(N,"position: absolute;left:0;width:100%;top:"+Y(D.innerBeforeHeight)+"px;")}},g)},h=(C,T,E,B,F,S)=>{S("after")},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)R.y(N,"position: absolute;z-index:1;width:100%;left: 0;top: 0;opacity: 0;visibility: hidden;")},d);E("view",{},(N,C)=>{var $A=D.hasBeforeSlotHeight;if(C||K||!!(U.hasBeforeSlotHeight||($A?!!U.beforeSlotHeight||undefined:undefined))||undefined)R.y(N,"height:"+Y($A?D.beforeSlotHeight+"px":"auto"));A["hasBeforeSlotHeight"][1]=A["beforeSlotHeight"][1]=(D,E,T)=>{var $B=D.hasBeforeSlotHeight;R.y(N,"height:"+Y($B?D.beforeSlotHeight+"px":"auto"))};if(C)L(N,"slot-before")},e);E("view",{},(N,C)=>{if(C||K||!!(U.placeholderImageStr||U.totalHeight)||undefined)R.y(N,"position:relative;width:100%;z-index:10;background: url(\""+Y(D.placeholderImageStr)+"\") repeat;height:"+Y(D.totalHeight)+"px;");A["placeholderImageStr"][0]=A["totalHeight"][1]=(D,E,T)=>{R.y(N,"position:relative;width:100%;z-index:10;background: url(\""+Y(D.placeholderImageStr)+"\") repeat;height:"+Y(D.totalHeight)+"px;")}},f);E("view",{},(N,C)=>{var $A=D.hasAfterSlotHeight;if(C||K||!!(U.hasAfterSlotHeight||($A?!!U.afterSlotHeight||undefined:undefined))||undefined)R.y(N,"height:"+Y($A?D.afterSlotHeight+"px":"auto"));A["hasAfterSlotHeight"][1]=A["afterSlotHeight"][1]=(D,E,T)=>{var $B=D.hasAfterSlotHeight;R.y(N,"height:"+Y($B?D.afterSlotHeight+"px":"auto"))};if(C)L(N,"slot-after")},h)},b=(C,T,E)=>{E("scroll-view",{},(N,C)=>{if(C)O(N,"bindscroll","_scrollViewDidScroll");if(C)L(N,"content");if(C)R.y(N,"height:100%;position: relative;");var $A=D.useInPage;if(C||K||!!U.useInPage||($A?undefined:U.scrollY))O(N,"scroll-y",$A?false:D.scrollY);A["useInPage"][1]=A["scrollY"][0]=(D,E,T)=>{var $B=D.useInPage;O(N,"scroll-y",$B?false:D.scrollY);E(N)};if(C||K||undefined)O(N,"scroll-x",false);if(C||K||U.upperThreshold)O(N,"upper-threshold",D.upperThreshold);A["upperThreshold"][0]=(D,E,T)=>{O(N,"upper-threshold",D.upperThreshold);E(N)};if(C||K||U.lowerThreshold)O(N,"lower-threshold",D.lowerThreshold);A["lowerThreshold"][0]=(D,E,T)=>{O(N,"lower-threshold",D.lowerThreshold);E(N)};if(C||K||U.innerScrollTop)O(N,"scroll-top",D.innerScrollTop);A["innerScrollTop"][0]=(D,E,T)=>{O(N,"scroll-top",D.innerScrollTop);E(N)};if(C||K||U.innerScrollIntoView)O(N,"scroll-into-view",D.innerScrollIntoView);A["innerScrollIntoView"][0]=(D,E,T)=>{O(N,"scroll-into-view",D.innerScrollIntoView);E(N)};if(C||K||U.scrollWithAnimation)O(N,"scroll-with-animation",D.scrollWithAnimation);A["scrollWithAnimation"][0]=(D,E,T)=>{O(N,"scroll-with-animation",D.scrollWithAnimation);E(N)};if(C)O(N,"bindscrolltoupper","_scrollToUpper");if(C)O(N,"bindscrolltolower","_scrollToLower");if(C||K||undefined)O(N,"scroll-anchoring",true);if(C||K||U.enableBackToTop)O(N,"enable-back-to-top",D.enableBackToTop);A["enableBackToTop"][0]=(D,E,T)=>{O(N,"enable-back-to-top",D.enableBackToTop);E(N)};if(C||K||U.throttle)O(N,"throttle",D.throttle);A["throttle"][0]=(D,E,T)=>{O(N,"throttle",D.throttle);E(N)}},c)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)O(N,"bindtouchstart","_beginToScroll");var $A=D.useInPage;var $B=D.hasBeforeSlotHeight;var $C=D.hasAfterSlotHeight;if(C||K||!!(U.useInPage||($A?!!(U.totalHeight||U.hasBeforeSlotHeight||($B?U.beforeSlotHeight:undefined)||U.hasAfterSlotHeight||($C?U.afterSlotHeight:undefined))||undefined:U.height)||U.width)||undefined)R.y(N,"height:"+Y($A?D.totalHeight+($B?D.beforeSlotHeight:0)+($C?D.afterSlotHeight:0):D.height)+"px;width:"+Y(D.width)+"px;transform:translateZ(0);-webkit-transform:translateZ(0);");A["useInPage"][0]=A["totalHeight"][0]=A["hasBeforeSlotHeight"][0]=A["beforeSlotHeight"][0]=A["hasAfterSlotHeight"][0]=A["afterSlotHeight"][0]=A["height"][0]=A["width"][0]=(D,E,T)=>{var $D=D.useInPage;var $E=D.hasBeforeSlotHeight;var $F=D.hasAfterSlotHeight;R.y(N,"height:"+Y($D?D.totalHeight+($E?D.beforeSlotHeight:0)+($F?D.afterSlotHeight:0):D.height)+"px;width:"+Y(D.width)+"px;transform:translateZ(0);-webkit-transform:translateZ(0);")};if(C)R.i(N,"content");if(C)L(N,"wrap")},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "miniprogram_npm/miniprogram-recycle-view/recycle-view";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/miniprogram-recycle-view/recycle-view.js";define("miniprogram_npm/miniprogram-recycle-view/recycle-view.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/typeof");module.exports=function(e){var i={};function o(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=i,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,i){if(1&i&&(e=o(e)),8&i)return e;if(4&i&&"object"===t(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=6)}({0:function(t,e,i){var o=!1,r=void 0,n=void 0;!function(){var t=wx.getSystemInfoSync();o="ios"===t.platform;var e=t.screenWidth||375,i=t.pixelRatio||2;e===r&&i===n||(r=e,n=i)}();var l=/([+-]?\d+(?:\.\d+)?)rpx/gi;t.exports={transformRpx:function(t,e){if("string"!=typeof t)return t;var i=l;return t.replace(i,(function(t,i){return(0===(l=Number(i))?0:(l=l/750*r,0===(l=Math.floor(l+1e-4))?1!==n&&o?.5:1:l))+(e?"px":"");var l}))}}},6:function(t,e,i){var o=wx.getSystemInfoSync(),r=i(0).transformRpx;Component({options:{multipleSlots:!0},relations:{"../recycle-item/recycle-item":{type:"child",linked:function(t){if(!this._hasCheckSize){this._hasCheckSize=!0;var e=this.boundingClientRect(this._pos.beginIndex);if(!e)return;setTimeout((function(){try{t.createSelectorQuery().select(".wx-recycle-item").boundingClientRect((function(t){!t||t.width===e.width&&t.height===e.height||console.warn("[recycle-view] the size in <recycle-item> is not the same with param itemSize, expect {width: "+t.width+", height: "+t.height+"} but got {width: "+e.width+", height: "+e.height+"}")})).exec()}catch(t){}}),10)}}}},properties:{debug:{type:Boolean,value:!1},scrollY:{type:Boolean,value:!0},batch:{type:Boolean,value:!1,public:!0,observer:"_recycleInnerBatchDataChanged"},batchKey:{type:String,value:"batchSetRecycleData",public:!0},scrollTop:{type:Number,value:0,public:!0,observer:"_scrollTopChanged",observeAssignments:!0},height:{type:Number,value:o.windowHeight,public:!0,observer:"_heightChanged"},width:{type:Number,value:o.windowWidth,public:!0,observer:"_widthChanged"},upperThreshold:{type:Number,value:50,public:!0},lowerThreshold:{type:Number,value:50,public:!0},scrollToIndex:{type:Number,public:!0,value:0,observer:"_scrollToIndexChanged",observeAssignments:!0},scrollWithAnimation:{type:Boolean,public:!0,value:!1},enableBackToTop:{type:Boolean,public:!0,value:!1},throttle:{type:Boolean,public:!0,value:!0},placeholderImage:{type:String,public:!0,value:""},screen:{type:Number,public:!0,value:4}},data:{innerBeforeHeight:0,innerAfterHeight:0,innerScrollTop:0,innerScrollIntoView:"",placeholderImageStr:"",totalHeight:0,useInPage:!1},attached:function(){this.data.placeholderImage&&this.setData({placeholderImageStr:r(this.data.placeholderImage,!0)}),this.setItemSize({array:[],map:{},totalHeight:0})},ready:function(){var t=this;this._initPosition((function(){t._isReady=!0,t._updateTimerId||t._scrollViewDidScroll({detail:{scrollLeft:t._pos.left,scrollTop:t._pos.top,ignoreScroll:!0}},!0)}))},detached:function(){this.page=null,this.context&&(this.context.destroy(),this.context=null)},methods:{_log:function(){var t;if(this.data.debug){for(var e=new Date,i=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds(),o=arguments.length,r=Array(o),n=0;n<o;n++)r[n]=arguments[n];Array.prototype.splice.call(r,0,0,i),(t=console).log.apply(t,r)}},_scrollToUpper:function(t){this.triggerEvent("scrolltoupper",t.detail)},_scrollToLower:function(t){this.triggerEvent("scrolltolower",t.detail)},_beginToScroll:function(){this._lastScrollTop||(this._lastScrollTop=this._pos&&(this._pos.top||0))},_clearList:function(t){this.currentScrollTop=0,this._lastScrollTop=0;var e=this._pos;e.beginIndex=this._pos.endIndex=-1,e.afterHeight=e.minTop=e.maxTop=0,this.page._recycleViewportChange({detail:{data:e,id:this.id}},t)},_isValid:function(){return this.page&&this.context&&this.context.isDataReady},_scrollViewDidScroll:function(t,e){if(this._isValid())if(t.detail.ignoreScroll||this.triggerEvent("scroll",t.detail),this.currentScrollTop=t.detail.scrollTop,this._pos.height&&this.sizeArray.length)if(this._isScrollingWithAnimation)this._isScrollingWithAnimation=!1;else{var i=this._pos,o=this,r=t.detail.scrollLeft,n=t.detail.scrollTop,l=Math.abs(n-this._lastScrollTop);if(!e&&Math.abs(n-i.top)<1.5*i.height)this._log("【not exceed height");else{this._lastScrollTop=n;var s=this.data.screen;this._log("SHOW_SCREENS",s,n),this._calcViewportIndexes(r,n,(function(s,h,a,c,d){o._log("scrollDistance",l,"indexes",s,h),e||i.beginIndex!==s||i.endIndex!==h||i.minTop!==a||i.afterHeight!==c?(o._log("【check】before setData, old pos is",i.minTop,i.maxTop,a,d),o._throttle=!1,i.left=r,i.top=n,i.beginIndex=s,i.endIndex=h,i.minTop=a,i.maxTop=d,i.afterHeight=c,i.ignoreBeginIndex=i.ignoreEndIndex=-1,o.page._recycleViewportChange({detail:{data:o._pos,id:o.id}},(function(){t.detail.cb&&t.detail.cb()}))):o._log("------------is the same beginIndex and endIndex")}))}}else this._clearList(t.detail.cb)},_calcViewportIndexes:function(t,e,i){var o=this;this._getBeforeSlotHeight((function(){var r=o.__calcViewportIndexes(t,e),n=r.beginIndex,l=r.endIndex,s=r.minTop,h=r.afterHeight,a=r.maxTop;i&&i(n,l,s,h,a)}))},_getBeforeSlotHeight:function(t){void 0!==this.data.beforeSlotHeight?t&&t(this.data.beforeSlotHeight):this.reRender(t)},_getAfterSlotHeight:function(t){void 0!==this.data.afterSlotHeight?t&&t(this.data.afterSlotHeight):this.reRender(t)},_getIndexes:function(t,e){if(t===e&&0===e)return{beginIndex:-1,endIndex:-1};for(var i=Math.floor(t/200),o=Math.ceil(e/200),r=Math.floor(this.data.width/200),n=void 0,l=void 0,s=this.sizeMap,h=i;h<=o;h++)for(var a=0;a<r;a++){var c=h+"."+a;if(s[c])for(var d=0;d<s[c].length;d++)void 0!==n?n>s[c][d]?n=s[c][d]:l<s[c][d]&&(l=s[c][d]):n=l=s[c][d]}return{beginIndex:n,endIndex:l}},_isIndexValid:function(t,e){return!(void 0===t||-1===t||void 0===e||-1===e||e>=this.sizeArray.length)},__calcViewportIndexes:function(t,e){if(!this.sizeArray.length)return{};var i=this._pos;void 0===t&&(t=i.left),void 0===e&&(e=i.top);var o=this.data.beforeSlotHeight||0,r=this.data.screen,n=e-i.height*r-o,l=e+i.height*r-o;l>this.totalHeight&&(n-=l-this.totalHeight,l=this.totalHeight),n<o&&(l+=Math.min(o-n,this.totalHeight),n=0);var s=this._getIndexes(n,l),h=s.beginIndex,a=s.endIndex;if(a>=this.sizeArray.length&&(a=this.sizeArray.length-1),!this._isIndexValid(h,a))return{beginIndex:-1,endIndex:-1,minTop:0,afterHeight:0,maxTop:0};var c=this.sizeArray[a].beforeHeight+this.sizeArray[a].height;return{beginIndex:h,endIndex:a,minTop:this.sizeArray[h].beforeHeight,afterHeight:this.totalHeight-c,maxTop:l}},setItemSize:function(t){this.sizeArray=t.array,this.sizeMap=t.map,t.totalHeight!==this.totalHeight&&this.setData({totalHeight:t.totalHeight,useInPage:this.useInPage||!1}),this.totalHeight=t.totalHeight},setList:function(t,e){this._currentSetDataKey=t,this._currentSetDataList=e},setPage:function(t){this.page=t},forceUpdate:function(t,e){var i=this;if(!this._isReady)return this._updateTimerId&&clearTimeout(this._updateTimerId),void(this._updateTimerId=setTimeout((function(){i.forceUpdate(t,e)}),10));this._updateTimerId=null;var o=this;e?this.reRender((function(){o._scrollViewDidScroll({detail:{scrollLeft:o._pos.left,scrollTop:o.currentScrollTop||o.data.scrollTop||0,ignoreScroll:!0,cb:t}},!0)})):this._scrollViewDidScroll({detail:{scrollLeft:o._pos.left,scrollTop:o.currentScrollTop||o.data.scrollTop||0,ignoreScroll:!0,cb:t}},!0)},_initPosition:function(t){this._pos={left:this.data.scrollLeft||0,top:this.data.scrollTop||0,width:this.data.width,height:Math.max(500,this.data.height),direction:0},this.reRender(t)},_widthChanged:function(t){return this._isReady?(this._pos.width=t,this.forceUpdate(),t):t},_heightChanged:function(t){return this._isReady?(this._pos.height=Math.max(500,t),this.forceUpdate(),t):t},reRender:function(t){var e=this,i=void 0,o=void 0,r=this;function n(){r._lastBeforeSlotHeight===i&&r._lastAfterSlotHeight===o||r.setData({hasBeforeSlotHeight:!0,hasAfterSlotHeight:!0,beforeSlotHeight:i,afterSlotHeight:o}),r._lastBeforeSlotHeight=i,r._lastAfterSlotHeight=o,t&&t()}var l=!1,s=!1;this.setData({hasBeforeSlotHeight:!1,hasAfterSlotHeight:!1},(function(){e.createSelectorQuery().select(".slot-before").boundingClientRect((function(t){i=t.height,l=!0,s&&n&&n()})).exec(),e.createSelectorQuery().select(".slot-after").boundingClientRect((function(t){o=t.height,s=!0,l&&n&&n()})).exec()}))},_setInnerBeforeAndAfterHeight:function(t){void 0!==t.beforeHeight&&(this._tmpBeforeHeight=t.beforeHeight),t.afterHeight&&(this._tmpAfterHeight=t.afterHeight)},_recycleInnerBatchDataChanged:function(t){var e=this;if(void 0!==this._tmpBeforeHeight){var i={innerBeforeHeight:this._tmpBeforeHeight||0,innerAfterHeight:this._tmpAfterHeight||0};void 0!==this._tmpInnerScrollTop&&(i.innerScrollTop=this._tmpInnerScrollTop);var o={},r=!1;void 0!==this._currentSetDataKey&&(o[this._currentSetDataKey]=this._currentSetDataList,r=!0);var n=this.data.scrollWithAnimation;r&&e.page.setData(o),e.setData(i,(function(){e.setData({scrollWithAnimation:n}),"function"==typeof t&&t()})),delete this._currentSetDataKey,delete this._currentSetDataList,this._tmpBeforeHeight=void 0,this._tmpAfterHeight=void 0,this._tmpInnerScrollTop=void 0}},_renderByScrollTop:function(t){this._scrollViewDidScroll({detail:{scrollLeft:this._pos.scrollLeft,scrollTop:t,ignoreScroll:!0}},!0),this.data.scrollWithAnimation&&(this._isScrollingWithAnimation=!0),this.setData({innerScrollTop:t})},_scrollTopChanged:function(t,e){var i=this;return this._isInitScrollTop||0!==t?(this.currentScrollTop=t,this._isReady?(this._isInitScrollTop=!0,this._scrollTopTimerId=null,void 0===this._lastScrollTop&&(this._lastScrollTop=this.data.scrollTop),Math.abs(t-this._lastScrollTop)<this._pos.height?(this.setData({innerScrollTop:t}),t):(this._isScrollTopChanged?this._renderByScrollTop(t):setTimeout((function(){i._isScrollTopChanged=!0,i._renderByScrollTop(t)}),10),t)):(this._scrollTopTimerId&&clearTimeout(this._scrollTopTimerId),this._scrollTopTimerId=setTimeout((function(){i._scrollTopChanged(t,e)}),10),t)):(this._isInitScrollTop=!0,t)},_scrollToIndexChanged:function(t,e){var i=this;if(!this._isInitScrollToIndex&&0===t)return this._isInitScrollToIndex=!0,t;if(!this._isReady)return this._scrollToIndexTimerId&&clearTimeout(this._scrollToIndexTimerId),this._scrollToIndexTimerId=setTimeout((function(){i._scrollToIndexChanged(t,e)}),10),t;this._isInitScrollToIndex=!0,this._scrollToIndexTimerId=null,void 0===this._lastScrollTop&&(this._lastScrollTop=this.data.scrollTop);var o=this.boundingClientRect(t);if(!o)return t;var r=o.top+(this.data.beforeSlotHeight||0);return this.currentScrollTop=r,Math.abs(r-this._lastScrollTop)<this._pos.height?(this.setData({innerScrollTop:r}),t):(this._isScrollToIndexChanged?this._renderByScrollTop(r):setTimeout((function(){i._isScrollToIndexChanged=!0,i._renderByScrollTop(r)}),10),t)},boundingClientRect:function(t){return t<0||t>=this.sizeArray.length?null:{left:0,top:this.sizeArray[t].beforeHeight,width:this.sizeArray[t].width,height:this.sizeArray[t].height}},getIndexesInViewport:function(t){t||(t=1);var e=this.currentScrollTop,i=e+t;i<0&&(i=0);var o=e+this.data.height-t;o>this.totalHeight&&(o=this.totalHeight);for(var r=[],n=0;n<this.sizeArray.length&&(this.sizeArray[n].beforeHeight+this.sizeArray[n].height>=i&&this.sizeArray[n].beforeHeight<=o&&r.push(n),!(this.sizeArray[n].beforeHeight>o));n++);return r},getTotalHeight:function(){return this.totalHeight},setUseInPage:function(t){this.useInPage=t},setPlaceholderImage:function(t,e){var i=["data:image/svg+xml,%3Csvg height='"+e.height+"' width='"+e.width+"' xmlns='http://www.w3.org/2000/svg'%3E"];t.forEach((function(t){i.push("%3Crect width='"+t.width+"' x='"+t.left+"' height='"+t.height+"' y='"+t.top+"' style='fill:rgb(204,204,204);' /%3E")})),i.push("%3C/svg%3E"),this.setData({placeholderImageStr:i.join("")})}}})}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/miniprogram-recycle-view/recycle-view.js'});require("miniprogram_npm/miniprogram-recycle-view/recycle-view.js");