Component({externalClasses:["outside-picker-multi-class"],properties:{sourceData:{type:Array,value:[]},sourceDataStr:{type:String,value:""},itemSelected:{type:String,value:""},disabled:{type:Boolean,value:!1}},lifetimes:{attached:function(){},ready:function(){var e=this.data.sourceDataStr;if(e){for(var t=[],a=e.split(","),s=0;s<a.length;s++){var i={};a[s].includes("=")?(i.label=a[s].split("=")[1],i.value=a[s].split("=")[0]):(i.label=a[s],i.value=a[s]),t.push(i)}this.setData({options:t})}else{for(var l=this.data.sourceData,r=[],n=0;n<l.length;n++){var o={label:l[n],value:l[n]};r.push(o)}this.setData({options:r})}},detached:function(){}},data:{options:[]},methods:{bindChange:function(e){this.triggerEvent("select",e.detail.value)}}});