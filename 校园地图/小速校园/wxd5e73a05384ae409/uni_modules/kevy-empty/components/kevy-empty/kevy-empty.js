var e=require("../../../../common/vendor.js"),t={address:"无地址哦~",car:"购物车空空如也~",comment:"无评论哦~",coupon:"无优惠券哦~",data:"无数据哦~",equipment:"无设备哦~",error:"出错了~",goods:"无商品哦~",history:"无历史记录哦~",list:"无列表哦~",loading:"努力加载中...",maintain:"正在维护中...",money:"无余额哦~",network:"无网络哦~",news:"无新闻哦~",notice:"无通知哦~",order:"无订单哦~",permission:"无权限哦~",points:"无积分哦~",search:"无搜索结果哦~",task:"无任务哦~",404:"页面走丢了~",500:"服务器出错了~"},i={name:"KevyEmpty",props:{type:{type:String,default:"data"},image:{type:String,default:void 0},text:{type:String,default:""},textColor:{type:String,default:"#969799"},textSize:{type:[String,Number],default:"28"},imageSize:{type:[String,Number],default:"320"},show:{type:Boolean,default:!1},fullScreen:{type:[Boolean,String],default:!1}},data:function(){return{}},computed:{icon:function(){return this.image?this.image:"/uni_modules/kevy-empty/static/empty/"+this.type+".png"},description:function(){return this.text?this.text:t[this.type]}},methods:{}},n=e._export_sfc(i,[["render",function(t,i,n,r,o,a){return e.e({a:n.show},n.show?e.e({b:a.icon,c:n.imageSize+"rpx",d:n.imageSize+"rpx",e:a.description},a.description?{f:e.t(a.description),g:n.textColor,h:n.textSize+"rpx"}:{}):{},{i:e.n({"full-screen":n.fullScreen})})}],["__scopeId","data-v-7911a894"]]);wx.createComponent(n);