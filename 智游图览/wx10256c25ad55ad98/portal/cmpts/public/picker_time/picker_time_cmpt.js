var e=require("../../../helper/time_helper.js"),t=require("./datetime_picker.js");Component({externalClasses:["picker-class"],properties:{mark:{type:String,value:""},mode:{type:String,value:"second"},timeModeStep:{type:Number,value:5},startYear:{type:Number,value:0},endYear:{type:Number,value:2030},item:{type:String,value:"",observer:function(e,t){e!=t&&this._init()}}},data:{multiIndex:[],multiArray:[]},lifetimes:{created:function(){},attached:function(){},ready:function(){0==this.data.startYear&&(this.data.startYear=e.time("Y")),"minute"==this.data.mode&&(this.data.startYear=2021,this.data.endYear=2021,this.data.item&&(this.data.item="2021-01-01 "+this.data.item)),this._init()},detached:function(){}},methods:{_fmtTime:function(e){return e=e.replace(/[^0-9]/gi,""),(e=parseInt(e))<10?"0"+e:""+e},_getTimeStr:function(e){for(var t=[],a=this.data.multiArray,i=0;i<e.length;i++){var r=this._fmtTime(a[i][e[i]]);t.push(r)}switch(this.data.mode){case"year":t=t[0];break;case"month":t=t[0]+"-"+t[1];break;case"day":t=t[0]+"-"+t[1]+"-"+t[2];break;case"hour":t=t[0]+"-"+t[1]+"-"+t[2]+" "+t[3]+":00";break;case"fullminute":t=t[0]+"-"+t[1]+"-"+t[2]+" "+t[3]+":"+t[4];break;case"minute":t=t[0]+":"+t[1];break;case"second":t=t[0]+"-"+t[1]+"-"+t[2]+" "+t[3]+":"+t[4]+":"+t[5]}return t},_init:function(){var e=[],a=[],i=this.data.mode,r=t.dateTimePicker(this.data.startYear,this.data.endYear,this.data.item,this.data.timeModeStep),s=r.dateTimeIndex,n=r.dateTimeArray;switch(i){case"year":e=[s[0]],a=[n[0]];break;case"month":e=[s[0],s[1]],a=[n[0],n[1]];break;case"day":e=[s[0],s[1],s[2]],a=[n[0],n[1],n[2]];break;case"hour":e=[s[0],s[1],s[2],s[3]],a=[n[0],n[1],n[2],n[3]];break;case"fullminute":s.pop(),n.pop(),e=s,a=n;break;case"minute":e=[s[3],s[4]],a=[n[3],n[4]];break;case"second":e=s,a=n}this.setData({multiIndex:e,multiArray:a})},pickerCancel:function(e){},pickerChange:function(e){var t=this._getTimeStr(e.detail.value);this.triggerEvent("select",t)},pickerColumnChange:function(e){var a=this.data.multiArray,i=this.data.multiIndex;i[e.detail.column]=e.detail.value;var r=this.data.mode;if("year"!=r&&"month"!=r&&"minute"!=r){var s=a[0][i[0]].replace("年",""),n=a[1][i[1]].replace("月","");a[2]=t.getMonthDay(s,n,"日")}this.setData({multiArray:a,multiIndex:i})}}});