__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageSkylineExamples/examples/product-list/components/navigation-bar/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"innerPaddingRight":new Array(1),"color":new Array(1),"extClass":new Array(1),"statusBarHeight":new Array(1),"background":new Array(1),"navBarHeight":new Array(1),"displayStyle":new Array(1),"leftWidth":new Array(1)},K=U===true,e,i=(C)=>{},h=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__button weui-navigation-bar__btn_goback")},i)},g=(C,T,E)=>{E("view",{},(N,C)=>{if(C)O(N,"bindtap","back");if(C)L(N,"weui-navigation-bar__btn_goback_wrapper");if(C)O(N,"hover-class","weui-active");if(C)O(N,"aria-role","button");if(C)O(N,"aria-label","返回")},h)},f=(C,T,E,B,F,S)=>{if(e===1){E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__buttons")},g)}else{S("left")}},d=(C,T,E,B)=>{e=D.back?1:0;B(e,f)},k,n=(C)=>{},m=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-loading");if(C||K||!!(Z(U.size,"width")||Z(U.size,"height"))||undefined)R.y(N,"width:"+Y(X(D.size).width)+"rpx;height:"+Y(X(D.size).height)+"rpx;");if(C)O(N,"aria-role","img");if(C)O(N,"aria-label","加载中")},n)},l=(C,T,E)=>{if(k===1){E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__loading");if(C)O(N,"aria-role","alert")},m)}},o,q=(C,T)=>{C||K||U.title?T(Y(D.title)):T()},p=(C,T,E,B,F,S)=>{if(o===1){E("text",{},(N,C)=>{},q)}else{S("center")}},j=(C,T,E,B)=>{k=D.loading?1:0;B(k,l);o=D.title?1:0;B(o,p)},r=(C,T,E,B,F,S)=>{S("right")},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__left");var $A=D.back;if(C||K||!!U.back||($A?U.leftWidth:undefined))R.y(N,$A?D.leftWidth:"");A["leftWidth"][0]=(D,E,T)=>{var $B=D.back;R.y(N,$B?D.leftWidth:"")}},d);E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__center")},j);E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__right")},r)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__inner");if(C||K||!!(U.statusBarHeight||U.navBarHeight||U.color||U.background||U.displayStyle||U.innerPaddingRight)||undefined)R.y(N,"padding-top: "+Y(D.statusBarHeight)+"px; height: "+Y(D.navBarHeight)+"px; color: "+Y(D.color)+"; background: "+Y(D.background)+"; "+Y(D.displayStyle)+"; "+Y(D.innerPaddingRight)+";");A["statusBarHeight"][0]=A["navBarHeight"][0]=A["color"][0]=A["background"][0]=A["displayStyle"][0]=A["innerPaddingRight"][0]=(D,E,T)=>{R.y(N,"padding-top: "+Y(D.statusBarHeight)+"px; height: "+Y(D.navBarHeight)+"px; color: "+Y(D.color)+"; background: "+Y(D.background)+"; "+Y(D.displayStyle)+"; "+Y(D.innerPaddingRight)+";")}},c)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.extClass||undefined)L(N,"weui-navigation-bar "+Y(D.extClass));A["extClass"][0]=(D,E,T)=>{L(N,"weui-navigation-bar "+Y(D.extClass))}},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),'packageSkylineExamples/examples/product-list/pages/index/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"intoView":new Array(1),"paddingTop":new Array(1),"renderer":new Array(1)},K=U===true,d=(C)=>{},f=(C,T)=>{C?T("微信学堂"):T()},e=(C,T,E)=>{E("text",{},(N,C)=>{},f)},c=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"nav-logo");if(C)O(N,"mode","aspectFill");if(C)O(N,"src","https://res.wx.qq.com/op_res/RBwYn_b7VGuWuLJ2qBChU5TS9E0E2WBIJqkwvK4DV_NdciupZQ58P62ReribRjp3Cn0uqFLZ6v4DC7719-YaeA")},d);E("view",{},(N,C)=>{if(C)L(N,"nav-title")},e)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"nav-left")},c,"left")},h=(C)=>{},n=(C)=>{},m=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"search-icon");if(C)O(N,"src","/images/search.png")},n)},o=(C,T)=>{C?T("这是skyline实现的～"):T()},p=(C,T)=>{C?T("搜索"):T()},l=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"search-icon-wrp")},m);E("view",{},(N,C)=>{if(C)L(N,"search-text")},o);E("view",{},(N,C)=>{if(C)L(N,"search-btn")},p)},k=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"search")},l)},j=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"search-container");var $A=D.renderer=="skyline";if(C||K||!!(U.renderer||($A?undefined:undefined)||U.paddingTop)||undefined)R.y(N,Y($A?"padding":"margin")+"-top: "+Y(D.paddingTop)+"px;");A["renderer"][0]=A["paddingTop"][0]=(D,E,T)=>{var $B=D.renderer=="skyline";R.y(N,Y($B?"padding":"margin")+"-top: "+Y(D.paddingTop)+"px;")}},k)},r,s,t,u,v,z,A0,B0,C0,D0,G0=(C)=>{},I0=(C,T)=>{C||K||Z(B0,"name")?T(Y(X(z).name)):T()},H0=(C,T,E)=>{E("text",{},(N,C)=>{},I0)},F0=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"category-icon");if(C||K||Z(B0,"icon"))O(N,"src",X(z).icon)},G0);E("view",{},(N,C)=>{if(C)L(N,"category-name")},H0)},E0=(C,$A,$B,$C,$D,$E,T,E)=>{z=$A,A0=$B,B0=$C,C0=$D,D0=$E;E("view",{},(N,C)=>{if(C)L(N,"category-item");if(C||K||!!U.categoryItemWidth||undefined)R.y(N,"width: "+Y(D.categoryItemWidth)+"px;")},F0)},y=(C,T,E,B,F)=>{F(X(r).categorys,"id",U?Z(t,"categorys"):undefined,[...v,"categorys"],E0)},x=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"category-list")},y)},w=(C,$A,$B,$C,$D,$E,T,E)=>{r=$A,s=$B,t=$C,u=$D,v=$E;E("swiper-item",{},(N,C)=>{},x)},q=(C,T,E,B,F)=>{F(D.categorySet,"page",U?U.categorySet:undefined,[0,"categorySet"],w)},i=(C,T,E)=>{E("sticky-header",{},(N,C)=>{},j);E("swiper",{},(N,C)=>{if(C)L(N,"category-wrp")},q)},M0,N0,O0,P0,Q0,T0=(C,T)=>{C||K||Z(O0,"name")?T(Y(X(M0).name)):T()},S0=(C,T,E)=>{E("text",{},(N,C)=>{var $A=D.selected===N0;if(C||K||!!(U.selected||P0||($A?undefined:undefined))||undefined)L(N,"vip-category-name "+Y($A?"selected":""));if(C||K||P0)R.d(N,"id",N0);if(C)R.v(N,"tap","chooseVipCategory",!1,!1,!1,!1)},T0)},R0=(C,$A,$B,$C,$D,$E,T,E)=>{M0=$A,N0=$B,O0=$C,P0=$D,Q0=$E;E("view",{},(N,C)=>{if(C)L(N,"vip-category-item");if(C||K||!!P0||undefined)R.i(N,"vip-category-"+Y(N0))},S0)},L0=(C,T,E,B,F)=>{F(D.vipCategorys,"id",U?U.vipCategorys:undefined,[0,"vipCategorys"],R0)},K0=(C,T,E)=>{E("scroll-view",{},(N,C)=>{if(C)L(N,"vip-categorys-list");if(C||K||undefined)O(N,"scroll-x",true);if(C)O(N,"type","list");if(C||K||undefined)O(N,"show-scrollbar",false);if(C||K||undefined)O(N,"enable-flex",true);if(C||K||undefined)O(N,"scroll-with-animation",true);if(C||K||U.intoView)O(N,"scroll-into-view",D.intoView);A["intoView"][0]=(D,E,T)=>{O(N,"scroll-into-view",D.intoView);E(N)};if(C)O(N,"scroll-into-view-alignment","center")},L0)},V0,W0,X0,Y0,Z0,c0=(C)=>{},e0=(C,T)=>{C||K||Z(X0,"title")?T(Y(X(V0).title)):T()},d0=(C,T,E)=>{E("text",{},(N,C)=>{},e0)},g0=(C,T)=>{C?T("3万+评价"):T()},f0=(C,T,E)=>{E("text",{},(N,C)=>{},g0)},b0=(C,T,E)=>{E("image",{},(N,C)=>{if(C)O(N,"mode","widthFix");if(C)L(N,"good-icon");if(C||K||undefined)O(N,"fade-in",true);if(C||K||Z(X0,"icon"))O(N,"src",X(V0).icon)},c0);E("view",{},(N,C)=>{if(C)L(N,"good-title")},d0);E("view",{},(N,C)=>{if(C)L(N,"good-comment")},f0)},a0=(C,$A,$B,$C,$D,$E,T,E)=>{V0=$A,W0=$B,X0=$C,Y0=$D,Z0=$E;E("view",{},(N,C)=>{if(C)L(N,"good")},b0)},U0=(C,T,E,B,F)=>{F(D.goods,"id",U?U.goods:undefined,[0,"goods"],a0)},J0=(C,T,E)=>{E("sticky-header",{},(N,C)=>{if(C)R.y(N,"position: sticky; top: 0; z-index: 1; display: block;")},K0);E("grid-view",{},(N,C)=>{if(C||K||[])O(N,"padding",[6,6,6,6]);if(C)O(N,"cross-axis-gap","6");if(C)O(N,"main-axis-gap","6");if(C)O(N,"cross-axis-count","2");if(C)O(N,"type","masonry")},U0)},g=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"fake-nav-bar")},h);E("sticky-section",{},(N,C)=>{if(C||K||undefined)O(N,"push-pinned-header",false)},i);E("sticky-section",{},(N,C)=>{if(C||K||undefined)O(N,"push-pinned-header",false)},J0)},a=(C,T,E)=>{E("navigation-bar",{},(N,C)=>{if(C)L(N,"nav-bar");if(C)O(N,"title","");if(C||K||undefined)O(N,"back",false)},b);E("scroll-view",{},(N,C)=>{if(C)L(N,"scroll-area");if(C)O(N,"type","custom");if(C||K||undefined)O(N,"scroll-y",true);if(C||K||undefined)O(N,"show-scrollbar",false);if(C)R.wl(N,"onscrollupdate","handleScrollUpdate")},g)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packageSkylineExamples/examples/product-list/components/navigation-bar/index";__wxRouteBegin = true;__wxAppCurrentFile__="packageSkylineExamples/examples/product-list/components/navigation-bar/index.js";define("packageSkylineExamples/examples/product-list/components/navigation-bar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},properties:{extClass:{type:String,value:""},title:{type:String,value:""},background:{type:String,value:""},color:{type:String,value:""},back:{type:Boolean,value:!0},loading:{type:Boolean,value:!1},animated:{type:Boolean,value:!0},show:{type:Boolean,value:!0,observer:"_showChange"},delta:{type:Number,value:1}},data:{displayStyle:""},attached:function(){var t=this,a=wx.getMenuButtonBoundingClientRect();wx.getSystemInfo({success:function(e){t.setData({statusBarHeight:e.statusBarHeight,innerPaddingRight:"padding-right:".concat(e.windowWidth-a.left,"px"),leftWidth:"width:".concat(e.windowWidth-a.left,"px"),navBarHeight:a.bottom+a.top-e.statusBarHeight})}})},methods:{_showChange:function(t){var a="";a=this.data.animated?"opacity: ".concat(t?"1":"0",";transition: opacity 0.5s;"):"display: ".concat(t?"":"none"),this.setData({displayStyle:a})},back:function(){var t=this.data;t.delta&&wx.navigateBack({delta:t.delta}),this.triggerEvent("back",{delta:t.delta},{})}}});
},{isPage:false,isComponent:true,currentFile:'packageSkylineExamples/examples/product-list/components/navigation-bar/index.js'});require("packageSkylineExamples/examples/product-list/components/navigation-bar/index.js");;__wxRoute = "packageSkylineExamples/examples/product-list/pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="packageSkylineExamples/examples/product-list/pages/index/index.js";define("packageSkylineExamples/examples/product-list/pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,a=require("../../util"),t=wx.getSystemInfoSync(),r=wx.worklet,i=r.shared,n=r.Easing,s=((e=function(e,a,t){return e+(a-e)*t})._closure={},e.asString="function _f(begin,end,t){return begin+(end-begin)*t;}",e.__workletHash=9953309036832,e.__location="packageSkylineExamples/examples/product-list/pages/index/index.js (7:13)",e.__worklet=!0,e),c=function(){var e=function(e,a,t){return e>t?t:e<a?a:e};return e._closure={},e.asString="function _f(cur,lowerBound,upperBound){if(cur>upperBound)return upperBound;if(cur<lowerBound)return lowerBound;return cur;}",e.__workletHash=0xd5c5dbbc9a9,e.__location="packageSkylineExamples/examples/product-list/pages/index/index.js (12:14)",e.__worklet=!0,e}();Component({data:{goods:(0,a.getGoods)(30),categorySet:[{page:0,categorys:(0,a.getCategory)()},{page:1,categorys:(0,a.getCategory)().reverse()}],paddingTop:44,renderer:"skyline",vipCategorys:(0,a.getVIPCategory)(),categoryItemWidth:0,intoView:"",selected:0},lifetimes:{created:function(){this.searchBarWidth=i(100),this.navBarOpactiy=i(1)},attached:function(){var e=this,a=(t.windowWidth-20)/5;this.setData({categoryItemWidth:a,paddingTop:t.statusBarHeight,renderer:this.renderer}),this.applyAnimatedStyle(".nav-bar",function(){var a=function(){return{opacity:e.navBarOpactiy.value}};return a._closure={_this:{navBarOpactiy:e.navBarOpactiy}},a.asString="function _f(){const{_this}=jsThis._closure;{return{opacity:_this.navBarOpactiy.value};}}",a.__workletHash=8445903283305,a.__location="packageSkylineExamples/examples/product-list/pages/index/index.js (47:42)",a.__worklet=!0,a}()),this.applyAnimatedStyle(".search",function(){var a=function(){return{width:"".concat(e.searchBarWidth.value,"%")}};return a._closure={_this:{searchBarWidth:e.searchBarWidth}},a.asString='function _f(){const{_this}=jsThis._closure;{return{width:"".concat(_this.searchBarWidth.value,"%")};}}',a.__workletHash=0xf3915a0142c,a.__location="packageSkylineExamples/examples/product-list/pages/index/index.js (54:41)",a.__worklet=!0,a}()),this.applyAnimatedStyle(".search-container",function(){var a=function(){return{backgroundColor:e.navBarOpactiy.value>0&&"skyline"==e.renderer?"transparent":"#fff"}};return a._closure={_this:{navBarOpactiy:e.navBarOpactiy,renderer:e.renderer}},a.asString="function _f(){const{_this}=jsThis._closure;{return{backgroundColor:_this.navBarOpactiy.value>0&&_this.renderer=='skyline'?'transparent':'#fff'};}}",a.__workletHash=0xb395258792e,a.__location="packageSkylineExamples/examples/product-list/pages/index/index.js (61:51)",a.__worklet=!0,a}())}},methods:{chooseVipCategory:function(e){var a=e.currentTarget.dataset.id;this.setData({intoView:"vip-category-".concat(a),selected:parseInt(a,10)})},handleScrollUpdate:function(e){var a=c(e.detail.scrollTop,0,60)/60,t=n.cubicBezier(.4,0,.2,1);this.searchBarWidth.value=s(100,70,t(a)),this.navBarOpactiy.value=s(1,0,a)},_handleScrollUpdate_worklet_factory_:function(){var e=this;return function(){var a=function(a){var t=c(a.detail.scrollTop,0,60)/60,r=n.cubicBezier(.4,0,.2,1);e.searchBarWidth.value=s(100,70,r(t)),e.navBarOpactiy.value=s(1,0,t)};return a._closure={clamp:c,Easing:{cubicBezier:n.cubicBezier},_this2:{searchBarWidth:e.searchBarWidth,navBarOpactiy:e.navBarOpactiy},lerp:s},a.asString="function _f(evt){const{clamp,Easing,_this2,lerp}=jsThis._closure;{var maxDistance=60;var scrollTop=clamp(evt.detail.scrollTop,0,maxDistance);var progress=scrollTop/maxDistance;var EasingFn=Easing.cubicBezier(0.4,0.0,0.2,1.0);_this2.searchBarWidth.value=lerp(100,70,EasingFn(progress));_this2.navBarOpactiy.value=lerp(1,0,progress);}}",a.__workletHash=1592926642665,a.__location="packageSkylineExamples/examples/product-list/pages/index/index.js",a.__worklet=!0,a}()}}});
},{isPage:true,isComponent:true,currentFile:'packageSkylineExamples/examples/product-list/pages/index/index.js'});require("packageSkylineExamples/examples/product-list/pages/index/index.js");