var e=getApp();Component({properties:{active:{type:String,value:"default value"}},data:{imgUrl:e.globalData.imgUrl,hongdian3:!1,hongdian4:!1,btnList:[{link:"/pages/home/home/home",des:"首页"},{link:"/pages/index/index",des:"资讯"},{link:"/pages/vsrecord/index",des:"战绩"}]},ready:function(){},methods:{dhJump:function(e){var t=parseInt(e.currentTarget.dataset.index);this.data.active!=t&&(0==t&&wx.reportEvent("vsrecord_tab_click",{}),e.currentTarget.dataset.notshow?wx.showToast({title:"暂未开放, 敬请期待",icon:"none",duration:2e3}):wx.redirectTo({url:this.data.btnList[t].link}))}}});