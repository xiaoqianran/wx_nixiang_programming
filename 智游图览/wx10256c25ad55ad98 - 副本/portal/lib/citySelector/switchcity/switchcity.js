var t,e,a=require("../../../../@babel/runtime/helpers/regeneratorRuntime"),i=require("../../../../@babel/runtime/helpers/asyncToGenerator"),o=require("../config.js"),n=require("../../../helper/cloud_helper.js"),c=getApp(),s=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"];Page({data:{searchLetter:[],showLetter:"",winHeight:0,cityList:[],isShowLetter:!1,scrollTop:0,scrollTopId:"",city:"未知",currentCityCode:"",hotCityList:[],inputName:"",completeList:[],county:"",condition:!1,validCityList:[],validCityCode:new Map,hotCityCode:new Map},onLoad:(e=i(a().mark((function t(e){var i,o,n,c,r,l,u,d,h,y,f;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this,o=e.back_url,n=e.city,c=e.code,t.next=6,this._loadCityList();case 6:r=[],s.map((function(t){var e={};e.initial=t,e.cityInfo=i.data.validCityList.filter((function(e){return e.initial==t})),0!=e.cityInfo.length&&r.push(e)})),l=[],u=[],r.map((function(t,e){l.push(t.initial);for(var a=0;a<t.cityInfo.length;++a)i.data.hotCityCode.has(t.cityInfo[a].code)&&u.push(t.cityInfo[a])})),d=wx.getSystemInfoSync(),h=d.windowHeight,y=h/l.length,f=[],l.map((function(t,e){var a={};a.name=t,a.tHeight=e*y,a.bHeight=(e+1)*y,f.push(a)})),this.setData({winHeight:h,itemH:y,searchLetter:f,cityList:r,back_url:o,city:n,currentCityCode:c,hotCityList:u});case 17:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)}),onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},clickLetter:function(t){console.log(t.currentTarget.dataset.letter);var e=t.currentTarget.dataset.letter;this.setData({toastShowLetter:e,isShowLetter:!0,scrollTopId:e});var a=this;setTimeout((function(){a.setData({isShowLetter:!1})}),500)},reGetLocation:function(){c.globalData.defaultCity=this.data.city,c.globalData.defaultCounty=this.data.county,console.log(c.globalData.defaultCity),wx.switchTab({url:this.data.back_url})},bindCity:function(t){this.setData({city:t.currentTarget.dataset.city,currentCityCode:t.currentTarget.dataset.code,scrollTop:0,completeList:[]});var e=this.data.validCityCode.get(t.currentTarget.dataset.code);c.globalData.changeRootScenic={sid:e.related_scenic,default_index:!0,scenic_index:!0,samap:!0,about_service:!0,my_index:!0},wx.switchTab({url:"/portal/projects/TRIP1/pages/default/index/default_index?rootScenicId=".concat(e.related_scenic,"&ntype=change")})},bindCounty:function(t){console.log(t),this.setData({county:t.currentTarget.dataset.city});var e=this.data.city+this.data.county;console.log(e),wx.request({url:"https://apis.map.qq.com/ws/geocoder/v1/?address=".concat(e,"&key=").concat(o.key),success:function(t){console.log("请求地址解析成功"+"https://apis.map.qq.com/ws/geocoder/v1/?address=".concat(e,"&key=").concat(o.key)),console.log(t);var a=getCurrentPages();a[a.length-2].setData({address:t.data.result.address_components}),wx.navigateBack()},fail:function(t){console.log("请求地址解析成功，请重试")}})},hotCity:function(){console.log("hotCity"),this.setData({scrollTop:0})},bindScroll:function(t){},selectCounty:function(){console.log("正在定位区县");var t=this.data.currentCityCode,e=this;wx.request({url:"https://apis.map.qq.com/ws/district/v1/getchildren?&id=".concat(t,"&key=").concat(o.key),success:function(a){e.setData({countyList:a.data.result[0]}),console.log("请求区县成功"+"https://apis.map.qq.com/ws/district/v1/getchildren?&id=".concat(t,"&key=").concat(o.key))},fail:function(){console.log("请求区县失败，请重试")}})},getLocation:function(){console.log("正在定位城市"),this.setData({county:""});var t=this;wx.getLocation({type:"wgs84",success:function(e){var a=e.latitude,i=e.longitude;wx.request({url:"https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(a,",").concat(i,"&key=").concat(o.key),success:function(e){console.log(e),console.log(e.data.result.ad_info.city+e.data.result.ad_info.adcode),t.setData({city:e.data.result.ad_info.city,currentCityCode:e.data.result.ad_info.adcode,county:e.data.result.ad_info.district}),t.selectCounty()}})}})},bindBlur:function(t){this.setData({inputName:""})},bindKeyInput:function(t){this.setData({inputName:t.detail.value}),this.auto()},auto:function(){var t=this.data.inputName.trim().toLowerCase(),e=t.length,a=this.data.validCityList,i=[],o=a.filter((function(a){var i=a.short.slice(0,e).toLowerCase();return i&&i==t})),n=a.filter((function(a){if(a.shorter){var i=a.shorter.slice(0,e).toLowerCase();return i&&i==t}})),c=a.filter((function(a){var i=a.city.slice(0,e);return i&&i==t}));if(o[0])o.map((function(t){var e={};e.city=t.city,e.code=t.code,i.push(e)})),this.setData({completeList:i});else if(n[0])n.map((function(t){var e={};e.city=t.city,e.code=t.code,i.push(e)})),this.setData({completeList:i});else{if(!c[0])return;c.map((function(t){var e={};e.city=t.city,e.code=t.code,i.push(e)})),this.setData({completeList:i})}},_loadCityList:(t=i(a().mark((function t(){var e,i,o,s,r,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,i={title:"bar"},o=c.indexData.sid,t.next=5,n.callCloudData("city/list",{sid:o},i);case 5:for(s=t.sent,e.data.validCityCode=new Map,e.data.hotCityCode=new Map,e.data.validCityList=s,r=0;r<s.length;++r)l=s[r],e.data.validCityCode.set(l.code,l),l.hot&&e.data.hotCityCode.set(l.code,l);case 10:case"end":return t.stop()}}),t,this)}))),function(){return t.apply(this,arguments)})});