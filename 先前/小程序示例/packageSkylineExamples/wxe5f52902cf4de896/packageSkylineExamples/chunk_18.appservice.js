__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageSkylineExamples/examples/tab-indicator/components/navigation-bar/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"extClass":new Array(1),"background":new Array(1),"leftWidth":new Array(1),"displayStyle":new Array(1),"navBarHeight":new Array(1),"color":new Array(1),"innerPaddingRight":new Array(1),"statusBarHeight":new Array(1)},K=U===true,e,i=(C)=>{},h=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__button weui-navigation-bar__btn_goback")},i)},g=(C,T,E)=>{E("view",{},(N,C)=>{if(C)O(N,"bindtap","back");if(C)L(N,"weui-navigation-bar__btn_goback_wrapper");if(C)O(N,"hover-class","weui-active");if(C)O(N,"aria-role","button");if(C)O(N,"aria-label","返回")},h)},f=(C,T,E,B,F,S)=>{if(e===1){E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__buttons")},g)}else{S("left")}},d=(C,T,E,B)=>{e=D.back?1:0;B(e,f)},k,n=(C)=>{},m=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-loading");if(C||K||!!(Z(U.size,"width")||Z(U.size,"height"))||undefined)R.y(N,"width:"+Y(X(D.size).width)+"rpx;height:"+Y(X(D.size).height)+"rpx;");if(C)O(N,"aria-role","img");if(C)O(N,"aria-label","加载中")},n)},l=(C,T,E)=>{if(k===1){E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__loading");if(C)O(N,"aria-role","alert")},m)}},o,q=(C,T)=>{C||K||U.title?T(Y(D.title)):T()},p=(C,T,E,B,F,S)=>{if(o===1){E("text",{},(N,C)=>{},q)}else{S("center")}},j=(C,T,E,B)=>{k=D.loading?1:0;B(k,l);o=D.title?1:0;B(o,p)},r=(C,T,E,B,F,S)=>{S("right")},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__left");if(C||K||U.leftWidth)R.y(N,D.leftWidth);A["leftWidth"][0]=(D,E,T)=>{R.y(N,D.leftWidth)}},d);E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__center")},j);E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__right")},r)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__inner");if(C||K||!!(U.statusBarHeight||U.navBarHeight||U.color||U.background||U.displayStyle||U.innerPaddingRight)||undefined)R.y(N,"padding-top: "+Y(D.statusBarHeight)+"px; height: "+Y(D.navBarHeight)+"px; color: "+Y(D.color)+"; background: "+Y(D.background)+"; "+Y(D.displayStyle)+"; "+Y(D.innerPaddingRight)+";");A["statusBarHeight"][0]=A["navBarHeight"][0]=A["color"][0]=A["background"][0]=A["displayStyle"][0]=A["innerPaddingRight"][0]=(D,E,T)=>{R.y(N,"padding-top: "+Y(D.statusBarHeight)+"px; height: "+Y(D.navBarHeight)+"px; color: "+Y(D.color)+"; background: "+Y(D.background)+"; "+Y(D.displayStyle)+"; "+Y(D.innerPaddingRight)+";")}},c)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.extClass||undefined)L(N,"weui-navigation-bar "+Y(D.extClass));A["extClass"][0]=(D,E,T)=>{L(N,"weui-navigation-bar "+Y(D.extClass))}},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packageSkylineExamples/examples/tab-indicator/pages/index/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"translateX":new Array(1)},K=U===true,b=(C)=>{},e,f,g,h,i,l=(C,T)=>{C||K||Z(g,"title")?T(Y(X(e).title)):T()},k=(C,T,E)=>{E("view",{},(N,C)=>{},l)},j=(C,$A,$B,$C,$D,$E,T,E)=>{e=$A,f=$B,g=$C,h=$D,i=$E;E("view",{},(N,C)=>{var $A=D.selectedTab===f;if(C||K||!!(U.selectedTab||h||($A?undefined:undefined))||undefined)L(N,"tab-item "+Y($A?"active":""));if(C||K||h)R.d(N,"tab",f);if(C)O(N,"bindtap","onTapTab")},k)},m=(C)=>{},d=(C,T,E,B,F)=>{F(D.tabs,"title",U?U.tabs:undefined,[0,"tabs"],j);E("view",{},(N,C)=>{if(C)L(N,"tab-border");if(C||K||!!U.translateX||undefined)R.y(N,"transform: translateX("+Y(D.translateX)+"px) scaleX(0.7);");A["translateX"][0]=(D,E,T)=>{R.y(N,"transform: translateX("+Y(D.translateX)+"px) scaleX(0.7);")}},m)},o,p,q,r,s,v=(C)=>{},w=(C,T)=>{C||K||Z(q,"title2")?T(Y(X(o).title2)):T()},x=(C,T)=>{C||K||Z(q,"desc")?T(Y(X(o).desc)):T()},u=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"item-image");if(C||K||Z(q,"img"))O(N,"src",X(o).img);if(C)O(N,"mode","widthFix")},v);E("view",{},(N,C)=>{if(C)L(N,"item-title")},w);E("view",{},(N,C)=>{},x)},t=(C,$A,$B,$C,$D,$E,T,E)=>{o=$A,p=$B,q=$C,r=$D,s=$E;E("swiper-item",{},(N,C)=>{},u)},n=(C,T,E,B,F)=>{F(D.tabs,"title",U?U.tabs:undefined,[0,"tabs"],t)},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"tab-list")},d);E("swiper",{},(N,C)=>{if(C)L(N,"scroll-list");if(C||K||U.selectedTab)O(N,"current",D.selectedTab);if(C)R.v(N,"change","onTabChanged",!1,!1,!1,!1);if(C)R.wl(N,"onscrollstart","onTabTransition");if(C)R.wl(N,"onscrollupdate","onTabTransition");if(C)R.wl(N,"onscrollend","onTabTransitionEnd");if(C||K||undefined)O(N,"duration",400);if(C)O(N,"cache-extent","1")},n)},a=(C,T,E)=>{E("navigation-bar",{},(N,C)=>{if(C)O(N,"title","Tab 指示条");if(C||K||undefined)O(N,"back",true)},b);E("view",{},(N,C)=>{if(C)L(N,"tab-container")},c)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packageSkylineExamples/examples/tab-indicator/components/navigation-bar/index";__wxRouteBegin = true;__wxAppCurrentFile__="packageSkylineExamples/examples/tab-indicator/components/navigation-bar/index.js";define("packageSkylineExamples/examples/tab-indicator/components/navigation-bar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},properties:{extClass:{type:String,value:""},title:{type:String,value:""},background:{type:String,value:""},color:{type:String,value:""},back:{type:Boolean,value:!0},loading:{type:Boolean,value:!1},animated:{type:Boolean,value:!0},show:{type:Boolean,value:!0,observer:"_showChange"},delta:{type:Number,value:1}},data:{displayStyle:""},attached:function(){var t=this,a=wx.getMenuButtonBoundingClientRect();wx.getSystemInfo({success:function(e){t.setData({statusBarHeight:e.statusBarHeight,innerPaddingRight:"padding-right:".concat(e.windowWidth-a.left,"px"),leftWidth:"width:".concat(e.windowWidth-a.left,"px"),navBarHeight:a.bottom+a.top-e.statusBarHeight})}})},methods:{_showChange:function(t){var a="";a=this.data.animated?"opacity: ".concat(t?"1":"0",";transition: opacity 0.5s;"):"display: ".concat(t?"":"none"),this.setData({displayStyle:a})},back:function(){var t=this.data;t.delta&&wx.navigateBack({delta:t.delta}),this.triggerEvent("back",{delta:t.delta},{})}}});
},{isPage:false,isComponent:true,currentFile:'packageSkylineExamples/examples/tab-indicator/components/navigation-bar/index.js'});require("packageSkylineExamples/examples/tab-indicator/components/navigation-bar/index.js");;__wxRoute = "packageSkylineExamples/examples/tab-indicator/pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="packageSkylineExamples/examples/tab-indicator/pages/index/index.js";define("packageSkylineExamples/examples/tab-indicator/pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=2;Component({data:{selectedTab:0,tabs:[{title:"性能优化",title2:"小程序性能优化实践",img:"http://mmbiz.qpic.cn/mmbiz_jpg/PxLPibq1ibyh0U4e0qLqNrULAUzW5UbWbicUN5GyJqd24GR0Ricg5q14VGGBWlicNca8x4xelvDrM1r0ibwAjAsR0bOA/0?wx_fmt=jpeg",desc:"小程序性能优化课程基于实际开发场景，由资深开发者分享小程序性能优化的各项能力及应用实践，提升小程序性能表现，满足用户体验。"},{title:"新能力解读",title2:"小程序开发新能力解读",img:"http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSH05EZMIBafqzpoZVSXtCE47V7icf0gru4KPUzMjIcIibJPUlXqbZib4VNmTecxef987XEWib2vhwuqbQ/0?wx_fmt=png",desc:"这个月小程序释放了什么新能力？又有哪些新规则？收藏课程，及时了解小程序开发动态，听官方为你解读新能力。"},{title:"基础开发",title2:"小程序基础开发之架构、框架、组件",img:"http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEz7tgvlaTtv2MYO01RZr0yNgtbEZJzcbRl0deOWmSbX0UfRHPt78UCOxPIVYnhAiaJVib40SviaV1Vw/0?wx_fmt=jpeg",desc:"小程序基础开发之架构、框架、组件，更多课程正在制作中..."}],translateX:0},lifetimes:{created:function(){var t=wx.worklet.shared,a=wx.getSystemInfoSync().windowWidth,e=a-48;this._tabWidth=t(e/3),this._translateX=t(0),this._lastTranslateX=t(0),this._scaleX=t(.7),this._windowWidth=t(a)},attached:function(){var t,a=this;this.applyAnimatedStyle(".tab-border",((t=function(){return{transform:"translateX(".concat(a._translateX.value,"px) scaleX(").concat(a._scaleX.value,")")}})._closure={_this:{_translateX:a._translateX,_scaleX:a._scaleX}},t.asString='function _f(){const{_this}=jsThis._closure;{return{transform:"translateX(".concat(_this._translateX.value,"px) scaleX(").concat(_this._scaleX.value,")")};}}',t.__workletHash=0xf3be8e830f7,t.__location="packageSkylineExamples/examples/tab-indicator/pages/index/index.js (48:45)",t.__worklet=!0,t))}},methods:{onTapTab:function(t){var a=(t.currentTarget.dataset||{}).tab;this.setData({selectedTab:a})},onTabChanged:function(t){var a=t.detail.current;this.setData({selectedTab:a}),"skyline"!==this.renderer&&this.setData({translateX:this._tabWidth.value*a})},onTabTransition:function(a){var e=a.detail.dx/this._windowWidth.value;this._translateX.value=this._lastTranslateX.value+e*this._tabWidth.value;var s=this._translateX.value/this._tabWidth.value%1,i=s<=.5?s:1-s;this._scaleX.value=.6*Math.abs(i)+.7,a.detail.state===t&&(this._lastTranslateX.value=this._translateX.value)},_onTabTransition_worklet_factory_:function(){var a,e=this;return(a=function(a){var s=a.detail.dx/e._windowWidth.value;e._translateX.value=e._lastTranslateX.value+s*e._tabWidth.value;var i=e._translateX.value/e._tabWidth.value%1,l=i<=.5?i:1-i;e._scaleX.value=.6*Math.abs(l)+.7,a.detail.state===t&&(e._lastTranslateX.value=e._translateX.value)})._closure={_this2:{_windowWidth:e._windowWidth,_translateX:e._translateX,_lastTranslateX:e._lastTranslateX,_tabWidth:e._tabWidth,_scaleX:e._scaleX},ScrollState:{scrollEnd:t}},a.asString="function _f(evt){const{_this2,ScrollState}=jsThis._closure;{var translateRatio=evt.detail.dx/_this2._windowWidth.value;_this2._translateX.value=_this2._lastTranslateX.value+translateRatio*_this2._tabWidth.value;var scaleRatio=_this2._translateX.value/_this2._tabWidth.value%1;var changedScale=scaleRatio<=0.5?scaleRatio:1-scaleRatio;_this2._scaleX.value=Math.abs(changedScale)*0.6+0.7;if(evt.detail.state===ScrollState.scrollEnd){_this2._lastTranslateX.value=_this2._translateX.value;}}}",a.__workletHash=4634839533874,a.__location="packageSkylineExamples/examples/tab-indicator/pages/index/index.js",a.__worklet=!0,a},onTabTransitionEnd:function(t){this.onTabTransition(t),this._lastTranslateX.value=this._translateX.value},_onTabTransitionEnd_worklet_factory_:function(){var t,a=this,e=this._onTabTransition_worklet_factory_();return(t=function(t){e(t),a._lastTranslateX.value=a._translateX.value})._closure={onTabTransition:e,_this3:{_lastTranslateX:a._lastTranslateX,_translateX:a._translateX}},t.asString="function _f(evt){const{onTabTransition,_this3}=jsThis._closure;{onTabTransition(evt);_this3._lastTranslateX.value=_this3._translateX.value;}}",t.__workletHash=0xc4c79289217,t.__location="packageSkylineExamples/examples/tab-indicator/pages/index/index.js",t.__worklet=!0,t}}});
},{isPage:true,isComponent:true,currentFile:'packageSkylineExamples/examples/tab-indicator/pages/index/index.js'});require("packageSkylineExamples/examples/tab-indicator/pages/index/index.js");