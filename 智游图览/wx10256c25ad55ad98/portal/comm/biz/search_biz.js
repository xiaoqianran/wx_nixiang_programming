var e=require("../../../@babel/runtime/helpers/classCallCheck"),r=require("../../../@babel/runtime/helpers/createClass"),t=require("../../../@babel/runtime/helpers/possibleConstructorReturn"),n=require("../../../@babel/runtime/helpers/getPrototypeOf"),u=require("../../../@babel/runtime/helpers/inherits");function i(e,r,u){return r=n(r),t(e,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){return!1}}()?Reflect.construct(r,u||[],n(e).constructor):r.apply(e,u))}var l=require("./base_biz.js"),c=require("../../helper/cache_helper.js"),o=function(t){function n(){return e(this,n),i(this,n,arguments)}return u(n,l),r(n,null,[{key:"clearHistory",value:function(e){c.remove(e)}},{key:"getHistory",value:function(e){return c.get(e,[])}},{key:"addHistory",value:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2592e3;if(!r||0==r.length)return[];var u=c.get(e,[]),i=u.indexOf(r);return i>-1&&u.splice(i,1),u.unshift(r),u.length>t&&u.splice(u.length-1,1),c.set(e,u,n),u}}])}();module.exports=o;