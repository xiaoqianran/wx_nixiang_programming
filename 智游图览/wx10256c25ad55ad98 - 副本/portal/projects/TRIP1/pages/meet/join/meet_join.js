var e,t,r,n,a,i=require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),s=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),u=require("../../../../../helper/cloud_helper.js"),o=require("../../../../../helper/page_helper.js"),c=require("../../../biz/meet_biz.js"),p=require("../../../biz/project_biz.js"),l=require("../../../../../comm/biz/passport_biz.js");require("../../../public/project_setting.js");Page({data:{isLoad:!1,forms:[]},onLoad:(a=s(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p.initPage(this),o.getOptions(this,t)){e.next=3;break}return e.abrupt("return");case 3:if(o.getOptions(this,t,"timeMark")){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,l.loginMustBackWin(this);case 7:if(e.sent){e.next=9;break}return e.abrupt("return");case 9:this._loadDetail();case 10:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),_loadDetail:(n=s(i().mark((function e(){var t,r,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.data.id){e.next=3;break}return e.abrupt("return");case 3:if(r=this.data.timeMark){e.next=6;break}return e.abrupt("return");case 6:return n={meetId:t,timeMark:r},a={title:"bar"},e.next=10,u.callCloudData("meet/detail_for_join",n,a);case 10:if(s=e.sent){e.next=14;break}return this.setData({isLoad:null}),e.abrupt("return");case 14:this.setData({isLoad:!0,meet:s});case 15:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:(r=s(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._loadDetail();case 2:wx.stopPullDownRefresh();case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),url:function(e){o.url(e,this)},onPageScroll:function(e){o.showTopBtn(e,this)},bindCheckTap:(t=s(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.selectComponent("#form-show").checkForms();case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)}),bindSubmitCmpt:(e=s(i().mark((function e(t){var r,n,a=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.detail,n=function(){var e=s(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={title:"提交中"},n={meetId:a.data.id,timeMark:a.data.timeMark,forms:r},e.next=5,u.callCloudSumbit("meet/join",n,t).then((function(e){var t=e.data.joinId;wx.showModal({title:"温馨提示",showCancel:!1,content:"预约成功！",success:function(){wx.reLaunch({url:o.fmtURLByPID("/pages/meet/my_join_detail/meet_my_join_detail?flag=home&id="+t)})}})}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),e.next=4,c.subscribeMessageMeet(n);case 4:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})});