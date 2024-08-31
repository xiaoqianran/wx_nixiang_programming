var e=require("../../../../util/util"),r=[0,.5,1,1,0,-.5,-.5,.7,0,1,.5,-.5,.1,1,.6];Page({onShareAppMessage:function(){return{title:"canvas",path:"packageComponent/pages/canvas/webgl/webgl"}},data:{theme:"light",canIUse:!0},onReady:function(){var r=this,t=wx.getSystemInfoSync().SDKVersion;(0,e.compareVersion)(t,"2.7.0")<0?(console.log("123"),this.setData({canIUse:!1})):wx.createSelectorQuery().select("#canvasWebGL").node().exec((function(e){var t=e[0].node;r.renderWebGL(t)}))},renderWebGL:function(e){if(e){var t=e.getContext("webgl");if(t){t.viewport(0,0,305,305);var a=t.createShader(t.VERTEX_SHADER);t.shaderSource(a,"\n  precision mediump float;\n\n  attribute vec2 vertPosition;\n  attribute vec3 vertColor;\n  varying vec3 fragColor;\n\n  void main() {\n    gl_Position = vec4(vertPosition, 0.0, 1.0);\n    fragColor = vertColor;\n  }\n"),t.compileShader(a);var n=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(n,"\n  precision mediump float;\n\n  varying vec3 fragColor;\n  void main() {\n    gl_FragColor = vec4(fragColor, 1.0);\n  }\n"),t.compileShader(n);var o=t.createProgram();t.attachShader(o,a),t.attachShader(o,n),t.deleteShader(a),t.deleteShader(n),t.linkProgram(o),t.useProgram(o);e.requestAnimationFrame((function a(){var n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW);var i=t.getAttribLocation(o,"vertPosition"),c=t.getAttribLocation(o,"vertColor");t.vertexAttribPointer(i,2,t.FLOAT,t.FALSE,5*Float32Array.BYTES_PER_ELEMENT,0),t.vertexAttribPointer(c,3,t.FLOAT,t.FALSE,5*Float32Array.BYTES_PER_ELEMENT,2*Float32Array.BYTES_PER_ELEMENT),t.enableVertexAttribArray(i),t.enableVertexAttribArray(c),t.drawArrays(t.TRIANGLES,0,3),e.requestAnimationFrame(a)}))}else console.error("gl init failed",t)}else this.setData({canIUse:!1})},onUnload:function(){wx.offThemeChange&&wx.offThemeChange()},onLoad:function(){var e=this;this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange((function(r){var t=r.theme;e.setData({theme:t})}))}});