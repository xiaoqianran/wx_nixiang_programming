__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageComponent/pages/open/web-view/web-view':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={},K=U===true,b=(C)=>{},a=(C,T,E)=>{E("web-view",{},(N,C)=>{if(C)O(N,"src","https://developers.weixin.qq.com/miniprogram/introduction/")},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packageComponent/pages/open/web-view/web-view";__wxRouteBegin = true;__wxAppCurrentFile__="packageComponent/pages/open/web-view/web-view.js";define("packageComponent/pages/open/web-view/web-view.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{theme:"light"},onShareAppMessage:function(){return{title:"webview",path:"packageComponent/pages/open/web-view/web-view"}},onUnload:function(){wx.offThemeChange&&wx.offThemeChange()},onLoad:function(){var e=this;this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange((function(t){var n=t.theme;e.setData({theme:n})}))}});
},{isPage:true,isComponent:true,currentFile:'packageComponent/pages/open/web-view/web-view.js'});require("packageComponent/pages/open/web-view/web-view.js");