var a=getApp();Page({data:{apiUrl:a.globalData.apiUrl,imgUrl:a.globalData.imgUrl,wxToken:a.globalData.wxToken,params:{pageNo:0,pageSize:10},listData:[],playId:"",queryKey:"",listNull:!1,flag:!1,dailyIcon:""},onLoad:function(t){var e=this;wx.reportEvent("zx_fan",{}),this.setData({wxToken:a.globalData.wxToken}),this.data.wxToken?this.getData():a.initOkCallback=function(t){e.setData({wxToken:a.globalData.wxToken}),e.getData()},wx.setStorageSync("daily-icon",!0),this.setData({dailyIcon:!0})},getData:function(){var a=this,t=this.data.params,e=t.pageNo,i=t.pageSize;this.data.flag||wx.request({url:this.data.apiUrl+"/w/epro/article/catalog_page",data:{pageNo:e+1,pageSize:i,catalogId:"eb3472fbaed1427ab664bfbd783b5434"},header:{wxToken:this.data.wxToken},success:function(t){var n=t.data.data,s=n.items,o=n.total,l=!1;i>o&&(l=!0),a.setData({"params.pageNo":e+1,listData:e?a.data.listData.concat(s):s,flag:l})},complete:function(){a.setData({listNull:!0})}})},handleCustomListChange:function(a){this.setData({listData:a.detail})},topLink:function(a){wx.redirectTo({url:["/pages/index/index","/pages/index/newsgg","/pages/index/newszx","/pages/saishi/persent/persent","/pages/index/daily/index","/pages/index/fan/fan"][a.currentTarget.dataset.index]})},search:function(){wx.navigateTo({url:"../../index/query"}),wx.reportEvent("index_topsearch",{})},onReachBottom:function(){this.getData()}});