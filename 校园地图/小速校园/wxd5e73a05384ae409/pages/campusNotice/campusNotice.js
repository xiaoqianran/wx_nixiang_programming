var e=require("../../common/vendor.js"),i={data:function(){return{campusNoticeIndex:0,campusNotice:{},content:"",publishDepName:"小速校园",publishTime:"2024-02-09",tag:"校园通知",title:"校园通知",fileList:[],borderColorList:["#cbc4ea","#d6dff6","#b7e4d7","#f3ebbe","#f1ccd4","#c9c3e9","#b9e2ba","#f7dcc4","#ffa6ad","#8ac0e6","#73dea4","#ebbb98","#cbc4ea","#d6dff6","#b7e4d7","#f3ebbe","#f1ccd4","#c9c3e9","#b9e2ba","#f7dcc4","#ffa6ad","#8ac0e6","#73dea4"],backgroundColorList:["#e8e4fe","#e5f3fe","#ecfeff","#fef7db","#feeeef","#e4e7fa","#f0ffec","#ffe9dc","#ffdee0","#e3f3ff","#d1ffe6","#ffdcc2","#e8e4fe","#e5f3fe","#ecfeff","#fef7db","#feeeef","#e4e7fa","#f0ffec","#ffe9dc","#ffdee0","#e3f3ff","#d1ffe6"],colorList:["#a273df","#569ce1","#54cabc","#eba93c","#f582a3","#7370b3","#76c473","#f69a7f","#ff5c68","#85a3e4","#65c28f","#e68a47","#a273df","#569ce1","#54cabc","#eba93c","#f582a3","#7370b3","#76c473","#f69a7f","#ff5c68","#85a3e4","#65c28f"]}},onShow:function(){},onLoad:function(i){var t=JSON.parse(i.index);this.campusNoticeIndex=t;var c=e.index.getStorageSync("campusNotice");this.campusNotice=c.campusNotice[this.campusNoticeIndex],this.title=this.campusNotice.title,this.content=this.campusNotice.content,this.publishDepName=this.campusNotice.publishDepName,this.publishTime=this.campusNotice.publishTime,this.tag=this.campusNotice.tag,this.fileList=this.campusNotice.fileList},onShareAppMessage:function(e){return e.from,{path:"pages/tabbar/plan/plan",mpId:"wxd5e73a05384ae409"}},methods:{download:function(i){e.index.showLoading({title:"下载中..."}),e.index.downloadFile({url:i,success:function(t){e.index.hideLoading(),e.index.showLoading({title:"打开文件中..."});var c=t.tempFilePath;e.index.openDocument({filePath:c,showMenu:!0,success:function(i){e.index.hideLoading()},fail:function(t){e.index.hideLoading(),e.index.setClipboardData({data:i,success:function(){e.index.showModal({title:"打开失败，已复制下载链接",content:"请自行粘贴到浏览器下载，微信暂不支持打开此类型文件。",showCancel:!1})},fail:function(i){e.index.showToast({title:"请重试",icon:"error"})}})}})},fail:function(t){e.index.hideLoading(),e.index.setClipboardData({data:i,success:function(){e.index.showModal({title:"下载失败，已复制下载链接",content:"请自行粘贴到浏览器下载，微信暂不支持打开此类型文件。",showCancel:!1})},fail:function(i){e.index.showToast({title:"请重试",icon:"error"})}})}})},getBgc:function(e){return this.backgroundColorList[e]},getTypeColor:function(e){return this.colorList[e]},formatRichText:function(e){var i=e.replace(/<img[^>]*>/gi,(function(e,i){return(e=(e=e.replace(/style="[^"]+"/gi,"").replace(/style='[^']+'/gi,"")).replace(/width="[^"]+"/gi,"").replace(/width='[^']+'/gi,"")).replace(/height="[^"]+"/gi,"").replace(/height='[^']+'/gi,"")}));return i=(i=(i=(i=i.replace(/style="[^"]+"/gi,(function(e,i){return e.replace(/width:[^;]+;/gi,"max-width:100%;").replace(/width:[^;]+;/gi,"max-width:100%;")}))).replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:inline-block;"')).replace(/<table[^>]*>/gi,(function(e,i){return e.replace(/width=\"(.*)\"/gi,"")}))).replace(/&nbsp;/gi," ")}}};Array||e.resolveComponent("uni-icons")(),Math;var t=e._export_sfc(i,[["render",function(i,t,c,a,n,f){return{a:e.t(i.title),b:e.p({type:"chatboxes"}),c:e.t(i.publishDepName),d:e.p({type:"upload"}),e:e.t(i.publishTime),f:e.t(i.tag),g:i.getBgc(i.campusNoticeIndex),h:i.getTypeColor(i.campusNoticeIndex),i:i.formatRichText(i.content),j:e.p({type:"paperclip"}),k:e.f(i.fileList,(function(t,c,a){return{a:e.t(t.fileSize),b:t.fileSize,c:!t.fileSize,d:e.t(t.fileName),e:e.o((function(e){return i.download(t.fileUrl)}),c),f:c}})),l:""!=i.fileList}}]]);wx.createPage(t);