Page({data:{theme:"light"},onShareAppMessage:function(){return{title:"icon",path:"packageComponent/pages/content/icon/icon"}},onUnload:function(){wx.offThemeChange&&wx.offThemeChange()},onLoad:function(){var e=this;this.setData({theme:wx.getSystemInfoSync().theme||"light"}),wx.onThemeChange&&wx.onThemeChange((function(t){var n=t.theme;e.setData({theme:n})}))}});