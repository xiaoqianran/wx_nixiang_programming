__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'components/app-bar-course/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"statusBarHeight":new Array(1),"maxCoverSize":new Array(1),"musicCover":new Array(1)},K=U===true,f=(C)=>{},h=(C)=>{},g=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"icon--back");if(C)O(N,"mode","aspectFill");if(C)O(N,"src","/assets/arrow-down.png");if(C)R.v(N,"tap","close",!1,!1,!1,!1)},h)},e=(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!U.statusBarHeight||undefined)R.y(N,"height: "+Y(D.statusBarHeight)+"px;");A["statusBarHeight"][0]=(D,E,T)=>{R.y(N,"height: "+Y(D.statusBarHeight)+"px;")}},f);E("view",{},(N,C)=>{if(C)R.y(N,"flex: 1;");if(C)L(N,"column-main-center")},g)},k=(C)=>{},n=(C,T)=>{C?T("Skyline 渲染框架入门与实践"):T()},o=(C,T)=>{C?T("小程序技术专员 - binnie"):T()},m=(C,T,E)=>{E("text",{},(N,C)=>{if(C)O(N,"overflow","ellipsis");if(C)O(N,"max-lines","1")},n);E("text",{},(N,C)=>{if(C)L(N,"name");if(C)O(N,"overflow","ellipsis");if(C)O(N,"max-lines","1")},o)},q=(C)=>{},r=(C)=>{},p=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)R.y(N,"margin-right: 24px;");if(C)O(N,"src","/assets/play.png")},q);E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/next.png")},r)},l=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"title column")},m);E("view",{},(N,C)=>{if(C)L(N,"row")},p)},j=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"cover");if(C)O(N,"mode","aspectFill");if(C||K||U.musicCover)O(N,"src",D.musicCover);A["musicCover"][0]=(D,E,T)=>{O(N,"src",D.musicCover);E(N)}},k);E("view",{},(N,C)=>{if(C)L(N,"title-wrap row-between")},l)},i=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"row ");if(C)R.v(N,"tap","expand",!1,!1,!1,!1)},j)},t=(C,T)=>{C?T("微信学堂"):T()},u=(C,T)=>{C?T("88 人在学"):T()},s=(C,T,E)=>{E("text",{},(N,C)=>{},t);E("text",{},(N,C)=>{},u)},w=(C,T)=>{C?T("Skyline 渲染框架入门与实践"):T()},x=(C,T)=>{C?T("小程序技术专员 - binnie"):T()},v=(C,T,E)=>{E("text",{},(N,C)=>{},w);E("text",{},(N,C)=>{if(C)L(N,"name")},x)},z=(C)=>{},A0=(C)=>{},B0=(C)=>{},y=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/next.png");if(C)R.y(N,"transform: rotate(180deg);")},z);E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/play.png")},A0);E("image",{},(N,C)=>{if(C)L(N,"icon");if(C)O(N,"src","/assets/next.png")},B0)},d=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"nav-bar column")},e);E("view",{},(N,C)=>{if(C)L(N,"cover-area");if(C||K||!!U.maxCoverSize||undefined)R.y(N,"height: "+Y(D.maxCoverSize)+"px;");A["maxCoverSize"][0]=(D,E,T)=>{R.y(N,"height: "+Y(D.maxCoverSize)+"px;")}},i);E("view",{},(N,C)=>{if(C)L(N,"row-between")},s);E("view",{},(N,C)=>{if(C)L(N,"music-title column");if(C)R.y(N,"margin-top: 50px;")},v);E("view",{},(N,C)=>{if(C)L(N,"footer row-between");if(C)R.y(N,"margin-top: 50px;")},y)},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"expand-container")},d)},b=(C,T,E)=>{E("vertical-drag-gesture-handler",{},(N,C)=>{if(C)R.wl(N,"ongesture","handleVerticalDrag")},c)},a=(C,T,E)=>{E("root-portal",{},(N,C)=>{if(C)R.y(N,"width: 100vw;height: 100vh;")},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/app-bar-course/index.wxss'] = setCssToHead([".",[1],"expand-container{background-color:#e9f8f7;bottom:0;color:#7e8081;left:0;overflow:hidden;padding:0 24px env(safe-area-inset-bottom);pointer-events:auto;position:absolute;right:0;top:0}\n.",[1],"hide{display:none}\n.",[1],"nav-bar{box-sizing:border-box;overflow:hidden}\n.",[1],"icon--back{height:30px;width:30px}\n.",[1],"title{-webkit-flex:1;flex:1;margin-left:10px;min-width:160px}\n.",[1],"title .",[1],"name{font-size:12px;margin-top:4px}\n.",[1],"title-wrap{-webkit-flex:1;flex:1;min-width:240px}\n.",[1],"footer{padding:0 24px}\n.",[1],"footer .",[1],"icon{height:40px;width:40px}\n.",[1],"expand-cover{height:100%;width:100%}\n.",[1],"music-title{color:#07c160;font-size:20px;font-weight:700;margin-top:48px}\n.",[1],"music-title .",[1],"name{color:#b1b2b3;font-size:14px;font-weight:200;margin-top:12px}\n.",[1],"cover-area{aspect-ratio:1/1;margin:8px 0;overflow:hidden;width:100%}\n.",[1],"cover{-webkit-flex-shrink:0;flex-shrink:0}\n.",[1],"icon{height:18px;width:18px}\n.",[1],"row,.",[1],"row-between{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"row-between{-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"column,.",[1],"column-main-center{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"column-main-center{-webkit-justify-content:center;justify-content:center}\n.",[1],"column-cross-center{-webkit-flex-direction:column;flex-direction:column}\n.",[1],"center,.",[1],"column-cross-center{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.",[1],"center{-webkit-justify-content:center;justify-content:center}\n.",[1],"circle{border-radius:50%;height:100%;overflow:hidden;width:100%}\n",],undefined,{path:"./components/app-bar-course/index.wxss"});
}