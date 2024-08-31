Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../mixins/touch"),i=require("../common/utils"),n=require("../common/validator"),a=require("../common/relation");(0,t.VantComponent)({mixins:[e.touch],classes:["nav-class","tab-class","tab-active-class","line-class"],relation:(0,a.useChildren)("tab",(function(){this.updateTabs()})),props:{sticky:Boolean,border:Boolean,swipeable:Boolean,titleActiveColor:String,titleInactiveColor:String,color:String,animated:{type:Boolean,observer:function(){var t=this;this.children.forEach((function(e,i){return e.updateRender(i===t.data.currentIndex,t)}))}},lineWidth:{type:null,value:40,observer:"resize"},lineHeight:{type:null,value:-1},active:{type:null,value:0,observer:function(t){t!==this.getCurrentName()&&this.setCurrentIndexByName(t)}},type:{type:String,value:"line"},ellipsis:{type:Boolean,value:!0},duration:{type:Number,value:.3},zIndex:{type:Number,value:1},swipeThreshold:{type:Number,value:5,observer:function(t){this.setData({scrollable:this.children.length>t||!this.data.ellipsis})}},offsetTop:{type:Number,value:0},lazyRender:{type:Boolean,value:!0}},data:{tabs:[],scrollLeft:0,scrollable:!1,currentIndex:0,container:null,skipTransition:!0,scrollWithAnimation:!1,lineOffsetLeft:0},mounted:function(){var t=this;(0,i.requestAnimationFrame)((function(){t.swiping=!0,t.setData({container:function(){return t.createSelectorQuery().select(".van-tabs")}}),t.resize(),t.scrollIntoView()}))},methods:{updateTabs:function(){var t=this.children,e=void 0===t?[]:t,i=this.data;this.setData({tabs:e.map((function(t){return t.data})),scrollable:this.children.length>i.swipeThreshold||!i.ellipsis}),this.setCurrentIndexByName(i.active||this.getCurrentName())},trigger:function(t,e){var i=this.data.currentIndex,a=e||this.children[i];(0,n.isDef)(a)&&this.$emit(t,{index:a.index,name:a.getComputedName(),title:a.data.title})},onTap:function(t){var e=this,n=t.currentTarget.dataset.index,a=this.children[n];a.data.disabled?this.trigger("disabled",a):(this.setCurrentIndex(n),(0,i.nextTick)((function(){e.trigger("click")})))},setCurrentIndexByName:function(t){var e=this.children,i=(void 0===e?[]:e).filter((function(e){return e.getComputedName()===t}));i.length&&this.setCurrentIndex(i[0].index)},setCurrentIndex:function(t){var e=this,a=this.data,r=this.children,s=void 0===r?[]:r;if(!(!(0,n.isDef)(t)||t>=s.length||t<0)&&((0,i.groupSetData)(this,(function(){s.forEach((function(i,n){var a=n===t;a===i.data.active&&i.inited||i.updateRender(a,e)}))})),t!==a.currentIndex)){var o=null!==a.currentIndex;this.setData({currentIndex:t}),(0,i.requestAnimationFrame)((function(){e.resize(),e.scrollIntoView()})),(0,i.nextTick)((function(){e.trigger("input"),o&&e.trigger("change")}))}},getCurrentName:function(){var t=this.children[this.data.currentIndex];if(t)return t.getComputedName()},resize:function(){var t=this;if("line"===this.data.type){var e=this.data,n=e.currentIndex,a=e.ellipsis,r=e.skipTransition;Promise.all([(0,i.getAllRect)(this,".van-tab"),(0,i.getRect)(this,".van-tabs__line")]).then((function(e){var s=e[0],o=void 0===s?[]:s,l=e[1],c=o[n];if(null!=c){var u=o.slice(0,n).reduce((function(t,e){return t+e.width}),0);u+=(c.width-l.width)/2+(a?0:8),t.setData({lineOffsetLeft:u}),t.swiping=!0,r&&(0,i.nextTick)((function(){t.setData({skipTransition:!1})}))}}))}},scrollIntoView:function(){var t=this,e=this.data,n=e.currentIndex,a=e.scrollable,r=e.scrollWithAnimation;a&&Promise.all([(0,i.getAllRect)(this,".van-tab"),(0,i.getRect)(this,".van-tabs__nav")]).then((function(e){var a=e[0],s=e[1],o=a[n],l=a.slice(0,n).reduce((function(t,e){return t+e.width}),0);t.setData({scrollLeft:l-(s.width-o.width)/2}),r||(0,i.nextTick)((function(){t.setData({scrollWithAnimation:!0})}))}))},onTouchScroll:function(t){this.$emit("scroll",t.detail)},onTouchStart:function(t){this.data.swipeable&&(this.swiping=!0,this.touchStart(t))},onTouchMove:function(t){this.data.swipeable&&this.swiping&&this.touchMove(t)},onTouchEnd:function(){if(this.data.swipeable&&this.swiping){var t=this.direction,e=this.deltaX,i=this.offsetX;if("horizontal"===t&&i>=50){var n=this.getAvaiableTab(e);-1!==n&&this.setCurrentIndex(n)}this.swiping=!1}},getAvaiableTab:function(t){for(var e=this.data,i=e.tabs,n=e.currentIndex,a=t>0?-1:1,r=a;n+r<i.length&&n+r>=0;r+=a){var s=n+r;if(s>=0&&s<i.length&&i[s]&&!i[s].disabled)return s}return-1}}});