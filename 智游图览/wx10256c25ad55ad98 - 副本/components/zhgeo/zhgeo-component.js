var e=require("./config"),t=require("./utils/mina-touch"),n=require("./zhgeo.dom"),o=require("./auth"),a=require("./leafletwx");require("./plugins/loadp"),require("./zhgeo.dom"),Component({options:{multipleSlots:!0},properties:{showLocation:{type:Boolean,value:!0},showCompass:{type:Boolean,value:!0},showZoom:{type:Boolean,value:!0},compassRotateAngle:{type:Number,value:0},markerBorderColor:{type:String,value:"#C1FFE4"},mapWidth:{type:Number,value:e.zhgeoCfg.size.width},mapHeight:{type:Number,value:e.zhgeoCfg.size.height},mapTop:{type:Number,value:0},mapLeft:{type:Number,value:0},customPopup:{type:Boolean,value:!1}},data:{canvasImages:{},markers:{},popups:{},tileLayers:{},mapPaneTop:0,mapPaneLeft:0,controlCorners:{topleft:[],topright:[],bottomleft:[],bottomright:[]},controlZoom:{zoomIn:{disabled:!1,addEventListener:function(e,t,o){(0,n.addEventListener)(this,e,t,o)},removeEventListener:function(e,t,o){(0,n.removeEventListener)(this,e,t,o)}},zoomOut:{disabled:!1,addEventListener:function(e,t,o){(0,n.addEventListener)(this,e,t,o)},removeEventListener:function(e,t,o){(0,n.removeEventListener)(this,e,t,o)}}},defaultIcons:e.defaultIcons,zoomInState:!0,zoomOutState:!0,imageLayers:{},osmb:null,authStatus:2},methods:{processMarkerEvent:function(e){return(0,n.processMarkerEvent)(e)},processImageOverlayEvent:function(e){return(0,n.processImageOverlayEvent)(e)},processEvent:function(e){if(0!=this.data.authStatus&&((0,n.cvtEventType)(e),null!=e.type&&null!=(e=(0,n.filterTouchMoveEvent)(e))))for(var t=null==this.overlayCanvas?[this]:[this,this.overlayCanvas],o=0;o<t.length;++o){var a,r,i=t[o];if(null!==(r=(a=i).eventHeaders)&&void 0!==r||(a.eventHeaders={}),null==i.eventHeaders[e.type])return;for(var s=0;s<i.eventHeaders[e.type].length;++s)i.eventHeaders[e.type][s].func(e)}},addEventListener:function(e,t,o){(0,n.addEventListener)(this,e,t,o)},removeEventListener:function(e,t,o){(0,n.removeEventListener)(this,e,t,o)},processZoomInEvent:function(e){var t=this.data.controlZoom.zoomIn;if((0,n.cvtEventType)(e),null!=e.type&&null!=t.eventHeaders[e.type])for(var o=0;o<t.eventHeaders[e.type].length;++o)t.eventHeaders[e.type][o].func(e)},processZoomOutEvent:function(e){var t=this.data.controlZoom.zoomOut;if((0,n.cvtEventType)(e),null!=e.type&&null!=t.eventHeaders[e.type])for(var o=0;o<t.eventHeaders[e.type].length;++o)t.eventHeaders[e.type][o].func(e)},_showLocation:function(){null!=this.showLocation&&this.showLocation()},initLeafletMap:function(e){var t,o,r=this;null!==(o=(t=wx).leaflet)&&void 0!==o||(t.leaflet={}),r._showingTileLayerIndex=0;var i=new n.WxDomUtils;i.initContainer(r),r.wxDomUtils=i;var s=r.data.mapWidth,u=r.data.mapHeight;r.overlayCanvas=wx.createOffscreenCanvas({type:"2d",width:s,height:u}),null==r.overlayCanvas?console.error("current mode/platform do not support canvas debug"):(r.overlayCanvas.addEventListener=function(e,t,o){(0,n.addEventListener)(r.overlayCanvas,e,t,o)},r.overlayCanvas.removeEventListener=function(e,t,o){(0,n.removeEventListener)(r.overlayCanvas,e,t,o)}),null!=e&&e(a)},checkAuth:function(){var e=this;(0,o.getWxappidState)((function(t){var n=0;if(null==t||0==t.state)n=0;else if(1==t.state){n=new Date(t.exp_time)>=new Date?1:0}else if(2==t.state){n=new Date(t.exp_time)>=new Date?2:1}else n=2;console.log("authStatus: ".concat(n)),e.setData({authStatus:n})}),(function(t){e.setData({authStatus:2})}))}},lifetimes:{created:function(){var e,t;null!==(t=(e=wx).leaflet)&&void 0!==t||(e.leaflet={})},ready:function(){console.log("ready");var e=this;e.checkAuth(),new t.MinaTouch(this,"minaTouch",{touchStart:function(t){e.processEvent(t)},touchMove:function(t){e.processEvent(t)},touchEnd:function(t){e.processEvent(t)},touchCancel:function(){},multipointStart:function(){},multipointEnd:function(){},tap:function(e){},doubleTap:function(t){e.processEvent(t)},longTap:function(){},singleTap:function(){},rotate:function(e){},pinch:function(t){e.processEvent(t)},pressMove:function(e){},swipe:function(e){}})},detached:function(){}},pageLifetimes:{show:function(){console.log("show page")},hide:function(){console.log("hide page")}},behaviors:["wx://component-export"],export:function(){return this}});