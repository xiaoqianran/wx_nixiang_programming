var t=getApp();Page({data:{imageBaseUrl:""},onLoad:function(e){this.setData({imageBaseUrl:t.globalData.imageBaseUrl,imageBaseUrlex:t.globalData.imageBaseUrlex}),console.log("options",e),e.img=decodeURIComponent(e.img),e.tmpl_ids=JSON.parse(e.tmpl_ids),this.setData({options:e})},subscribe:function(){var t=this;this.setData({showPop:!0}),wx.requestSubscribeMessage({tmplIds:this.data.options.tmpl_ids,success:function(e){console.log(e);var a=t.data.options.tmpl_ids.filter((function(t){return"accept"===e[t]}));wx.showToast({title:"订阅成功！",icon:"none",success:function(t){}}),setTimeout((function(){wx.navigateBack()}),1e3),a.length,console.log(a)},fail:function(t){console.log("fail",t),wx.showToast({title:"订阅失败了！",icon:"none",success:function(t){}}),setTimeout((function(){wx.navigateBack()}),1e3)},complete:function(e){t.setData({showPop:!1})}})},onShareAppMessage:function(){return{title:"蛋仔福利大放送！",imageUrl:this.data.imageBaseUrl+"share4.jpg",path:"/pages/load/index"}}});