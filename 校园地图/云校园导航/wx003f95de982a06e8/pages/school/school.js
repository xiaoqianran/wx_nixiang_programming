var o=require("../../utils/school"),n=require("../../utils/media");Page({data:{allWords:o.shool_guide,green_arrow:n.green_arrow},onLoad:function(o){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},jump:function(o){var n=o.currentTarget.dataset.id;wx.navigateTo({url:"/pages/school/word/word?id="+n})}});