Component({options:{multipleSlots:!0},properties:{title:{type:String,value:""},background:{type:String,value:""},color:{type:String,value:""},back:{type:Boolean,value:!0},loading:{type:Boolean,value:!1},delta:{type:Number,value:1},sideWidth:{type:Number,value:0}},attached:function(){var t=this,e=!!wx.getMenuButtonBoundingClientRect,a=wx.getMenuButtonBoundingClientRect?wx.getMenuButtonBoundingClientRect():null;wx.getSystemInfo({success:function(n){var i=!!(n.system.toLowerCase().search("ios")+1),o=e?n.windowWidth-a.left:0;t.setData({ios:i,sideWidth:t.data.sideWidth||o,statusBarHeight:n.statusBarHeight})}})},methods:{back:function(){var t=this.data;t.delta&&wx.navigateBack({delta:t.delta}),this.triggerEvent("back",{delta:t.delta},{})}}});