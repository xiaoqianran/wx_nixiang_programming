var t=require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../../../../../@babel/runtime/helpers/asyncToGenerator");require("../../../../../../@babel/runtime/helpers/Arrayincludes");var i=require("../../../../../../@babel/runtime/helpers/objectSpread2"),o={drawBlock:function(t){var e=t.text,i=t.width,o=void 0===i?0:i,n=t.height,r=t.x,s=t.y,a=t.paddingLeft,c=void 0===a?0:a,h=t.paddingRight,x=void 0===h?0:h,d=t.borderWidth,l=t.backgroundColor,u=t.borderColor,f=t.borderRadius,g=void 0===f?0:f,p=t.opacity,P=void 0===p?1:p,v=0,m=0,w=0;if(void 0!==e){var b=this._getTextWidth("string"==typeof e.text?e:e.text);v=b>o?b:o,v+=c+c;var y=e.textAlign,R=void 0===y?"left":y;e.text;w=n/2+s,m="left"===R?r+c:"center"===R?v/2+r:r+v-x}else v=o;l&&(this.ctx.save(),this.ctx.globalAlpha=P,this.ctx.fillStyle=l,g>0?(this._drawRadiusRect(r,s,v,n,g),this.ctx.fill()):this.ctx.fillRect(this.toPx(r),this.toPx(s),this.toPx(v),this.toPx(n)),this.ctx.restore()),d&&(this.ctx.save(),this.ctx.globalAlpha=P,this.ctx.strokeStyle=u,this.ctx.lineWidth=this.toPx(d),g>0?(this._drawRadiusRect(r,s,v,n,g),this.ctx.stroke()):this.ctx.strokeRect(this.toPx(r),this.toPx(s),this.toPx(v),this.toPx(n)),this.ctx.restore()),e&&this.drawText(Object.assign(e,{x:m,y:w}))},drawText:function(t){var e=this,o=t.x,n=t.y,r=(t.fontSize,t.color,t.baseLine),s=(t.textAlign,t.text);t.opacity,t.width,t.lineNum,t.lineHeight;if("[object Array]"===Object.prototype.toString.call(s)){var a={x:o,y:n,baseLine:r};s.forEach((function(t){a.x+=e.toPx(t.marginLeft||0);var o=e._drawSingleText(Object.assign(t,i({},a)));a.x+=o+e.toPx(t.marginRight||0)}))}else this._drawSingleText(t)},drawImage:function(t){var e=this,i=t.imgPath,o=t.x,n=t.y,r=t.w,s=t.h,a=t.sx,c=t.sy,h=t.sw,x=t.sh,d=t.borderRadius,l=void 0===d?0:d,u=t.borderWidth,f=void 0===u?0:u,g=t.borderColor;return new Promise((function(t){var d=e.node.createImage();d.onload=function(){e.ctx.save(),l>0?(e._drawRadiusRect(o,n,r,s,l),e.ctx.strokeStyle="rgba(255,255,255,0)",e.ctx.stroke(),e.ctx.clip(),e.ctx.drawImage(d,e.toPx(a),e.toPx(c),e.toPx(h),e.toPx(x),e.toPx(o),e.toPx(n),e.toPx(r),e.toPx(s)),f>0&&(e.ctx.strokeStyle=g,e.ctx.lineWidth=e.toPx(f),e.ctx.stroke())):e.ctx.drawImage(d,e.toPx(a),e.toPx(c),e.toPx(h),e.toPx(x),e.toPx(o),e.toPx(n),e.toPx(r),e.toPx(s)),e.ctx.restore(),t()},d.src=i}))},drawLine:function(t){var e=t.startX,i=t.startY,o=t.endX,n=t.endY,r=t.color,s=t.width;this.ctx.save(),this.ctx.beginPath(),this.ctx.strokeStyle=r,this.ctx.lineWidth=this.toPx(s),this.ctx.moveTo(this.toPx(e),this.toPx(i)),this.ctx.lineTo(this.toPx(o),this.toPx(n)),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore()},downloadResource:function(t){var e=this,i=t.images,o=void 0===i?[]:i,n=t.pixelRatio;this.pixelRatio=n||this.pixelRatio;var r=[];return o.forEach((function(t,i){return r.push(e._downloadImageAndInfo(t,i))})),Promise.all(r)},initCanvas:function(t,e,i){var o=this,n=wx.getSystemInfoSync().platform;return new Promise((function(r){"ios"===n?(o.setData({pxWidth:o.toPx(t),pxHeight:o.toPx(e),debug:i}),setTimeout((function(){r()}),100)):o.setData({pxWidth:o.toPx(t),pxHeight:o.toPx(e),debug:i},r)}))}},n={_drawRadiusRect:function(t,e,i,o,n){var r=n/2;this.ctx.beginPath(),this.ctx.moveTo(this.toPx(t+r),this.toPx(e)),this.ctx.lineTo(this.toPx(t+i-r),this.toPx(e)),this.ctx.arc(this.toPx(t+i-r),this.toPx(e+r),this.toPx(r),2*Math.PI*(3/4),2*Math.PI*1),this.ctx.lineTo(this.toPx(t+i),this.toPx(e+o-r)),this.ctx.arc(this.toPx(t+i-r),this.toPx(e+o-r),this.toPx(r),0,2*Math.PI*(1/4)),this.ctx.lineTo(this.toPx(t+r),this.toPx(e+o)),this.ctx.arc(this.toPx(t+r),this.toPx(e+o-r),this.toPx(r),2*Math.PI*(1/4),2*Math.PI*.5),this.ctx.lineTo(this.toPx(t),this.toPx(e+r)),this.ctx.arc(this.toPx(t+r),this.toPx(e+r),this.toPx(r),2*Math.PI*.5,2*Math.PI*(3/4))},_getTextWidth:function(t){var e=this,i=[];"[object Object]"===Object.prototype.toString.call(t)?i.push(t):i=t;var o=0;return i.forEach((function(t){var i=t.fontSize,n=t.text,r=t.marginLeft,s=void 0===r?0:r,a=t.marginRight,c=void 0===a?0:a;e.ctx.fontSize=e.toPx(i),o+=e.ctx.measureText(n).width+s+c})),this.toRpx(o)},_drawSingleText:function(t){var e=this,i=t.x,o=t.y,n=t.fontSize,r=t.color,s=t.baseLine,a=t.textAlign,c=void 0===a?"left":a,h=t.text,x=t.opacity,d=void 0===x?1:x,l=t.textDecoration,u=void 0===l?"none":l,f=t.width,g=t.lineNum,p=void 0===g?1:g,P=t.lineHeight,v=void 0===P?0:P,m=t.fontWeight,w=void 0===m?"normal":m,b=t.fontStyle,y=void 0===b?"normal":b,R=t.fontFamily,I=void 0===R?"sans-serif":R;this.ctx.save(),this.ctx.beginPath(),this.ctx.font=y+" "+w+" "+this.toPx(n,!0)+"px "+I,this.ctx.globalAlpha=d,this.ctx.fillStyle=r,this.ctx.textBaseline=s,this.ctx.textAlign=c;var T=this.toRpx(this.ctx.measureText(h).width),k=[];if(T>f){for(var S="",A=1,_=0;_<=h.length-1;_++)S+=h[_],this.toRpx(this.ctx.measureText(S).width)>=f?(A===p&&_!==h.length-1&&(S=S.substring(0,S.length-1)+"..."),A<=p&&k.push(S),S="",A++):A<=p&&_===h.length-1&&k.push(S);T=f}else k.push(h);if(k.forEach((function(t,r){e.ctx.fillText(t,e.toPx(i),e.toPx(o+(v||n)*r))})),this.ctx.restore(),"none"!==u){var z=o;if("line-through"===u){z=o;switch(s){case"top":z+=n/2+5;break;case"middle":break;case"bottom":z-=n/2+5;break;default:z-=n/2-5}}this.ctx.save(),this.ctx.moveTo(this.toPx(i),this.toPx(z)),this.ctx.lineTo(this.toPx(i)+this.toPx(T),this.toPx(z)),this.ctx.strokeStyle=r,this.ctx.stroke(),this.ctx.restore()}return T}},r={_downloadImageAndInfo:function(t,e){var i=this;return new Promise((function(o,n){var r=t.x,s=t.y,a=t.url,c=t.zIndex,h=a;i._downImage(h,e).then((function(t){return i._getImageInfo(t,e)})).then((function(n){var a,h,x=n.imgPath,d=n.imgInfo;console.log();var l=t.borderRadius||0,u=t.width,f=t.height,g=i.toRpx(d.width),p=i.toRpx(d.height);g/p<=u/f?(a=0,h=(p-g/u*f)/2):(h=0,a=(g-p/f*u)/2),i.drawArr||(i.drawArr=[]),i.drawArr.push({type:"image",borderRadius:l,borderWidth:t.borderWidth,borderColor:t.borderColor,zIndex:void 0!==c?c:e,imgPath:x,sx:a,sy:h,sw:g-2*a,sh:p-2*h,x:r,y:s,w:u,h:f}),o()})).catch((function(t){return n(t)}))}))},_downImage:function(t){var e=this;return new Promise((function(i,o){(t.includes("tmp")||t.includes("temp")||t.includes("wxfile"))&&i(t),/^http/.test(t)&&!new RegExp(wx.env.USER_DATA_PATH).test(t)?wx.downloadFile({url:e._mapHttpToHttps(t),success:function(t){200===t.statusCode?i(t.tempFilePath):o(t.errMsg)},fail:function(t){o(t)}}):i(t)}))},_getImageInfo:function(t,e){return new Promise((function(i,o){wx.getImageInfo({src:t,success:function(o){i({imgPath:t,imgInfo:o,index:e})},fail:function(t){o(t)}})}))},toPx:function(t,e){return e?parseInt(t*this.factor*this.pixelRatio):t*this.factor*this.pixelRatio},toRpx:function(t,e){return e?parseInt(t/(this.factor*this.pixelRatio)):t/(this.factor*this.pixelRatio)},_mapHttpToHttps:function(t){if(t.indexOf(":")<0)return t;var e=t.split(":");return 2===e.length&&"http"===e[0]?(e[0]="https","".concat(e[0],":").concat(e[1])):t}};Component({properties:{},created:function(){var t=wx.getSystemInfoSync(),e=t.pixelRatio,i=t.screenWidth;this.factor=i/750,this.pixelRatio=e},methods:Object.assign({getHeight:function(t){var e=function(t){var e=t.lineHeight||t.fontSize;return"top"===t.baseLine?e:"middle"===t.baseLine?e/2:0},o=[];(t.blocks||[]).forEach((function(t){o.push(t.y+t.height)})),(t.texts||[]).forEach((function(t){var n;"[object Array]"===Object.prototype.toString.call(t.text)?t.text.forEach((function(r){n=e(i(i({},r),{},{baseLine:t.baseLine})),o.push(t.y+n)})):(n=e(t),o.push(t.y+n))})),(t.images||[]).forEach((function(t){o.push(t.y+t.height)})),(t.lines||[]).forEach((function(t){o.push(t.startY),o.push(t.endY)}));var n=o.sort((function(t,e){return e-t})),r=0;return n.length>0&&(r=n[0]),t.height<r||!t.height?r:t.height},create:function(i){var o=this;return e(t().mark((function n(){var r;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.initCtx();case 2:o.pixelRatio=i.pixelRatio||o.pixelRatio,r=o.getHeight(i),o.initCanvas(i.width,r,i.debug).then(e(t().mark((function e(){var n,s,a,c,h,x,d,l,u,f;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.node.width=o.data.pxWidth*o.pixelRatio,o.node.height=o.data.pxHeight*o.pixelRatio,o.ctx.scale(o.pixelRatio,o.pixelRatio),i.backgroundColor&&(o.ctx.save(),o.ctx.fillStyle=i.backgroundColor,o.ctx.fillRect(0,0,o.toPx(i.width),o.toPx(r)),o.ctx.restore()),n=i.texts,s=void 0===n?[]:n,a=i.blocks,c=void 0===a?[]:a,h=i.lines,x=void 0===h?[]:h,o.drawArr||(o.drawArr=[]),(d=o.drawArr.concat(s.map((function(t){return t.type="text",t.zIndex=t.zIndex||0,t}))).concat(c.map((function(t){return t.type="block",t.zIndex=t.zIndex||0,t}))).concat(x.map((function(t){return t.type="line",t.zIndex=t.zIndex||0,t})))).sort((function(t,e){return t.zIndex-e.zIndex})),l=0,u=d.length;case 9:if(!(l<u)){t.next=20;break}if("image"!==(f=d[l]).type){t.next=16;break}return t.next=14,o.drawImage(f);case 14:t.next=17;break;case 16:"text"===f.type?o.drawText(f):"block"===f.type?o.drawBlock(f):"line"===f.type&&o.drawLine(f);case 17:l++,t.next=9;break;case 20:wx.canvasToTempFilePath({canvas:o.node,success:function(t){o.triggerEvent("success",t.tempFilePath)},fail:function(t){o.triggerEvent("fail",t)}},o);case 21:case"end":return t.stop()}}),e)})))).catch((function(t){wx.showToast({icon:"none",title:t.errMsg||"生成失败"}),console.error(t)}));case 5:case"end":return n.stop()}}),n)})))()},initCtx:function(){var t=this;return new Promise((function(e){wx.createSelectorQuery().in(t).select("#canvasid").fields({node:!0}).exec((function(i){t.node=i[0].node,t.ctx=t.node.getContext("2d"),e()}))}))}},o,n,r)});