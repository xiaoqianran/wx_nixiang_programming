var t=require("../../../../helper/time_helper.js"),e=require("../../../../helper/page_helper.js"),i=require("../calendar_lib.js");Component({options:{addGlobalClass:!0},properties:{isLunar:{type:Boolean,value:!0},mode:{type:String,value:"one"},year:{type:Number,value:0},month:{type:Number,value:0},fold:{type:Boolean,value:!1},selectTimeout:{type:Boolean,value:!0},selectTimeoutHint:{type:String,value:"不能选择过去的日期"},hasDays:{type:Array,value:[],observer:function(t,e){t.length,e.length}},oneDoDay:{type:String,value:null},multiDoDay:{type:Array,value:[]},multiOnlyOne:{type:Boolean,value:!1}},data:{weekNo:0,fullToday:0},lifetimes:{attached:function(){this._init()}},methods:{_init:function(){i.getNowTime(this),i.createDay(this)},bindFoldTap:function(t){i.bindFoldTap(this)},bindNextTap:function(t){i.bindNextTap(this)},bindLastTap:function(t){i.bindLastTap(this)},bindDayOneTap:function(a){if(a.currentTarget.dataset.fullday<t.time("Y-M-D"))return e.showNoneToast("已过期",1e3);i.bindDayOneTap(a,this)},bindDayMultiTap:function(a){if(!this.data.selectTimeout&&a.currentTarget.dataset.fullday<t.time("Y-M-D"))return e.showNoneToast(this.data.selectTimeoutHint);i.bindDayMultiTap(a,this)},bindToNowTap:function(t){i.bindToNowTap(this)},listTouchStart:function(t){e.listTouchStart(t,this)},listTouchMove:function(t){e.listTouchMove(t,this)},listTouchEnd:function(t){i.listTouchEnd(this)}}});