__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageComponent/pages/form/form/form':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},G["common/head"]._,G["common/foot"]._,H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"theme":new Array(1)},K=U===true,c,d=(C,T,E,B,F,S,J)=>{var $A=I(c);if(c&&$A)$A(R,C,{title:"form"},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},h=(C,T)=>{C?T("switch"):T()},i=(C)=>{},g=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},h);E("switch",{},(N,C)=>{if(C)O(N,"name","switch")},i)},k=(C,T)=>{C?T("radio"):T()},n=(C)=>{},m=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","radio1")},n);C?T("选项一"):T()},p=(C)=>{},o=(C,T,E)=>{E("radio",{},(N,C)=>{if(C)O(N,"value","radio2")},p);C?T("选项二"):T()},l=(C,T,E)=>{E("label",{},(N,C)=>{},m);E("label",{},(N,C)=>{},o)},j=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},k);E("radio-group",{},(N,C)=>{if(C)O(N,"name","radio")},l)},r=(C,T)=>{C?T("checkbox"):T()},u=(C)=>{},t=(C,T,E)=>{E("checkbox",{},(N,C)=>{if(C)O(N,"value","checkbox1")},u);C?T("选项一"):T()},w=(C)=>{},v=(C,T,E)=>{E("checkbox",{},(N,C)=>{if(C)O(N,"value","checkbox2")},w);C?T("选项二"):T()},s=(C,T,E)=>{E("label",{},(N,C)=>{},t);E("label",{},(N,C)=>{},v)},q=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},r);E("checkbox-group",{},(N,C)=>{if(C)O(N,"name","checkbox")},s)},y=(C,T)=>{C?T("slider"):T()},z=(C)=>{},x=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},y);E("slider",{},(N,C)=>{if(C)O(N,"value","50");if(C)O(N,"name","slider");if(C||K||undefined)O(N,"show-value",true)},z)},B0=(C,T)=>{C?T("input"):T()},F0=(C)=>{},E0=(C,T,E)=>{E("input",{},(N,C)=>{if(C)L(N,"weui-input");if(C)O(N,"name","input");if(C)O(N,"placeholder","这是一个输入框")},F0)},D0=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-cell__bd")},E0)},C0=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"weui-cell weui-cell_input")},D0)},A0=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},B0);E("view",{},(N,C)=>{if(C)L(N,"weui-cells weui-cells_after-title")},C0)},H0=(C,T)=>{C?T("Submit"):T()},I0=(C,T)=>{C?T("Reset"):T()},G0=(C,T,E)=>{E("button",{},(N,C)=>{if(C)O(N,"type","primary");if(C)O(N,"formType","submit")},H0);E("button",{},(N,C)=>{if(C)O(N,"formType","reset")},I0)},f=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-gap")},g);E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-gap")},j);E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-gap")},q);E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-gap")},x);E("view",{},(N,C)=>{if(C)L(N,"page-section")},A0);E("view",{},(N,C)=>{if(C)L(N,"btn-area")},G0)},e=(C,T,E)=>{E("form",{},(N,C)=>{if(C)O(N,"catchsubmit","formSubmit");if(C)O(N,"catchreset","formReset")},f)},J0,K0=(C,T,E,B,F,S,J)=>{var $A=I(J0);if(J0&&$A)$A(R,C,{},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},b=(C,T,E,B)=>{c="head";B(c,d);E("view",{},(N,C)=>{if(C)L(N,"page-body")},e);J0="foot";B(J0,K0)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"container page");if(C||K||U.theme)R.d(N,"weuiTheme",D.theme);A["theme"][0]=(D,E,T)=>{R.d(N,"weuiTheme",D.theme);E(N)}},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packageComponent/pages/form/form/form.wxss'] = setCssToHead(["wx-label{display:inline-block;margin-right:10px;min-width:235px}\nwx-form{width:100%}\n.",[1],"picker-text{margin-left:10px;position:relative}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packageComponent/pages/form/form/form.wxss:1:62)",{path:"./packageComponent/pages/form/form/form.wxss"});
}