var e=require("@babel/runtime/helpers/regeneratorRuntime"),t=require("@babel/runtime/helpers/asyncToGenerator");Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var a=require("./common/vendor.js"),n=require("./config/config.js");Math;var o={globalData:{notice:[{title:"欢迎使用小速校园小程序！",context:""}],warning:"啥都没有",avatarUrl:"https://quickdo.top/images/me/logo.png",testMode:!1,isLogin:!1,term:n.config.nowTerm,startDate:n.config.startDate,nowWeek:"N/A",account:"",password:"",className:"班级",college:"学院",enrollmentYear:null,gender:null,major:"专业",name:"姓名",xq:{name:"佛山校区",value:0},schedule:{},campusNotice:[],temp:"^v^",weatherType:"qi-100",token:null},onLaunch:function(){var e=a.index.getStorageSync("config");e?(this.globalData.term=e.nowTerm,this.globalData.startDate=e.startDate,this.getScheduleFromService()):this.updateConfig();var t=a.index.getUpdateManager();t.onCheckForUpdate((function(e){})),t.onUpdateReady((function(e){a.index.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})})),t.onUpdateFailed((function(e){}))},onShow:function(){this.globalData.nowWeek=this.getNowWeek(this.globalData.startDate).week,new Date<new Date(this.globalData.startDate)&&(this.globalData.nowWeek=1),this.checkLogin(),this.updateConfig()},onHide:function(){},methods:{updateConfig:function(){var e=this;a.index.request({url:n.config.getConfigUrl,header:{token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDg4ODQ4NjQsImFjY291bnQiOiIyMTI1MTEwNDIzMyIsImlzcyI6InF1aWNrZG8ifQ.YMf8fjj3A41TBG3riLbrQ8pBwWfqlkuc78jyfF8gnqg"},success:function(t){if("0"==t.data.code&&null!=t.data.data.key&&Object.keys(t.data.data.key).length>0){var n=t.data.data.key;e.globalData.term=n.nowTerm,e.globalData.startDate=n.startDate,e.getScheduleFromService(),a.index.setStorage({key:"config",data:t.data.data.key,success:function(e){},fail:function(e){}})}}})},checkLogin:function(){var o=this;return t(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=a.index.getStorageSync("login"))){e.next=6;break}if(getApp().globalData.isLogin=!0,o.setInfo(r),r.version==n.config.version){e.next=5;break}return e.abrupt("return",(a.index.clearStorageSync(),getApp().globalData.isLogin=!1,void a.index.showModal({title:"登录已失效，请重新登录",confirmText:"去登录",cancelText:"退出",success:function(e){e.confirm&&a.index.navigateTo({url:"/pages/login/login"})}})));case 5:a.index.request({url:n.config.loginUrl,method:"POST",data:{account:r.account,password:r.password},success:function(e){"0"==e.data.code?a.index.setStorage({key:"login",data:{account:r.account,password:r.password,result:e.data,xq:getApp().globalData.xq,token:getApp().globalData.token,version:n.config.version},success:function(){}}):"A0301"==e.data.code&&(getApp().globalData.isLogin=!1,a.index.showModal({title:"登录已失效，请重新登录",confirmText:"去登录",cancelText:"退出",success:function(e){getApp().clearAllStorage(),e.confirm&&a.index.navigateTo({url:"/pages/login/login"})}}))}});case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),t,null,[[0,8]])})))()},setInfo:function(e){this.globalData.account=e.account,this.globalData.password=e.password,this.globalData.xq=e.xq,this.getSchedule(),e=e.result.data,this.globalData.className=e.className,this.globalData.college=e.college,this.globalData.enrollmentYear=e.enrollmentYear,this.globalData.gender=e.gender,this.globalData.major=e.major,this.globalData.name=e.name,this.globalData.token=e.token},getDate:function(e){var t=new Date,a=t.getFullYear(),n=t.getMonth()+1;n=n<10?"0"+n:n;var o=t.getDate();return o=o<10?"0"+o:o,1==e?a+"-"+n+"-"+o:2==e?a+"/"+n+"/"+o:a+"年"+n+"月"+o+"日"},getweekday:function(e,t){if(1==t)var a=new Array("周日","周一","周二","周三","周四","周五","周六");else a=2==t?new Array("7","1","2","3","4","5","6"):new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");return a[new Date(e).getDay()]},getNowWeek:function(e){var t,a,n,o,r,i={week:null,day:null};return t=7-(a=0===(a=(r=new Date(e)).getDay())?7:a),n=new Date,i.day=["日","一","二","三","四","五","六"][n.getDay()],o=(n=new Date(n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate()))-r,o=parseInt(o/864e5),i.week=Math.ceil((o-t)/7)+1,this.nowWeek=i.week,i.week>=20?i.week=20:i.week<=0&&(i.week=0),i},getSchedule:function(){var e=this.globalData.term;if(getApp().globalData.isLogin){var t=this;a.index.getStorage({key:"schedule"+getApp().globalData.account+getApp().globalData.term,success:function(a){null==a.data.term||a.data.term!=e?t.getScheduleFromService():(getApp().globalData.schedule=a.data.schedule,t.isSameWeek(a.data.date,(new Date).getTime())&&t.getScheduleFromService())},fail:function(e){t.getScheduleFromService()}})}return!0},getScheduleFromService:function(e){var t=this;if(null!=e&&""!=e||(e=this.globalData.term),0!=getApp().isLogin&&""!=this.account&&null!=this.account){var o=this;a.index.request({url:n.config.schduleUrl,method:"GET",dataType:"json",header:{token:getApp().globalData.token},data:{account:this.account,term:e},success:function(n){if(0!=n.data.code)return a.index.showToast({title:n.data.message,icon:"error"}),!1;o.schedule=JSON.parse(n.data.data),"{}"==n.data.data||a.index.setStorage({key:"schedule"+t.account+e,data:{account:t.account,schedule:JSON.parse(n.data.data),term:e,date:(new Date).getTime()},success:function(e){}})},fail:function(e){}})}},isSameWeek:function(e,t){var a=new Date;a.setTime(e);var n=new Date;return n.setTime(t),this.tmonday(a)===this.tmonday(n)},tmonday:function(e){var t=new Date(e),a=t.getDay(),n=t.getDate();return 0===a&&(a=7),t.setDate(n-a+1),t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()},showForbid:function(){a.index.showToast({title:"本校区暂未开放",icon:"none"})},clearAllStorage:function(){var e=a.index.getStorageSync("remember-me");a.index.clearStorage(),a.index.setStorageSync("remember-me",e)}}};function r(){return{app:a.createSSRApp(o)}}r().app.mount("#app"),exports.createApp=r;