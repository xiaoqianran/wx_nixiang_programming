__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'component/navigation-bar/navigation-bar':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"background":new Array(1),"color":new Array(1),"displayStyle":new Array(1),"navBarHeight":new Array(1),"leftWidth":new Array(1),"extClass":new Array(1),"statusBarHeight":new Array(1),"innerPaddingRight":new Array(1),"theme":new Array(1)},K=U===true,e,i=(C)=>{},h=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__button weui-navigation-bar__btn_goback")},i)},g=(C,T,E)=>{E("view",{},(N,C)=>{if(C)O(N,"bindtap","back");if(C)L(N,"weui-navigation-bar__btn_goback_wrapper");if(C)O(N,"hover-class","weui-active");if(C)O(N,"aria-role","button");if(C)O(N,"aria-label","返回")},h)},f=(C,T,E,B,F,S)=>{if(e===1){E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__buttons")},g)}else{S("left")}},d=(C,T,E,B)=>{e=D.back?1:0;B(e,f)},k,n=(C)=>{},m=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-loading");if(C||K||!!(Z(U.size,"width")||Z(U.size,"height"))||undefined)R.y(N,"width:"+Y(X(D.size).width)+"rpx;height:"+Y(X(D.size).height)+"rpx;");if(C)O(N,"aria-role","img");if(C)O(N,"aria-label","加载中")},n)},l=(C,T,E)=>{if(k===1){E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__loading");if(C)O(N,"aria-role","alert")},m)}},o,q=(C,T)=>{C||K||U.title?T(Y(D.title)):T()},p=(C,T,E,B,F,S)=>{if(o===1){E("text",{},(N,C)=>{},q)}else{S("center")}},j=(C,T,E,B)=>{k=D.loading?1:0;B(k,l);o=D.title?1:0;B(o,p)},r=(C,T,E,B,F,S)=>{S("right")},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__left");if(C||K||U.leftWidth)R.y(N,D.leftWidth);A["leftWidth"][0]=(D,E,T)=>{R.y(N,D.leftWidth)}},d);E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__center")},j);E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__right")},r)},b=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-navigation-bar__inner");if(C||K||!!(U.statusBarHeight||U.navBarHeight||U.color||U.background||U.displayStyle||U.innerPaddingRight)||undefined)R.y(N,"padding-top: "+Y(D.statusBarHeight)+"px; height: "+Y(D.navBarHeight)+"px; color: "+Y(D.color)+"; background: "+Y(D.background)+"; "+Y(D.displayStyle)+"; "+Y(D.innerPaddingRight)+";");A["statusBarHeight"][0]=A["navBarHeight"][0]=A["color"][0]=A["background"][0]=A["displayStyle"][0]=A["innerPaddingRight"][0]=(D,E,T)=>{R.y(N,"padding-top: "+Y(D.statusBarHeight)+"px; height: "+Y(D.navBarHeight)+"px; color: "+Y(D.color)+"; background: "+Y(D.background)+"; "+Y(D.displayStyle)+"; "+Y(D.innerPaddingRight)+";")}},c)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.extClass||undefined)L(N,"weui-navigation-bar "+Y(D.extClass));A["extClass"][0]=(D,E,T)=>{L(N,"weui-navigation-bar "+Y(D.extClass))};if(C||K||U.theme)R.d(N,"weuiTheme",D.theme);A["theme"][0]=(D,E,T)=>{R.d(N,"weuiTheme",D.theme);E(N)}},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['component/navigation-bar/navigation-bar.wxss'] = setCssToHead([".",[1],"weui-navigation-bar{color:rgba(0,0,0,.9);display:-webkit-flex;display:flex;overflow:hidden;width:100vw}\n.",[1],"weui-navigation-bar__placeholder{background:#f7f7f7;position:relative}\n.",[1],"weui-navigation-bar__inner,.",[1],"weui-navigation-bar__inner .",[1],"weui-navigation-bar__left{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"weui-navigation-bar__inner{padding-right:95px;position:relative;width:100vw}\n.",[1],"weui-navigation-bar__inner .",[1],"weui-navigation-bar__left{padding-left:16px;position:relative;width:95px}\n.",[1],"weui-navigation-bar__btn_goback_wrapper{margin:-11px -18px -11px -16px;padding:11px 18px 11px 16px}\n.",[1],"weui-navigation-bar__inner .",[1],"weui-navigation-bar__left .",[1],"weui-navigation-bar__btn_goback{background:url(\x22data:image/svg+xml;charset\x3dutf8,%3Csvg xmlns\x3d\x27http://www.w3.org/2000/svg\x27 width\x3d\x2712\x27 height\x3d\x2724\x27 viewBox\x3d\x270 0 12 24\x27%3E %3Cpath fill-opacity\x3d\x27.9\x27 fill-rule\x3d\x27evenodd\x27 d\x3d\x27M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z\x27/%3E%3C/svg%3E\x22) no-repeat 50% 50%;background-color:currentColor;background-size:cover;font-size:12px;height:24px;width:12px}\n.",[1],"weui-navigation-bar__inner .",[1],"weui-navigation-bar__center{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;font-size:17px;font-weight:700;-webkit-justify-content:center;justify-content:center;position:relative;text-align:center}\n[data-weui-theme\x3ddark].",[1],"weui-navigation-bar{color:hsla(0,0%,100%,.8)}\n[data-weui-theme\x3ddark] .",[1],"weui-navigation-bar__inner{background-color:#1f1f1f}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./component/navigation-bar/navigation-bar.wxss:1:1506)",{path:"./component/navigation-bar/navigation-bar.wxss"});
}