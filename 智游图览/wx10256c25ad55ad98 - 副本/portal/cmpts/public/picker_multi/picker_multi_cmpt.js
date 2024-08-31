var e=require("../../../helper/data_helper.js");function t(e){return null!=e}Component({externalClasses:["outside-picker-multi-class"],properties:{mode:{type:String,value:""},timeModeStep:{type:Number,value:1},autoSelect:{type:Boolean,value:!1},sourceData:{type:Array,value:[],observer:"sourceDataChange"},steps:{type:Number,value:1},initColumnSelectedIndex:{type:Boolean,value:!1},itemIndex:{type:Array,value:[]},itemMulti:{type:Array,value:[],observer:function(e,t){JSON.stringify(e)!=JSON.stringify(t)&&this.sourceDataChange(this.data.sourceData)}},disabled:{type:Boolean,value:!1},isSlot:{type:Boolean,value:!0}},data:{multiIndex:{type:Array,value:[]},multiArray:{type:Array,value:[]},selectedArray:{type:Array,value:[]}},lifetimes:{created:function(){},attached:function(){this.data.autoSelect&&this.processData()},ready:function(){},detached:function(){}},pageLifetimes:{show:function(){},hide:function(){},resize:function(e){}},methods:{sourceDataChange:function(e){var a=this.data.steps,n=[],r=[];e=this.checkSourceData(e);var i=this.getDefaultIndex(e);!function e(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=[];l.forEach((function(l,c){if(0===u&&o.push(l.label),t(l.label)&&c===(i[u]||0)&&(n.push(c),u<a-1&&t(l.children))){var s=l.children.map((function(e){return e.label}));r.push(s),e(l.children,u+1)}})),0===u&&r.unshift(o)}(e),this.setData({multiIndex:n,multiArray:r}),this.data.autoSelect&&this.processData()},getDefaultIndex:function(e){var t=this.data,a=t.itemIndex,n=t.itemMulti,r=t.steps;if(a.length)return a;if(n.length){if(n.length!==r)return this.consoleError(new Error('你设置的"itemMulti"字段阶数与"steps"不符，请修改后再试。')),[];var i=[];return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i[a]=0,t.forEach((function(t,l){n[a]===t.val&&(i[a]=l,a<r-1&&t.children&&e(t.children,a+1))}))}(e),i}return[]},checkSourceData:function(e){var t=this.data.steps;return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!a.length){var r={label:"",children:[]};a.push(r)}return a.map((function(a){return n<t-1&&(a.children=e(a.children,n+1)),a}))}(e)},pickerChange:function(e){this.setData({multiIndex:e.detail.value}),this.processData()},processData:function(){var t=this,a=this.data,n=a.sourceData,r=a.multiIndex,i=[];!function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n.forEach((function(n,u){if(u===r[l]){var o=e.deepClone(n);delete o.children,i.push(o),l<t.data.steps-1&&a(n.children,l+1)}}))}(n),this.setData({selectedArray:i});var l=e.getArrByKey(i,"val");this.triggerEvent("select",l)},pickerColumnChange:function(e){var t=this.data,a=t.multiArray,n=t.sourceData,r=t.steps,i=t.initColumnSelectedIndex,l=this.data.multiIndex,u=e.detail,o=u.column,c=u.value;if(l[o]=c,i){var s=l.map((function(e,t){return o>=t?e:0}));l=s}!function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.forEach((function(t,i){if(i===l[n]&&n<r-1){t.children||(t.children=[]);var u=t.children.map((function(e){return e.label}));a[n+1]=u,e(t.children,n+1)}}))}(n),this.setData({multiArray:a,multiIndex:l}),this.triggerEvent("columnchange",e)},pickerCancel:function(e){this.triggerEvent("cancel",e)},consoleError:function(){var e;(e=console).error.apply(e,arguments)}}});