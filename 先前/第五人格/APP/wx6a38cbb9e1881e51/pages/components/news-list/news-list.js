var e=require("../../../@babel/runtime/helpers/objectWithoutProperties"),t=require("../../../@babel/runtime/helpers/defineProperty"),i=require("../../../@babel/runtime/helpers/objectSpread2"),a=["like","isOwnLike"],n=getApp();Component({lifetimes:{attached:function(){wx.removeStorage({key:"index_daily_newComment"})}},properties:{newsList:{type:Array,value:[]},wxToken:{type:String,value:""},sourceNewList:{type:Array,value:[]},addIndex:{type:Number,value:-1},minusIndex:{type:Number,value:-1},comId:{type:String,value:""}},data:{imgUrl:n.globalData.imgUrl,apiUrl:n.globalData.apiUrl,videoStaus:!1,oldPlayId:"",oldPlayIndex:-1,initVideoSourceIndex:-1,loadingVideo:{},currentVideoTime:0},methods:{handleJump:function(e){var t,i=e.currentTarget.dataset,a=i.id,d=i.title,r=i.videoUrl,o=i.commentid;(wx.reportEvent("news_card_click",{click:"被点击",news_name:d}),r&&-1!==r.search("bilibili"))?(r=null===(t=r)||void 0===t?void 0:t.replace("//www.","//m."),wx.request({url:this.data.apiUrl+"/w/epro/article/detail/get",data:{id:a},header:{wxToken:this.data.wxToken},success:function(e){wx.navigateTo({url:"/pages/out/out?url="+r.split("?")[0]})}})):(wx.setStorageSync("newsList_id",a),wx.navigateTo({url:"/pages/details/index?id="+a+"&commentId="+o}));n.eventTracking("6",a)},handleVideoClick:function(e){},handleImageClick:function(e){var a=e.currentTarget.dataset,n=a.index,d=a.item;wx.reportEvent("zx_video_play",{}),wx.reportEvent("news_details_pvuv",{click:"被点击",news_name:d.title});var r=this.data,o=r.oldPlayId,s=r.newsList,c=r.oldPlayIndex,l=r.initVideoSourceIndex,u=r.currentVideoTime,w=r.sourceNewList,m=r.addIndex,h=r.minusIndex;(this.triggerEvent("oldPlayPause",this.data.comId),o&&d.id!==o)&&wx.createVideoContext("video".concat(o),this).pause();if(-1!==m||-1!==h){var x=s.find((function(e){return e.show}));if(x){var g=x.id;wx.createVideoContext("video".concat(g),this).pause()}}w.length&&(s=w),s[c]=i(i({},s[c]),{},{show:!1,currentVideoMill:parseInt(1e3*u)||1,currentVideoTime:u}),s[n]=i(i({},s[n]),{},{show:!0}),-1!==l&&(s[l].show=!1),this.triggerEvent("CustomListChange",s);var p="newsList["+n+"].clickNum";this.setData(t({initVideoSourceIndex:n,oldPlayId:d.id,oldPlayIndex:n},p,d.clickNum+1)),wx.request({url:"".concat(this.data.apiUrl)+"/w/epro/article/click",data:{articleId:d.id,wxToken:this.data.wxToken},header:{wxToken:this.data.wxToken},success:function(e){}})},pauseAll:function(){var e=this;setTimeout((function(){var t=e.data,a=t.oldPlayId,n=t.newsList,d=t.oldPlayIndex,r=t.currentVideoTime;t.initVideoSourceIndex;wx.createVideoContext("video".concat(a),e).pause(),n[d]=i(i({},n[d]),{},{show:!1,currentVideoMill:parseInt(1e3*r)||1,currentVideoTime:r}),e.data.oldPlayIndex=-1,e.data.oldPlayId="",e.data.initVideoSourceIndex=-1,e.triggerEvent("CustomListChange",n)}),1e3)},handleVideoPlay:function(e){},handleVideoWaiting:function(e){this.initVideoSourceIndex=-1},handleTimeupdate:function(e){this.setData({currentVideoTime:e.detail.currentTime})},handleVideoLike:function(t){var n=this,d=t.target.dataset,r=d.id,o=(d.cid,d.index);wx.reportEvent("zx_list_commit",{}),wx.request({url:"".concat(this.data.apiUrl)+"/w/epro/article/like",data:{id:r},header:{wxToken:this.data.wxToken},success:function(t){var d=t.data.data,r=n.data.newsList[o],s=r.like,c=(r.isOwnLike,e(r,a));n.data.newsList[o]=i(i({},c),{},{isOwnLike:d,like:s+d}),n.triggerEvent("CustomListChange",n.data.newsList)}})}},pageLifetimes:{show:function(){var e=this,t=wx.getStorageSync("index_daily_newComment"),i=this.data.sourceNewList.length?this.data.sourceNewList:this.data.newsList;t&&(Object.keys(t).forEach((function(e){var a=i.findIndex((function(t){return t.id===e}));-1!==a&&(i[a].commentVO=t[e])})),this.triggerEvent("CustomListChange",i));var a=wx.getStorageSync("newsList_id");if(a){var n=this.data.newsList.findIndex((function(e){return e.id===a}));if(-1!==!n){var d=this.data.newsList[n];wx.removeStorage({key:"newsList_id"});var r=0,o=0,s=function(){Object.assign(d,{commentNum:r,clickNum:o}),e.data.newsList[n]=d,e.triggerEvent("CustomListChange",e.data.newsList)},c=0;console.log(d,n),wx.request({url:this.data.apiUrl+"/w/epro/comment/getCommentNumber",data:{commentType:1,typeId:d.id},method:"POST",header:{wxToken:this.data.wxToken},success:function(e){200===e.data.code&&(c++,r=e.data.data,2===c&&s())}}),wx.request({url:this.data.apiUrl+"/w/epro/article/getClickNum"+"?articleId=".concat(d.id),header:{wxToken:this.data.wxToken},success:function(e){200===e.data.code&&(c++,o=e.data.data.clickCount,2===c&&s())}})}}}}});