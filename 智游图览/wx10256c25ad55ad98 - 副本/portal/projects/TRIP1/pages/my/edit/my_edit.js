var e,t,r,n,i,a=require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),s=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),u=require("../../../../../helper/page_helper.js"),o=require("../../../../../helper/cloud_helper.js"),c=require("../../../../../helper/validate.js"),l=require("../../../biz/project_biz.js"),p=require("../../../public/project_setting.js"),h=require("../../../../../setting/setting.js"),f=require("../../../../../comm/biz/passport_biz.js");Page({data:{isLoad:!1,isEdit:!0,userRegCheck:p.USER_REG_CHECK,mobileCheck:h.MOBILE_CHECK},onLoad:(i=s(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.initPage(this),e.next=3,this._loadDetail();case 3:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)}),_loadDetail:(n=s(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={title:"bar"},e.next=3,o.callCloudData("user/detail",{},r);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return",wx.redirectTo({url:"../reg/my_reg"}));case 6:this.setData({isLoad:!0,isEdit:!0,user:n,formName:n.name,formMobile:n.mobile});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:(r=s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._loadDetail();case 2:wx.stopPullDownRefresh();case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),onReachBottom:function(){},bindGetPhoneNumber:(t=s(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getPhone(t,this);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)}),bindSubmitTap:(e=s(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=this.data,r=c.check(r,f.CHECK_FORM,this)){e.next=5;break}return e.abrupt("return");case 5:return n={title:"提交中",method:"POST"},e.next=8,o.callCloudSumbit("user/detail",r,n).then((function(e){u.showSuccToast("修改成功",1500,(function(){wx.reLaunch({url:"../index/my_index"})}))}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(t){return e.apply(this,arguments)})});