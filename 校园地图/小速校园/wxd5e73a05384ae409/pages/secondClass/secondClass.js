var s=require("../../common/vendor.js"),t=require("../../config/config.js"),e={data:function(){return{state:!1,showLogin:!0,secondClassInfo:[],secondClassPassword:"",pic1:"https://quickdo.top/images/secondClass/detail/1.jpg",pic2:"https://quickdo.top/images/secondClass/detail/2.jpg",pic3:"https://quickdo.top/images/secondClass/detail/3.jpg",tip:["党史教育类讲座以及知识问答比赛等","ACM月赛、创新创业类讲座、参加双百工程、三创、挑战杯等创新创业比赛","志愿活动以及讲座，注意有些志愿活动只有i志愿时长，没有素拓","寒招、三下乡以及工作实习活动","文体活动，如唱歌、跳舞、球赛等","当班委、社团干部、学生会干部满一年获得0.5，参加比赛获奖也可申请","技能培训讲座以及各类技能大赛"]}},onLoad:function(){var t=this;s.index.setNavigationBarTitle({title:"第二课堂"}),s.index.getStorage({key:"secondClassData",success:function(s){null!=s.data.password&&""!=s.data.password&&null!=s.data.data?(t.secondClassPassword=s.data.password,t.secondClassInfo=s.data.data,t.showLogin=!1,t.getSecondClassInfo(t.secondClassPassword)):null!=s.data.password&&""!=s.data.password?(t.secondClassPassword=s.data.password,t.getSecondClassInfo(t.secondClassPassword)):t.getSecondClassInfo(t.secondClassPassword)},fail:function(s){}})},methods:{getSecondClassInfo:function(e){var n=this;""!=e&&null!=e||(e=getApp().globalData.account),s.index.request({url:t.config.secondClassUrl,method:"GET",data:{account:getApp().globalData.account,password:e},header:{token:getApp().globalData.token},success:function(t){"0"==t.data.code?(s.index.hideLoading(),n.showLogin=!1,n.secondClassInfo=t.data.data,(new Date).getDate(),(new Date).getHours(),s.index.setStorage({key:"secondClassData",data:{password:e,data:t.data.data},success:function(s){},fail:function(s){}})):s.index.showToast({title:t.data.message,icon:"error"})},fail:function(t){s.index.showToast({title:t.errMsg,icon:"error"})}})},getColor:function(s,t){return s>=t?"#148f77":"#ffaa00"},getImgSrc:function(s,t,e){if(s>=t)switch(e){case 0:return"https://quickdo.top/images/secondClass/icon/thoughts-filled.png";case 1:return"https://quickdo.top/images/secondClass/icon/Innovation-filled.png";case 2:return"https://quickdo.top/images/secondClass/icon/volunteer-filled.png";case 3:return"https://quickdo.top/images/secondClass/icon/practice-filled.png";case 4:return"https://quickdo.top/images/secondClass/icon/art-filled.png";case 5:return"https://quickdo.top/images/secondClass/icon/elite-filled.png";case 6:return"https://quickdo.top/images/secondClass/icon/skills-filled.png"}else switch(e){case 0:return"https://quickdo.top/images/secondClass/icon/thoughts.png";case 1:return"https://quickdo.top/images/secondClass/icon/Innovation.png";case 2:return"https://quickdo.top/images/secondClass/icon/volunteer.png";case 3:return"https://quickdo.top/images/secondClass/icon/practice.png";case 4:return"https://quickdo.top/images/secondClass/icon/art.png";case 5:return"https://quickdo.top/images/secondClass/icon/elite.png";case 6:return"https://quickdo.top/images/secondClass/icon/skills.png"}},secondClassLogin:function(){s.index.showLoading({title:"加载中"}),this.getSecondClassInfo(this.secondClassPassword,1)},back:function(){s.index.navigateBack()},showImg:function(t){1==t?s.index.previewImage({current:this.pic1,urls:[this.pic1,this.pic2,this.pic3]}):2==t?s.index.previewImage({current:this.pic2,urls:[this.pic1,this.pic2,this.pic3]}):3==t&&s.index.previewImage({current:this.pic3,urls:[this.pic1,this.pic2,this.pic3]})},checkboxChange:function(t){this.state=!this.state,s.index.setStorage({key:"state",data:{stateData:this.state},success:function(s){},fail:function(s){}})}}},n=s._export_sfc(e,[["render",function(t,e,n,o,a,i){return{a:t.secondClassPassword,b:s.o((function(s){return t.secondClassPassword=s.detail.value})),c:t.state,d:s.o((function(){return t.checkboxChange&&t.checkboxChange.apply(t,arguments)})),e:s.o((function(s){return t.back()})),f:s.o((function(s){return t.secondClassLogin()})),g:t.showLogin,h:s.f(t.secondClassInfo,(function(e,n,o){return{a:t.getImgSrc(e.now,e.need,n),b:s.t(e.name),c:s.t(e.now),d:s.t(e.need),e:t.getColor(e.now,e.need),f:s.t(t.tip[n]),g:n}})),i:t.pic1,j:s.o((function(s){return t.showImg(1)})),k:t.pic2,l:s.o((function(s){return t.showImg(2)})),m:t.pic3,n:s.o((function(s){return t.showImg(3)}))}}]]);wx.createPage(n);