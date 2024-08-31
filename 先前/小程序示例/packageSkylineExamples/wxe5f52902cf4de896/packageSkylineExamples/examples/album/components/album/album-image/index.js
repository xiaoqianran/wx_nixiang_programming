var e,a=(e=require("../../../utils/event-bus"))&&e.__esModule?e:{default:e},t=require("../../../utils/worklet");var i=0,s=0;Component({properties:{image:{type:Object,value:{}},src:{type:String,value:""},width:{type:Number,value:0},height:{type:Number,value:0}},observers:{"width, height":function(){this.renderImage()}},lifetimes:{created:function(){var e=(0,t.getShared)(this.renderer);this.sharedValues=[e(0),e(0),e(0),e(0),e(0),e(0),e(0),e(!1)]},attached:function(){var e,i,s=this,u=this.getPageId(),r="".concat(u,"-").concat(this.data.image.id),o=null!==(e=this.sharedValues)&&void 0!==e?e:[];this.uniqueId=r,(0,t.getRunOnUI)(this.renderer)(((i=function(){globalThis.temp["".concat(r,"CustomRouteBack")]||(globalThis.temp["".concat(r,"CustomRouteBack")]=function(e){if(o[7].value){var a=o[4].value,t=o[5].value,i=e.scale;o[2].value=a*i,o[3].value=t*i}},globalThis.eventBus.on("".concat(u,"CustomRouteBack"),globalThis.temp["".concat(r,"CustomRouteBack")]))})._closure={uniqueId:r,sharedValues:o,IN_PREVIEW:7,IMAGE_TARGET_WIDTH:4,IMAGE_TARGET_HEIGHT:5,IMAGE_WIDTH:2,IMAGE_HEIGHT:3,pageId:u},i.asString='function _f(){const{uniqueId,sharedValues,IN_PREVIEW,IMAGE_TARGET_WIDTH,IMAGE_TARGET_HEIGHT,IMAGE_WIDTH,IMAGE_HEIGHT,pageId}=jsThis._closure;{if(!globalThis.temp["".concat(uniqueId,"CustomRouteBack")]){globalThis.temp["".concat(uniqueId,"CustomRouteBack")]=function(args){if(!sharedValues[IN_PREVIEW].value)return;var targetImageWidth=sharedValues[IMAGE_TARGET_WIDTH].value;var targetImageHeight=sharedValues[IMAGE_TARGET_HEIGHT].value;var scale=args.scale;sharedValues[IMAGE_WIDTH].value=targetImageWidth*scale;sharedValues[IMAGE_HEIGHT].value=targetImageHeight*scale;};globalThis.eventBus.on("".concat(pageId,"CustomRouteBack"),globalThis.temp["".concat(uniqueId,"CustomRouteBack")]);}}}',i.__workletHash=0xd5316d3a22a,i.__location="packageSkylineExamples/examples/album/components/album/album-image/index.js (64:32)",i.__worklet=!0,i))(),this.applyAnimatedStyle(".img",function(){var e=function(){return{width:"".concat(o[2].value,"px"),height:"".concat(o[3].value,"px")}};return e._closure={sharedValues:o,IMAGE_WIDTH:2,IMAGE_HEIGHT:3},e.asString='function _f(){const{sharedValues,IMAGE_WIDTH,IMAGE_HEIGHT}=jsThis._closure;{return{width:"".concat(sharedValues[IMAGE_WIDTH].value,"px"),height:"".concat(sharedValues[IMAGE_HEIGHT].value,"px")};}}',e.__workletHash=3951488010356,e.__location="packageSkylineExamples/examples/album/components/album/album-image/index.js (81:38)",e.__worklet=!0,e}());var l=function(){o[2].value=o[0].value,o[3].value=o[1].value,o[7].value=!1};this._onPreviewerChange=function(e){e.id===s.data.image.id?o[7].value=!0:l()},a.default.on("".concat(u,"PreviewerChange"),this._onPreviewerChange),this._onPreviewerHide=function(){setTimeout(l,500)},a.default.on("".concat(u,"PreviewerDestroy"),this._onPreviewerHide)},detached:function(){var e,i=this.getPageId(),s=this.uniqueId;(0,t.getRunOnUI)(this.renderer)(((e=function(){globalThis.temp["".concat(s,"CustomRouteBack")]&&(globalThis.eventBus.off("".concat(i,"CustomRouteBack"),globalThis.temp["".concat(s,"CustomRouteBack")]),delete globalThis.temp["".concat(s,"CustomRouteBack")])})._closure={uniqueId:s,pageId:i},e.asString='function _f(){const{uniqueId,pageId}=jsThis._closure;{if(globalThis.temp["".concat(uniqueId,"CustomRouteBack")]){globalThis.eventBus.off("".concat(pageId,"CustomRouteBack"),globalThis.temp["".concat(uniqueId,"CustomRouteBack")]);delete globalThis.temp["".concat(uniqueId,"CustomRouteBack")];}}}',e.__workletHash=3999281897108,e.__location="packageSkylineExamples/examples/album/components/album/album-image/index.js (118:32)",e.__worklet=!0,e))(),a.default.off("".concat(i,"PreviewerChange"),this._onPreviewerChange),a.default.off("".concat(i,"PreviewerDestroy"),this._onPreviewerHide)}},methods:{onFrame:function(e){var a;console.log("worklet onFrame",e);var t=e.current,i=null!==(a=this.sharedValues)&&void 0!==a?a:[],s=t.width,u=t.height,r=e.progress,o=i[6].value,l=1===e.direction,n=s,h=u;if(o){var c=s/u;c>o?h=s/o:c<=o&&(n=u*o);var I=i[0].value,g=i[1].value,d=i[4].value,v=i[5].value;I&&g&&d&&v&&(l?(n=d-(d-I)*r,h=v-(v-g)*r):(n=I+(d-I)*r,h=g+(v-g)*r))}i[2].value=n,i[3].value=h},_onFrame_worklet_factory_:function(){var e,a=this;return(e=function(e){var t;console.log("worklet onFrame",e);var i=e.current,s=null!==(t=a.sharedValues)&&void 0!==t?t:[],u=i.width,r=i.height,o=e.progress,l=s[6].value,n=1===e.direction,h=u,c=r;if(l){var I=u/r;I>l?c=u/l:I<=l&&(h=r*l);var g=s[0].value,d=s[1].value,v=s[4].value,_=s[5].value;g&&d&&v&&_&&(n?(h=v-(v-g)*o,c=_-(_-d)*o):(h=g+(v-g)*o,c=d+(_-d)*o))}s[2].value=h,s[3].value=c})._closure={_this2:{sharedValues:a.sharedValues},IMAGE_RATIO:6,IMAGE_INIT_WIDTH:0,IMAGE_INIT_HEIGHT:1,IMAGE_TARGET_WIDTH:4,IMAGE_TARGET_HEIGHT:5,IMAGE_WIDTH:2,IMAGE_HEIGHT:3},e.asString="function _f(evt){const{_this2,IMAGE_RATIO,IMAGE_INIT_WIDTH,IMAGE_INIT_HEIGHT,IMAGE_TARGET_WIDTH,IMAGE_TARGET_HEIGHT,IMAGE_WIDTH,IMAGE_HEIGHT}=jsThis._closure;{var _this$sharedValues2;console.log('worklet onFrame',evt);var rect=evt.current;var sharedValues=(_this$sharedValues2=_this2.sharedValues)!==null&&_this$sharedValues2!==void 0?_this$sharedValues2:[];var cntWidth=rect.width;var cntHeight=rect.height;var progress=evt.progress;var imageRatio=sharedValues[IMAGE_RATIO].value;var isPop=evt.direction===1;var width=cntWidth;var height=cntHeight;if(imageRatio){var cntRatio=cntWidth/cntHeight;if(cntRatio>imageRatio)height=cntWidth/imageRatio;else if(cntRatio<=imageRatio)width=cntHeight*imageRatio;var initImageWidth=sharedValues[IMAGE_INIT_WIDTH].value;var initImageHeight=sharedValues[IMAGE_INIT_HEIGHT].value;var targetImageWidth=sharedValues[IMAGE_TARGET_WIDTH].value;var targetImageHeight=sharedValues[IMAGE_TARGET_HEIGHT].value;if(initImageWidth&&initImageHeight&&targetImageWidth&&targetImageHeight){if(isPop){width=targetImageWidth-(targetImageWidth-initImageWidth)*progress;height=targetImageHeight-(targetImageHeight-initImageHeight)*progress;}else{width=initImageWidth+(targetImageWidth-initImageWidth)*progress;height=initImageHeight+(targetImageHeight-initImageHeight)*progress;}}}sharedValues[IMAGE_WIDTH].value=width;sharedValues[IMAGE_HEIGHT].value=height;}}",e.__workletHash=1570348417256,e.__location="packageSkylineExamples/examples/album/components/album/album-image/index.js",e.__worklet=!0,e},onImageLoad:function(e){var a,t=e.detail,i=t.width,s=t.height,u=null!==(a=this.sharedValues)&&void 0!==a?a:[],r=i/s;this.imageRatio=r,u[6].value=r,this.renderImage()},renderImage:function(){var e,a=null!==(e=this.sharedValues)&&void 0!==e?e:[],t=this.data,u=t.width,r=t.height,o=this.imageRatio;if(!i||!s){var l=wx.getSystemInfoSync();i=l.screenWidth,s=l.screenHeight}if(u&&r&&o){var n=u,h=r,c=i,I=s,g=u/r,d=i/s;g>o?h=u/o:g<o&&(n=r*o),d>o?c=I*o:d<o&&(I=c/o),a[0].value=n,a[1].value=h,a[2].value=n,a[3].value=h,a[4].value=c,a[5].value=I}}}});