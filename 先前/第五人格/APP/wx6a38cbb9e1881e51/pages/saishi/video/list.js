var a=getApp();Page({data:{imgUrl:a.globalData.imgUrl,apiUrl:a.globalData.apiUrl,wxToken:a.globalData.wxToken,allComData:[]},onLoad:function(t){var o=this;this.setData({wxToken:a.globalData.wxToken}),this.data.wxToken?this.getData():a.initOkCallback=function(t){o.setData({wxToken:a.globalData.wxToken}),o.getData()}},getData:function(){this.getAllCom()},getAllCom:function(){var a=this;wx.request({url:this.data.apiUrl+"/w/epro/event/",data:{wxToken:a.data.wxToken},success:function(t){console.log("getAllCom:",t.data.data),a.setData({allComData:t.data.data})}})},handlerGobackClick:function(t){getCurrentPages().length>=2?wx.navigateBack({delta:t}):wx.redirectTo({url:a.globalData.pageIndex})},handlerGohomeClick:function(){wx.redirectTo({url:a.globalData.pageIndex})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},goVideoList:function(a){var t=a.currentTarget.dataset.name;wx.navigateTo({url:"/pages/saishi/video/video?comId="+t})}});