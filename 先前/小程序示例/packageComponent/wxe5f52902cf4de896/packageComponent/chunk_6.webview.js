__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageComponent/pages/content/text/text':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},G["common/head"]._,G["common/foot"]._,H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"canRemove":new Array(1),"canAdd":new Array(1),"theme":new Array(1),"scrollTop":new Array(1)},K=U===true,b=(C)=>{},e,f=(C,T,E,B,F,S,J)=>{var $A=I(e);if(e&&$A)$A(R,C,{title:"text"},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},j,k,l,m,n,p=(C,T)=>{C||K||l?T(Y(j)):T()},o=(C,$A,$B,$C,$D,$E,T,E)=>{j=$A,k=$B,l=$C,m=$D,n=$E;E("text",{},(N,C)=>{},p)},i=(C,T,E,B,F)=>{F(D.extraLine,null,U?U.extraLine:undefined,[0,"extraLine"],o)},q=(C,T)=>{C?T("add line"):T()},r=(C,T)=>{C?T("remove line"):T()},h=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"text-box");if(C)O(N,"scroll-y","true");if(C||K||U.scrollTop)O(N,"scroll-top",D.scrollTop);A["scrollTop"][0]=(D,E,T)=>{O(N,"scroll-top",D.scrollTop);E(N)}},i);E("button",{},(N,C)=>{if(C||K||!!U.canAdd||undefined)O(N,"disabled",!D.canAdd);A["canAdd"][0]=(D,E,T)=>{O(N,"disabled",!D.canAdd);E(N)};if(C)O(N,"bindtap","add")},q);E("button",{},(N,C)=>{if(C||K||!!U.canRemove||undefined)O(N,"disabled",!D.canRemove);A["canRemove"][0]=(D,E,T)=>{O(N,"disabled",!D.canRemove);E(N)};if(C)O(N,"bindtap","remove")},r)},g=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-spacing")},h)},s,t=(C,T,E,B,F,S,J)=>{var $A=I(s);if(s&&$A)$A(R,C,{},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},d=(C,T,E,B)=>{e="head";B(e,f);E("view",{},(N,C)=>{if(C)L(N,"page-body")},g);s="foot";B(s,t)},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"container page");if(C||K||U.theme)R.d(N,"weuiTheme",D.theme);A["theme"][0]=(D,E,T)=>{R.d(N,"weuiTheme",D.theme);E(N)}},d)},a=(C,T,E)=>{E("mp-navigation-bar",{},(N,C)=>{if(C)O(N,"title","text");if(C||K||undefined)O(N,"back",true)},b);E("scroll-view",{},(N,C)=>{if(C)L(N,"page-scroll-view");if(C||K||undefined)O(N,"scroll-y",true);if(C)O(N,"type","list")},c)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packageComponent/pages/content/text/text.wxss'] = setCssToHead([[2,"./common/reset.wxss"],"wx-button{margin:20px 0}\n.",[1],"text-box{-webkit-align-items:center;align-items:center;background-color:#fff;color:#353535;display:-webkit-flex;display:flex;font-size:15px;-webkit-justify-content:center;justify-content:center;line-height:2;margin-bottom:35px;min-height:150px;padding:20px 0;text-align:center}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packageComponent/pages/content/text/text.wxss:1:724)",{path:"./packageComponent/pages/content/text/text.wxss"});
}