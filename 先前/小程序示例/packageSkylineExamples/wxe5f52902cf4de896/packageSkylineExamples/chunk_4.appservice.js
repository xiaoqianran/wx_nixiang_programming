__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageSkylineExamples/examples/app-bar/app-bar/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"statusBarHeight":new Array(1),"maxCoverSize":new Array(1),"musicCover":new Array(1)},K=U===true,e=(C)=>{},g=(C)=>{},f=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"icon--back");if(C)O(N,"mode","aspectFill");if(C)O(N,"src","/assets/arrow-down.png");if(C)R.v(N,"tap","close",!1,!1,!1,!1)},g)},d=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.statusBarHeight||undefined)R.y(N,"height: "+Y(D.statusBarHeight)+"px;");A["statusBarHeight"][0]=(D,E,T)=>{R.y(N,"height: "+Y(D.statusBarHeight)+"px;")}},e);E("view",{},(N,C)=>{if(C)R.y(N,"flex: 1;");if(C)L(N,"column-main-center")},f)},j=(C)=>{},m=(C,T)=>{C?T("Skyline 渲染框架入门与实践"):T()},n=(C,T)=>{C?T("小程序技术专员 - binnie"):T()},l=(C,T,E)=>{E("text",{},(N,C)=>{if(C)O(N,"overflow","ellipsis");if(C)O(N,"max-lines","1")},m);E("text",{},(N,C)=>{if(C)L(N,"name");if(C)O(N,"overflow","ellipsis");if(C)O(N,"max-lines","1")},n)},p=(C)=>{},q=(C)=>{},o=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)R.y(N,"margin-right: 24px;");if(C)O(N,"src","/assets/play.png")},p);E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/next.png")},q)},k=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"title column")},l);E("view",{},(N,C)=>{if(C)L(N,"row")},o)},i=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"cover");if(C)O(N,"mode","aspectFill");if(C||K||U.musicCover)O(N,"src",D.musicCover);A["musicCover"][0]=(D,E,T)=>{O(N,"src",D.musicCover);E(N)}},j);E("view",{},(N,C)=>{if(C)L(N,"title-wrap row-between")},k)},h=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"row ");if(C)R.v(N,"tap","expand",!1,!1,!1,!1)},i)},s=(C,T)=>{C?T("微信学堂"):T()},t=(C,T)=>{C?T("88 人在学"):T()},r=(C,T,E)=>{E("text",{},(N,C)=>{},s);E("text",{},(N,C)=>{},t)},v=(C,T)=>{C?T("Skyline 渲染框架入门与实践"):T()},w=(C,T)=>{C?T("小程序技术专员 - binnie"):T()},u=(C,T,E)=>{E("text",{},(N,C)=>{},v);E("text",{},(N,C)=>{if(C)L(N,"name")},w)},y=(C)=>{},z=(C)=>{},A0=(C)=>{},x=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/next.png");if(C)R.y(N,"transform: rotate(180deg);")},y);E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/play.png")},z);E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/next.png")},A0)},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"nav-bar column")},d);E("view",{},(N,C)=>{if(C)L(N,"cover-area");if(C||K||!!U.maxCoverSize||undefined)R.y(N,"height: "+Y(D.maxCoverSize)+"px;");A["maxCoverSize"][0]=(D,E,T)=>{R.y(N,"height: "+Y(D.maxCoverSize)+"px;")}},h);E("view",{},(N,C)=>{if(C)L(N,"row-between")},r);E("view",{},(N,C)=>{if(C)L(N,"music-title column");if(C)R.y(N,"margin-top: 50px;")},u);E("view",{},(N,C)=>{if(C)L(N,"footer row-between");if(C)R.y(N,"margin-top: 50px;")},x)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"expand-container")},c)},a=(C,T,E)=>{E("vertical-drag-gesture-handler",{},(N,C)=>{if(C)R.wl(N,"ongesture","handleVerticalDrag")},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packageSkylineExamples/examples/app-bar/app-bar/index";__wxRouteBegin = true;__wxAppCurrentFile__="packageSkylineExamples/examples/app-bar/app-bar/index.js";define("packageSkylineExamples/examples/app-bar/app-bar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lerp=exports.clamp=exports.GestureState=void 0;var e,a=wx.worklet,t=a.shared,r=a.timing,s=a.Easing,n=exports.GestureState={POSSIBLE:0,BEGIN:1,ACTIVE:2,END:3,CANCELLED:4},i=(exports.lerp=((e=function(e,a,t){return e+(a-e)*t})._closure={},e.asString="function _f(begin,end,t){return begin+(end-begin)*t;}",e.__workletHash=9953309036832,e.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js (13:20)",e.__worklet=!0,e),exports.clamp=function(){var e=function(e,a,t){return e>t?t:e<a?a:e};return e._closure={},e.asString="function _f(cur,lowerBound,upperBound){if(cur>upperBound)return upperBound;if(cur<lowerBound)return lowerBound;return cur;}",e.__workletHash=0xd5c5dbbc9a9,e.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js (18:21)",e.__worklet=!0,e}()),o=wx.getSystemInfoSync(),l=o.statusBarHeight,p=o.screenHeight,c=o.screenWidth,u=o.safeArea;console.info("@@@ systemInfo",o),Component({properties:{},data:{maxCoverSize:0,statusBarHeight:0,musicCover:"https://res.wx.qq.com/op_res/Nu9XXzXcXnD1j5EgWQ2ElxNcl1yMvnKypRo4MTbjOv7FC3saigGoOBTZibyESC7EXaClnPYhB6pvfb-IRmso6g"},lifetimes:{attached:function(){var e=t(0),a=c-48,r=p-u.bottom,s=o.system.indexOf("iOS")>=0;this.setData({statusBarHeight:l,maxCoverSize:a}),this.applyAnimatedStyle(".cover",function(){var t=function(){var t=60+(a-60)*e.value;return{width:"".concat(t,"px"),height:"".concat(t,"px")}};return t._closure={initCoverSize:60,maxCoverSize:a,progress:e},t.asString='function _f(){const{initCoverSize,maxCoverSize,progress}=jsThis._closure;{var height=initCoverSize+(maxCoverSize-initCoverSize)*progress.value;return{width:"".concat(height,"px"),height:"".concat(height,"px")};}}',t.__workletHash=0xfdcb170d303,t.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js (49:40)",t.__worklet=!0,t}()),this.applyAnimatedStyle(".expand-container",function(){var a=function(){var a=e.value,t=s?30*a:0;return{top:"".concat((p-(76+r))*(1-a),"px"),borderRadius:"".concat(t,"px ").concat(t,"px 0px 0px")}};return a._closure={progress:e,isIOS:s,initCoverSize:60,safeAreaInsetBottom:r,screenHeight:p},a.asString='function _f(){const{progress,isIOS,initCoverSize,safeAreaInsetBottom,screenHeight}=jsThis._closure;{var t=progress.value;var maxRadius=30;var radius=isIOS?maxRadius*t:0;var initBarHeight=initCoverSize+8*2+safeAreaInsetBottom;return{top:"".concat((screenHeight-initBarHeight)*(1-t),"px"),borderRadius:"".concat(radius,"px ").concat(radius,"px 0px 0px")};}}',a.__workletHash=0xedd6dc12492,a.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js (58:51)",a.__worklet=!0,a}()),this.applyAnimatedStyle(".title-wrap",function(){var a=function(){return{opacity:1-e.value}};return a._closure={progress:e},a.asString="function _f(){const{progress}=jsThis._closure;{return{opacity:1-progress.value};}}",a.__workletHash=8907946993674,a.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js (70:45)",a.__worklet=!0,a}());var n=l+(s?40:44);this.applyAnimatedStyle(".nav-bar",function(){var a=function(){var a=e.value;return{opacity:a<.8?0:(a-.8)/(1-.8),height:"".concat(n*e.value,"px")}};return a._closure={progress:e,navBarHeight:n},a.asString='function _f(){const{progress,navBarHeight}=jsThis._closure;{var t=progress.value;var threshold=0.8;var opacity=t<threshold?0:(t-threshold)/(1-threshold);return{opacity:opacity,height:"".concat(navBarHeight*progress.value,"px")};}}',a.__workletHash=0xf0f51f2c9d8,a.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js (78:42)",a.__worklet=!0,a}()),this.progress=e}},methods:{close:function(){this.progress.value=r(0,{duration:250,easing:s.ease})},expand:function(){this.progress.value=r(1,{duration:250,easing:s.ease})},handleDragUpdate:function(e){var a=this.progress.value-e;this.progress.value=i(a,0,1)},_handleDragUpdate_worklet_factory_:function(){var e=this;return function(){var a=function(a){var t=e.progress.value-a;e.progress.value=i(t,0,1)};return a._closure={_this:{progress:e.progress},clamp:i},a.asString="function _f(delta){const{_this,clamp}=jsThis._closure;{var curValue=_this.progress.value;var newVal=curValue-delta;_this.progress.value=clamp(newVal,0.0,1.0);}}",a.__workletHash=0x96ef46143f9,a.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js",a.__worklet=!0,a}()},handleDragEnd:function(e){var a=this.progress.value,t=!1;t=Math.abs(e)>=1?e<=0:a>.7;var n=s.out(s.ease);this.progress.value=t?r(1,{duration:200,easing:n}):r(0,{duration:250,easing:n})},_handleDragEnd_worklet_factory_:function(){var e=this;return function(){var a=function(a){var t=e.progress.value,n=!1;n=Math.abs(a)>=1?a<=0:t>.7;var i=s.out(s.ease);e.progress.value=n?r(1,{duration:200,easing:i}):r(0,{duration:250,easing:i})};return a._closure={_this2:{progress:e.progress},Easing:{out:s.out,ease:s.ease},timing:r},a.asString="function _f(velocity){const{_this2,Easing,timing}=jsThis._closure;{var t=_this2.progress.value;var animateForward=false;if(Math.abs(velocity)>=1){animateForward=velocity<=0;}else{animateForward=t>0.7;}var animationCurve=Easing.out(Easing.ease);if(animateForward){_this2.progress.value=timing(1.0,{duration:200,easing:animationCurve});}else{_this2.progress.value=timing(0.0,{duration:250,easing:animationCurve});}}}",a.__workletHash=9348796581532,a.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js",a.__worklet=!0,a}()},handleVerticalDrag:function(e){if(e.state===n.ACTIVE){var a=e.deltaY/p;this.handleDragUpdate(a)}else if(e.state===n.END){var t=e.velocityY/p;this.handleDragEnd(t)}else e.state===n.CANCELLED&&this.handleDragEnd(0)},_handleVerticalDrag_worklet_factory_:function(){var e=this._handleDragUpdate_worklet_factory_(),a=this._handleDragEnd_worklet_factory_();return function(){var t=function(t){if(t.state===n.ACTIVE){var r=t.deltaY/p;e(r)}else if(t.state===n.END){var s=t.velocityY/p;a(s)}else t.state===n.CANCELLED&&a(0)};return t._closure={GestureState:{ACTIVE:n.ACTIVE,END:n.END,CANCELLED:n.CANCELLED},screenHeight:p,handleDragUpdate:e,handleDragEnd:a},t.asString="function _f(evt){const{GestureState,screenHeight,handleDragUpdate,handleDragEnd}=jsThis._closure;{if(evt.state===GestureState.ACTIVE){var delta=evt.deltaY/screenHeight;handleDragUpdate(delta);}else if(evt.state===GestureState.END){var velocity=evt.velocityY/screenHeight;handleDragEnd(velocity);}else if(evt.state===GestureState.CANCELLED){handleDragEnd(0.0);}}}",t.__workletHash=8010183302204,t.__location="packageSkylineExamples/examples/app-bar/app-bar/index.js",t.__worklet=!0,t}()}}});
},{isPage:false,isComponent:true,currentFile:'packageSkylineExamples/examples/app-bar/app-bar/index.js'});require("packageSkylineExamples/examples/app-bar/app-bar/index.js");