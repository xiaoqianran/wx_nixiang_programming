var t=require("../../utils/map"),a=require("../../utils/media"),e=new(require("../../libs/qqmap-wx-jssdk.min"))({key:t.mapKey});Page({data:{windowHeight:400,windowWidth:400,scrollLeft:0,category:1,site:0,location:a.location,use:a.use,restore:a.restore,exchange:a.exchange,map_bottom:a.map_bottom,groundoverlay:t.groundoverlay,boundary:t.boundary,school_boundary:t.school_boundary,default_point:t.default_point,site_data:t.site_data,subKey:t.mapKey,latitude:t.latitude,longitude:t.longitude,scale:t.scale,minscale:t.minscale,showLocation:t.showLocation,enablepoi:t.enablepoi,markers:[],polyline:[],mylocationmarker:"",duration:0,distance:0,steps:[],card:"",start:{name:"",latitude:"",longitude:""},end:{name:"",latitude:"",longitude:""},dialogShow_site:!1,dialogShow_category:!1,dialogShow_road:!1,buttons:[{text:"设为起点"},{text:"设为终点"}],button:[{text:"关闭"}],static:{currentTarget:{id:0}}},onLoad:function(t){this.map(),this.location()},onReady:function(){var t=this;wx.getSystemInfo({success:function(a){t.setData({windowHeight:a.windowHeight,windowWidth:a.windowWidth})}})},onShow:function(){var t=wx.getStorageSync("start"),a=wx.getStorageSync("end");if(console.log("get_start",t),console.log("get_end",a),t){var e={name:t.name,latitude:t.latitude,longitude:t.longitude};this.setData({start:e}),wx.clearStorageSync()}if(a){var i={name:a.name,latitude:a.latitude,longitude:a.longitude};this.setData({end:i}),wx.clearStorageSync()}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onShareTimeline:function(){return{title:"沈工大电子导航"}},map:function(){this.mapCtx=wx.createMapContext("map"),this.mapCtx.addGroundOverlay({id:0,src:this.data.map_bottom,bounds:{southwest:{latitude:this.data.groundoverlay.southwest_latitude,longitude:this.data.groundoverlay.southwest_longitude},northeast:{latitude:this.data.groundoverlay.northeast_latitude,longitude:this.data.groundoverlay.northeast_longitude}},opacity:this.data.groundoverlay.opacity,success:function(t){},fail:function(t){}}),this.mapCtx.initMarkerCluster({enableDefaultStyle:!0,zoomOnClick:!1,gridSize:30,complete:function(t){}})},location:function(){var t=this,a=this.data.school_boundary,e=t.data.default_point;wx.getLocation({type:"gcj02",success:function(i){var o=i.latitude,n=i.longitude;console.log("当前位置坐标",o,n),o>a.south&&o<a.north&&n>a.west&&n<a.east?t.setData({mylocationmarker:{id:0,latitude:o,longitude:n,width:25,height:37,callout:{content:" 当前位置 ",display:"ALWAYS",padding:5,borderRadius:10},joinCluster:!0},start:{name:"当前位置",latitude:o,longitude:n}}):(t.setData({mylocationmarker:{id:0,latitude:e.latitude,longitude:e.longitude,width:25,height:37,callout:{content:" "+e.name+" ",display:"ALWAYS",padding:5,borderRadius:10},joinCluster:!0},start:{name:e.name,latitude:e.latitude,longitude:e.longitude}}),wx.showToast({title:"当前位置不在校区内\n默认位置设为"+t.data.default_point.name,icon:"none",duration:2e3})),t.changeCategory(t.data.static)}})},exchange:function(){if(""!=this.data.end.name){var t=this.data.start,a=this.data.end;t.latitude==a.latitude&&t.longitude==a.longitude?wx.showToast({title:"起点和终点不能相同",icon:"none",duration:2e3}):(this.setData({end:t,start:a}),this.formSubmit())}else wx.showToast({title:"请选择终点！",icon:"none",duration:2e3})},markertap:function(t){if(0==this.data.polyline.length){if(0==t.markerId)var a=this.data.default_point;else a=this.data.site_data[this.data.category].list[t.markerId-1];this.setData({dialogShow_site:!0,card:a})}},clickButton:function(){0==this.data.polyline.length?this.setData({dialogShow_category:!0}):this.setData({dialogShow_road:!0})},mapmarker_close:function(){this.setData({dialogShow_category:!1,dialogShow_road:!1})},lookPhoto:function(t){console.log("点击了图片",t.target.dataset.src);var a=t.target.dataset.src;wx.previewImage({current:a,urls:[a]})},mapmarker_choose:function(t){this.setData({dialogShow_site:!1});var a=t.detail.item.text,e={name:this.data.card.name,latitude:this.data.card.latitude,longitude:this.data.card.longitude};console.log("选择地点",e),"设为起点"==a?this.setData({start:e}):this.setData({end:e})},changeCategory:function(t){console.log("类别",t.currentTarget.id);var a=60*(t.currentTarget.id-1);this.setData({scrollLeft:a,category:t.currentTarget.id,polyline:[]});var e=this.data.site_data[this.data.category].list;console.log("当前类别",e);for(var i=[],o=0;o<e.length;o++){var n={id:o+1,latitude:e[o].latitude,longitude:e[o].longitude,iconPath:"https://3gimg.qq.com/lightmap/xcx/demoCenter/images/Marker3_Activated@3x.png",width:30,height:30,callout:{content:" "+e[o].name+" ",display:"ALWAYS",padding:5,borderRadius:10},joinCluster:!0};i.push(n)}i.push(this.data.mylocationmarker),console.log("当前marker点",i),this.setData({markers:i}),wx.createMapContext("map").includePoints({padding:[60,20,40,40],points:i})},includePoints:function(){var t=Array.from(this.data.polyline[0].points);this.mapCtx=wx.createMapContext("map"),this.mapCtx.includePoints({padding:[100,60,60,60],points:t})},restore:function(){var t={currentTarget:{id:this.data.category}};this.changeCategory(t)},tosearch:function(t){wx.navigateTo({url:"../map/search/search?id="+t.currentTarget.dataset.search_id})},toinstruction:function(){wx.navigateTo({url:"../../pages/map/instruction/instruction"})},formSubmit:function(){var t=this;if(""!=this.data.end.name){var a=this.data.start,i=this.data.end;a.latitude==i.latitude&&a.longitude==i.longitude?wx.showToast({title:"起点和终点不能相同",icon:"none",duration:2e3}):(e.direction({mode:"walking",from:a.latitude+","+a.longitude,to:i.latitude+","+i.longitude,success:function(e){var o=e,n=o.result.routes[0].duration,d=o.result.routes[0].distance;console.log("时间",n,"距离",d);for(var s=o.result.routes[0].polyline,l=[{latitude:a.latitude,longitude:a.longitude}],r=2;r<s.length;r++)s[r]=Number(s[r-2])+Number(s[r])/1e6;for(r=0;r<s.length;r+=2)l.push({latitude:s[r],longitude:s[r+1]});l.push({latitude:i.latitude,longitude:i.longitude}),console.log("路线",l),t.setData({polyline:[{points:l,color:"#58c16c",width:10,borderColor:"#2f693c",borderWidth:2,arrowLine:!0}],steps:o.result.routes[0].steps,distance:d,duration:n}),t.includePoints(),t.moveAlong()},fail:function(t){},complete:function(t){}}),this.setData({markers:[{id:0,latitude:a.latitude,longitude:a.longitude,iconPath:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png",width:25,height:37,callout:{content:" "+a.name+" ",display:"ALWAYS",padding:5,borderRadius:10}},{id:1,latitude:i.latitude,longitude:i.longitude,iconPath:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png",width:25,height:37,callout:{content:" "+i.name+" ",display:"ALWAYS",padding:5,borderRadius:10}},{id:2,latitude:a.latitude,longitude:a.longitude,iconPath:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png",width:30,height:30,callout:{content:" 移动中 ",display:"ALWAYS",padding:5,borderRadius:10}}]}))}else wx.showToast({title:"请选择终点！",icon:"none",duration:2e3})},moveAlong:function(){var t=this,a=this.data.markers,e=this.data.polyline[0].points;this.mapCtx=wx.createMapContext("map"),this.mapCtx.moveAlong({markerId:2,path:e,duration:4e3,autoRotate:!0,success:function(e){a.pop(),t.setData({markers:a})}})}});