__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageComponent/pages/media/camera/camera':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},G["common/head"]._,G["common/foot"]._,H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"theme":new Array(1),"position":new Array(1)},K=U===true,b=(C)=>{},e,f=(C,T,E,B,F,S,J)=>{var $A=I(e);if(e&&$A)$A(R,C,{title:"camera"},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},i=(C)=>{},j,m=(C,T)=>{C?T("使用实时数据帧在 canvas 组件的展示"):T()},n=(C,T)=>{C||K||!!(U.frameHeight||U.frameWidth)||undefined?T(Y(" 帧高度："+Y(D.frameHeight)+" 帧宽度："+Y(D.frameWidth)+" ")):T()},o=(C)=>{},l=(C,T,E)=>{E("view",{},(N,C)=>{if(C)R.y(N,"margin: 10px 0")},m);E("view",{},(N,C)=>{},n);E("canvas",{},(N,C)=>{if(C)R.i(N,"webgl");if(C)O(N,"type","webgl");if(C)O(N,"canvas-id","canvas");if(C||K||!!(U.width||U.height)||undefined)R.y(N,"width: "+Y(D.width)+"px; height: "+Y(D.height)+"px;")},o)},k=(C,T,E)=>{if(j===1){E("view",{},(N,C)=>{if(C)L(N,"info-container")},l)}},q=(C,T)=>{var $A=D.showCanvas;C||K||!!U.showCanvas||($A?undefined:undefined)?T(Y($A?"关闭实时帧数据模式":"开启实时帧数据模式")):T()},p=(C,T,E)=>{E("button",{},(N,C)=>{if(C)O(N,"bindtap","handleShowCanvas");if(C)O(N,"type","primary")},q)},s=(C,T)=>{C?T("切换摄像头"):T()},r=(C,T,E)=>{E("button",{},(N,C)=>{if(C)O(N,"type","primary");if(C)O(N,"bindtap","togglePosition")},s)},u=(C,T)=>{C?T("拍照"):T()},t=(C,T,E)=>{E("button",{},(N,C)=>{if(C)O(N,"type","primary");if(C)O(N,"bindtap","takePhoto")},u)},w=(C,T)=>{C?T("开始录像"):T()},v=(C,T,E)=>{E("button",{},(N,C)=>{if(C)O(N,"type","primary");if(C)O(N,"bindtap","startRecord")},w)},y=(C,T)=>{C?T("结束录像"):T()},x=(C,T,E)=>{E("button",{},(N,C)=>{if(C)O(N,"type","primary");if(C)O(N,"bindtap","stopRecord")},y)},C0=(C,T)=>{C?T("扫描一维码"):T()},B0=(C,T,E)=>{E("text",{},(N,C)=>{},C0)},A0=(C,T,E)=>{E("navigator",{},(N,C)=>{if(C)O(N,"url","/packageComponent/pages/media/camera-scan-code/camera-scan-code");if(C)O(N,"hover-class","none")},B0)},z=(C,T,E)=>{E("button",{},(N,C)=>{if(C)O(N,"type","primary")},A0)},D0=(C,T)=>{C?T("点击录像或拍照即可在下方预览效果"):T()},E0,G0=(C)=>{},F0=(C,T,E)=>{if(E0===1){E("image",{},(N,C)=>{if(C)O(N,"mode","widthFix");if(C)L(N,"photo");if(C||K||U.src)O(N,"src",D.src)},G0)}},H0,J0=(C)=>{},I0=(C,T,E)=>{if(H0===1){E("video",{},(N,C)=>{if(C)L(N,"video");if(C||K||U.videoSrc)O(N,"src",D.videoSrc)},J0)}},h=(C,T,E,B)=>{E("camera",{},(N,C)=>{if(C)O(N,"flash","off");if(C||K||U.position)O(N,"device-position",D.position);A["position"][0]=(D,E,T)=>{O(N,"device-position",D.position);E(N)};if(C)O(N,"binderror","error");if(C)O(N,"resolution","high");if(C)O(N,"frame-size","large")},i);j=D.showCanvas?1:0;B(j,k);E("view",{},(N,C)=>{if(C)L(N,"btn-area first-btn")},p);E("view",{},(N,C)=>{if(C)L(N,"btn-area")},r);E("view",{},(N,C)=>{if(C)L(N,"btn-area")},t);E("view",{},(N,C)=>{if(C)L(N,"btn-area")},v);E("view",{},(N,C)=>{if(C)L(N,"btn-area")},x);E("view",{},(N,C)=>{if(C)L(N,"btn-area")},z);E("view",{},(N,C)=>{if(C)L(N,"preview-tips")},D0);E0=D.src?1:0;B(E0,F0);H0=D.videoSrc?1:0;B(H0,I0)},g=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section")},h)},K0,L0=(C,T,E,B,F,S,J)=>{var $A=I(K0);if(K0&&$A)$A(R,C,{},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},d=(C,T,E,B)=>{e="head";B(e,f);E("view",{},(N,C)=>{if(C)L(N,"page-body")},g);K0="foot";B(K0,L0)},c=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"container page");if(C||K||U.theme)R.d(N,"weuiTheme",D.theme);A["theme"][0]=(D,E,T)=>{R.d(N,"weuiTheme",D.theme);E(N)}},d)},a=(C,T,E)=>{E("mp-navigation-bar",{},(N,C)=>{if(C)O(N,"title","camera");if(C||K||undefined)O(N,"back",true)},b);E("scroll-view",{},(N,C)=>{if(C)L(N,"page-scroll-view");if(C||K||undefined)O(N,"scroll-y",true);if(C)O(N,"type","list")},c)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});;__wxRoute = "packageComponent/pages/media/camera/camera";__wxRouteBegin = true;__wxAppCurrentFile__="packageComponent/pages/media/camera/camera.js";define("packageComponent/pages/media/camera/camera.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=[-1,-1,0,1,-1,0,1,1,0,-1,1,0],t=[0,1,2,0,2,3],r=[0,0,1,0,1,1,0,1];function a(e,t,r){var a=e.createShader(r);return e.shaderSource(a,t),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS)||console.error("Error compiling shader: ".concat(e.getShaderInfoLog(a))),a}var n={};Page({onShareAppMessage:function(){return{title:"camera",path:"packageComponent/pages/media/camera/camera"}},data:{theme:"light",src:"",videoSrc:"",position:"back",mode:"scanCode",result:{},frameWidth:0,frameHeight:0,width:1280,height:720,showCanvas:!1},onReady:function(){this.ctx=wx.createCameraContext()},init:function(i){var o=this;this.listener&&this.listener.stop();var h,s=i.node,c=!1;this.listener=this.ctx.onCameraFrame((function(i){c?h(new Uint8Array(i.data),i.width,i.height):(h=function(i,o,h){var s=i.getContext("webgl");if(!s)return console.error("Unable to get webgl context."),null;var c=wx.getSystemInfoSync();s.canvas.width=c.pixelRatio*o,s.canvas.height=c.pixelRatio*h,s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight);var u=a(s,"\n  attribute vec3 aPos;\n  attribute vec2 aVertexTextureCoord;\n  varying highp vec2 vTextureCoord;\n\n  void main(void){\n    gl_Position = vec4(aPos, 1);\n    vTextureCoord = aVertexTextureCoord;\n  }\n",s.VERTEX_SHADER),f=a(s,"\n  varying highp vec2 vTextureCoord;\n  uniform sampler2D uSampler;\n\n  void main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n  }\n",s.FRAGMENT_SHADER),T=s.createProgram();if(s.attachShader(T,u),s.attachShader(T,f),s.linkProgram(T),!s.getProgramParameter(T,s.LINK_STATUS))return console.error("Unable to initialize the shader program."),null;s.useProgram(T);var d=s.createTexture();s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,d),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.bindTexture(s.TEXTURE_2D,null),n.vertexBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,n.vertexBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e),s.STATIC_DRAW),n.vertexIndiceBuffer=s.createBuffer(),s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.vertexIndiceBuffer),s.bufferData(s.ELEMENT_ARRAY_BUFFER,new Uint16Array(t),s.STATIC_DRAW);var E=s.getAttribLocation(T,"aPos");s.vertexAttribPointer(E,3,s.FLOAT,!1,0,0),s.enableVertexAttribArray(E),n.trianglesTexCoordBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,n.trianglesTexCoordBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array(r),s.STATIC_DRAW);var g=s.getAttribLocation(T,"aVertexTextureCoord");s.enableVertexAttribArray(g),s.vertexAttribPointer(g,2,s.FLOAT,!1,0,0);var R=s.getUniformLocation(T,"uSampler");return s.uniform1i(R,0),function(e,t,r){s.bindTexture(s.TEXTURE_2D,d),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,t,r,0,s.RGBA,s.UNSIGNED_BYTE,e),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0)}}(s,i.width,i.height),o.setData({frameWidth:i.width,frameHeight:i.height,width:i.width/3,height:i.height/3}),c=!0)})),this.listener.start()},takePhoto:function(){var e=this;this.ctx.takePhoto({quality:"high",success:function(t){e.setData({src:t.tempImagePath})}})},startRecord:function(){this.ctx.startRecord({success:function(){console.log("startRecord")}})},stopRecord:function(){var e=this;this.ctx.stopRecord({success:function(t){e.setData({src:t.tempThumbPath,videoSrc:t.tempVideoPath})}})},togglePosition:function(){this.setData({position:"front"===this.data.position?"back":"front"})},error:function(e){console.log(e.detail)},handleShowCanvas:function(){var e=this;this.setData({showCanvas:!this.data.showCanvas},(function(){e.data.showCanvas&&wx.createSelectorQuery().select("#webgl").node(e.init).exec()}))},onUnload:function(){wx.offThemeChange&&wx.offThemeChange()},onLoad:function(){var e=this;this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange((function(t){var r=t.theme;e.setData({theme:r})}))}});
},{isPage:true,isComponent:true,currentFile:'packageComponent/pages/media/camera/camera.js'});require("packageComponent/pages/media/camera/camera.js");