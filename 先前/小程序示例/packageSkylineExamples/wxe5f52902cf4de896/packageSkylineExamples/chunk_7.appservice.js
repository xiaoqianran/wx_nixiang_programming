__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageSkylineExamples/examples/app-bar/pages/index/index':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"back":new Array(1)},K=U===true,b=(C)=>{},d=(C,T)=>{C?T("本月课程上新"):T()},f,g,h,i,j,m=(C)=>{},n=(C,T)=>{C||K||Z(h,"title")?T(Y(X(f).title)):T()},l=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"cover");if(C)O(N,"mode","aspectFill");if(C||K||Z(h,"coverImg"))O(N,"src",X(f).coverImg)},m);E("view",{},(N,C)=>{},n)},k=(C,$A,$B,$C,$D,$E,T,E)=>{f=$A,g=$B,h=$C,i=$D,j=$E;E("view",{},(N,C)=>{if(C)L(N,"card");if(C||K||i)R.d(N,"idx",g);if(C)R.v(N,"tap","goDetail",!1,!1,!1,!1)},l)},e=(C,T,E,B,F)=>{F(D.musicList,"id",U?U.musicList:undefined,[0,"musicList"],k)},o=(C,T)=>{C?T("最近学过"):T()},q,r,s,t,u,x=(C)=>{},y=(C,T)=>{C||K||Z(s,"title")?T(Y(X(q).title)):T()},w=(C,T,E)=>{E("image",{},(N,C)=>{if(C)L(N,"cover");if(C)O(N,"mode","aspectFill");if(C||K||Z(s,"coverImg"))O(N,"src",X(q).coverImg)},x);E("view",{},(N,C)=>{},y)},v=(C,$A,$B,$C,$D,$E,T,E)=>{q=$A,r=$B,s=$C,t=$D,u=$E;E("view",{},(N,C)=>{if(C)L(N,"card");if(C||K||t)R.d(N,"idx",r);if(C)R.v(N,"tap","goDetail",!1,!1,!1,!1)},w)},p=(C,T,E,B,F)=>{F(D.musicList,"id",U?U.musicList:undefined,[0,"musicList"],v)},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"title")},d);E("view",{},(N,C)=>{if(C)L(N,"cards")},e);E("view",{},(N,C)=>{if(C)L(N,"title")},o);E("view",{},(N,C)=>{if(C)L(N,"cards")},p)},a=(C,T,E)=>{E("navigation-bar",{},(N,C)=>{if(C)O(N,"title","微信学堂");if(C||K||U.back)O(N,"back",D.back);A["back"][0]=(D,E,T)=>{O(N,"back",D.back);E(N)};if(C)O(N,"color","black");if(C)O(N,"background","#FFF")},b);E("scroll-view",{},(N,C)=>{if(C)L(N,"scroll-area");if(C)O(N,"type","list");if(C||K||undefined)O(N,"scroll-y",true);if(C||K||undefined)O(N,"show-scrollbar",false)},c)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packageSkylineExamples/examples/app-bar/pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="packageSkylineExamples/examples/app-bar/pages/index/index.js";define("packageSkylineExamples/examples/app-bar/pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp();Page({data:{back:!1,maxCoverSize:0,musicList:[{id:0,coverImg:"https://res.wx.qq.com/op_res/Nu9XXzXcXnD1j5EgWQ2ElxNcl1yMvnKypRo4MTbjOv7FC3saigGoOBTZibyESC7EXaClnPYhB6pvfb-IRmso6g",title:"Skyline 渲染框架"},{id:1,coverImg:"https://res.wx.qq.com/op_res/Nu9XXzXcXnD1j5EgWQ2El3JJ3FgQX_YP9sI6kJD_nLjnkdN19yZ5nLtS3cqtNUx621vrni0Kjy5uoX_QMlBJgQ",title:"小程序性能优化"},{id:2,coverImg:"https://res.wx.qq.com/op_res/Nu9XXzXcXnD1j5EgWQ2ElwWbBogi5f0NNRBkuJWfE8HQzysKxBaoCJ-YBr7irwn_uE37dHQTWcHK2uOHIWsQ3Q",title:"医疗行业实践"}]},onLoad:function(){this.route.includes("packageSkylineExamples/examples/")&&this.setData({back:!0})},onShow:function(){"function"==typeof this.getAppBar&&this.getAppBar().setData({showAppbar:!0})},goDetail:function(t){var e=t.currentTarget.dataset.idx;wx.navigateTo({url:"../detail/index?idx=".concat(e)})}});
},{isPage:true,isComponent:true,currentFile:'packageSkylineExamples/examples/app-bar/pages/index/index.js'});require("packageSkylineExamples/examples/app-bar/pages/index/index.js");