__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageSkylineExamples/examples/segmented-half-screen/pages/index/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"height":new Array(1),"scale":new Array(1)},K=U===true,b=(C)=>{},f=(C)=>{},e=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"comment-handler")},f);C?T(" 留言 "):T()},d=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"comment-header");if(C)R.v(N,"touchend","handleTouchEnd",!1,!1,!1,!1)},e)},j,k,l,m,n,r=(C)=>{},t=(C,T)=>{C||K||Z(l,"userName")?T(Y(X(j).userName)):T()},u=(C,T)=>{C||K||Z(l,"comment")?T(Y(X(j).comment)):T()},s=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"user-name")},t);E("text",{},(N,C)=>{if(C)L(N,"content")},u)},q=(C,T,E)=>{E("image",{},(N,C)=>{if(C||K||undefined)O(N,"fade-in",true);if(C)L(N,"user-head-img");if(C||K||Z(l,"userHeadImg"))O(N,"src",X(j).userHeadImg)},r);E("view",{},(N,C)=>{if(C)L(N,"others")},s)},v,w,x,y,z,C0=(C)=>{},E0=(C,T)=>{C||K||!!(Z(x,"userName")||Z(x,"replyUserName"))||undefined?T(Y(Y(X(v).userName)+" 回复 "+Y(X(v).replyUserName))):T()},F0=(C,T)=>{C||K||Z(x,"comment")?T(Y(X(v).comment)):T()},D0=(C,T,E)=>{E("text",{},(N,C)=>{if(C)L(N,"user-name")},E0);E("text",{},(N,C)=>{if(C)L(N,"content")},F0)},B0=(C,T,E)=>{E("image",{},(N,C)=>{if(C||K||undefined)O(N,"fade-in",true);if(C)L(N,"user-head-img");if(C||K||Z(x,"userHeadImg"))O(N,"src",X(v).userHeadImg)},C0);E("view",{},(N,C)=>{if(C)L(N,"others")},D0)},A0=(C,$A,$B,$C,$D,$E,T,E)=>{v=$A,w=$B,x=$C,y=$D,z=$E;E("view",{},(N,C)=>{if(C)L(N,"sub-comment")},B0)},p=(C,T,E,B,F)=>{E("view",{},(N,C)=>{if(C)L(N,"main-comment")},q);F(X(j).subCommentList,"comment",U?Z(l,"subCommentList"):undefined,[...n,"subCommentList"],A0)},o=(C,$A,$B,$C,$D,$E,T,E)=>{j=$A,k=$B,l=$C,m=$D,n=$E;E("view",{},(N,C)=>{if(C)L(N,"comment-item")},p)},G0=(C)=>{},i=(C,T,E,B,F)=>{F(D.list,"comment",U?U.list:undefined,[0,"list"],o);E("view",{},(N,C)=>{if(C)L(N,"safe-area-inset-bottom")},G0)},h=(C,T,E)=>{E("scroll-view",{},(N,C)=>{if(C)L(N,"comment-list");if(C||K||undefined)O(N,"scroll-y",true);if(C)R.wl(N,"adjustDecelerationVelocity","adjustDecelerationVelocity");if(C)R.wl(N,"onscrollupdate","handleScroll");if(C)O(N,"type","list");if(C||K||undefined)O(N,"show-scrollbar",false)},i)},g=(C,T,E)=>{E("vertical-drag-gesture-handler",{},(N,C)=>{if(C)R.i(N,"scroll");if(C)O(N,"native-view","scroll-view");if(C)R.wl(N,"shouldResponseOnMove","shouldScrollViewResponse");if(C||K||[])O(N,"simultaneousHandlers",["pan"])},h)},c=(C,T,E)=>{E("pan-gesture-handler",{},(N,C)=>{if(C)R.wl(N,"ongesture","handlePan");if(C)R.y(N,"flex-shrink: 0;")},d);E("pan-gesture-handler",{},(N,C)=>{if(C)R.i(N,"pan");if(C)R.wl(N,"shouldResponseOnMove","shouldPanResponse");if(C||K||[])O(N,"simultaneousHandlers",["scroll"]);if(C)R.wl(N,"ongesture","handlePan")},g)},a=(C,T,E)=>{E("map",{},(N,C)=>{if(C)R.i(N,"myMap");if(C||K||U.scale)O(N,"scale",D.scale);A["scale"][0]=(D,E,T)=>{O(N,"scale",D.scale);E(N)};if(C)O(N,"latitude","23.099994");if(C)O(N,"longitude","113.324520")},b);E("view",{},(N,C)=>{if(C)L(N,"comment-container");if(C||K||!!U.height||undefined)R.y(N,"height: "+Y(D.height)+"px;");A["height"][0]=(D,E,T)=>{R.y(N,"height: "+Y(D.height)+"px;")}},c)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packageSkylineExamples/examples/segmented-half-screen/pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js";define("packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=require("./comment-data"),s=((t=function(t,e,s){return Math.min(Math.max(t,e),s)})._closure={},t.asString="function clamp(val,min,max){return Math.min(Math.max(val,min),max);}",t.__workletHash=8563822427902,t.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js (3:0)",t.__worklet=!0,t),a=wx.worklet,r=a.shared,n=a.timing,l=2,i=3,o=4,u=wx.getSystemInfoSync(),c=u.screenHeight,h=u.statusBarHeight,_=u.safeArea;Component({data:{scale:16,list:(0,e.getCommentList)()},lifetimes:{created:function(){this.transY=r(1e3),this.scrollTop=r(0),this.startPan=r(!0),this.initTransY=r(0),this.upward=r(!1)},attached:function(){this.setData({height:c-h})},ready:function(){var t=this,e=this.createSelectorQuery();e.select(".comment-header").boundingClientRect(),e.exec((function(e){t.transY.value=t.initTransY.value=c-e[0].height-(c-_.bottom)})),this.applyAnimatedStyle(".comment-container",function(){var e=function(){return{transform:"translateY(".concat(t.transY.value,"px)")}};return e._closure={_this:{transY:t.transY}},e.asString='function _f(){const{_this}=jsThis._closure;{return{transform:"translateY(".concat(_this.transY.value,"px)")};}}',e.__workletHash=2721270280079,e.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js (46:52)",e.__worklet=!0,e}())}},methods:{setMapScale:function(t){this.setData({scale:t})},scrollTo:function(t){var e=18;t>c/2&&(e=16),wx.worklet.runOnJS(this.setMapScale.bind(this))(e),this.transY.value=n(t,{duration:200})},_scrollTo_worklet_factory_:function(){var t=this,e=this.setMapScale.bind(this);return function(){var s=function(s){var a=18;s>c/2&&(a=16),wx.worklet.runOnJS(e)(a),t.transY.value=n(s,{duration:200})};return s._closure={screenHeight:c,wx:{worklet:{runOnJS:wx.worklet.runOnJS}},_setMapScale_:e,_this2:{transY:t.transY},timing:n},s.asString="function _f(toValue){const{screenHeight,wx,_setMapScale_,_this2,timing}=jsThis._closure;{var scale=18;if(toValue>screenHeight/2){scale=16;}wx.worklet.runOnJS(_setMapScale_)(scale);_this2.transY.value=timing(toValue,{duration:200});}}",s.__workletHash=0xf51f05de6a,s.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js",s.__worklet=!0,s}()},shouldPanResponse:function(){return this.startPan.value},_shouldPanResponse_worklet_factory_:function(){var t=this;return function(){var e=function(){return t.startPan.value};return e._closure={_this3:{startPan:t.startPan}},e.asString="function _f(){const{_this3}=jsThis._closure;{return _this3.startPan.value;}}",e.__workletHash=0xb8b12e1bbc2,e.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js",e.__worklet=!0,e}()},shouldScrollViewResponse:function(t){if(this.transY.value>h)return!1;var e=this.scrollTop.value,s=t.deltaY,a=e<=0&&s>0;return this.startPan.value=a,!a},_shouldScrollViewResponse_worklet_factory_:function(){var t=this;return function(){var e=function(e){if(t.transY.value>h)return!1;var s=t.scrollTop.value,a=e.deltaY,r=s<=0&&a>0;return t.startPan.value=r,!r};return e._closure={_this4:{transY:t.transY,scrollTop:t.scrollTop,startPan:t.startPan},statusBarHeight:h},e.asString="function _f(pointerEvent){const{_this4,statusBarHeight}=jsThis._closure;{if(_this4.transY.value>statusBarHeight)return false;var scrollTop=_this4.scrollTop.value;var deltaY=pointerEvent.deltaY;var result=scrollTop<=0&&deltaY>0;_this4.startPan.value=result;return!result;}}",e.__workletHash=7424665704490,e.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js",e.__worklet=!0,e}()},handlePan:function(t){if(t.state===l){this.upward.value=t.deltaY<0;var e=this.transY.value,a=s(e+t.deltaY,h,c);if(e===a)return;this.transY.value=a}t.state!==i&&t.state!==o||(this.transY.value<=c/2?this.upward.value?this.scrollTo(h):this.scrollTo(c/2):this.transY.value>c/2&&this.transY.value<=this.initTransY.value&&this.upward.value?this.scrollTo(c/2):this.scrollTo(this.initTransY.value))},_handlePan_worklet_factory_:function(){var t=this,e=this._scrollTo_worklet_factory_();return function(){var a=function(a){if(a.state===l){t.upward.value=a.deltaY<0;var r=t.transY.value,n=s(r+a.deltaY,h,c);if(r===n)return;t.transY.value=n}a.state!==i&&a.state!==o||(t.transY.value<=c/2?t.upward.value?e(h):e(c/2):t.transY.value>c/2&&t.transY.value<=t.initTransY.value&&t.upward.value?e(c/2):e(t.initTransY.value))};return a._closure={GestureState:{ACTIVE:l,END:i,CANCELLED:o},_this5:{upward:t.upward,transY:t.transY,initTransY:t.initTransY},clamp:s,statusBarHeight:h,screenHeight:c,scrollTo:e},a.asString="function _f(gestureEvent){const{GestureState,_this5,clamp,statusBarHeight,screenHeight,scrollTo}=jsThis._closure;{if(gestureEvent.state===GestureState.ACTIVE){_this5.upward.value=gestureEvent.deltaY<0;var curPosition=_this5.transY.value;var destination=clamp(curPosition+gestureEvent.deltaY,statusBarHeight,screenHeight);if(curPosition===destination)return;_this5.transY.value=destination;}if(gestureEvent.state===GestureState.END||gestureEvent.state===GestureState.CANCELLED){if(_this5.transY.value<=screenHeight/2){if(_this5.upward.value){scrollTo(statusBarHeight);}else{scrollTo(screenHeight/2);}}else if(_this5.transY.value>screenHeight/2&&_this5.transY.value<=_this5.initTransY.value){if(_this5.upward.value){scrollTo(screenHeight/2);}else{scrollTo(_this5.initTransY.value);}}else{scrollTo(_this5.initTransY.value);}}}}",a.__workletHash=7138851406656,a.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js",a.__worklet=!0,a}()},adjustDecelerationVelocity:function(t){return this.scrollTop.value<=0?0:t},_adjustDecelerationVelocity_worklet_factory_:function(){var t=this;return function(){var e=function(e){return t.scrollTop.value<=0?0:e};return e._closure={_this6:{scrollTop:t.scrollTop}},e.asString="function _f(velocity){const{_this6}=jsThis._closure;{var scrollTop=_this6.scrollTop.value;return scrollTop<=0?0:velocity;}}",e.__workletHash=7149067130876,e.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js",e.__worklet=!0,e}()},handleScroll:function(t){this.scrollTop.value=t.detail.scrollTop},_handleScroll_worklet_factory_:function(){var t=this;return function(){var e=function(e){t.scrollTop.value=e.detail.scrollTop};return e._closure={_this7:{scrollTop:t.scrollTop}},e.asString="function _f(evt){const{_this7}=jsThis._closure;{_this7.scrollTop.value=evt.detail.scrollTop;}}",e.__workletHash=5810142559707,e.__location="packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js",e.__worklet=!0,e}()},handleTouchEnd:function(){"skyline"!==this.renderer&&(this.transY.value===h?(this.lastTransY=h,this.scrollTo(c/2)):this.transY.value===c/2&&this.lastTransY===h?(this.lastTransY=c/2,this.scrollTo(this.initTransY.value)):this.transY.value===this.initTransY.value?(this.lastTransY=this.initTransY.value,this.scrollTo(c/2)):this.transY.value===c/2&&this.lastTransY===this.initTransY.value&&this.scrollTo(h))}}});
},{isPage:true,isComponent:true,currentFile:'packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js'});require("packageSkylineExamples/examples/segmented-half-screen/pages/index/index.js");