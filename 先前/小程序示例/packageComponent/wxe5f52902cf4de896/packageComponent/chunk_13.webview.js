__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'packageComponent/pages/form/label/label':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},G["common/head"]._,G["common/foot"]._,H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c,M=R.m,O=R.r,A={"theme":new Array(1)},K=U===true,c,d=(C,T,E,B,F,S,J)=>{var $A=I(c);if(c&&$A)$A(R,C,{title:"label"},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},g=(C,T)=>{C?T("表单组件在label内"):T()},i,j,k,l,m,q=(C)=>{},r=(C,T)=>{C||K||Z(k,"value")?T(Y(X(i).value)):T()},p=(C,T,E)=>{E("checkbox",{},(N,C)=>{if(C||K||Z(k,"name"))O(N,"value",X(i).name);if(C||K||Z(k,"checked"))O(N,"checked",X(i).checked)},q);E("text",{},(N,C)=>{if(C)L(N,"label-1-text")},r)},o=(C,T,E)=>{E("label",{},(N,C)=>{},p)},n=(C,$A,$B,$C,$D,$E,T,E)=>{i=$A,j=$B,k=$C,l=$D,m=$E;E("view",{},(N,C)=>{if(C)L(N,"label-1")},o)},h=(C,T,E,B,F)=>{F(D.checkboxItems,null,U?U.checkboxItems:undefined,[0,"checkboxItems"],n)},f=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},g);E("checkbox-group",{},(N,C)=>{if(C)L(N,"group");if(C)O(N,"bindchange","checkboxChange")},h)},t=(C,T)=>{C?T("label用for标识表单组件"):T()},v,w,x,y,z,C0=(C)=>{},E0=(C,T)=>{C||K||Z(x,"name")?T(Y(X(v).name)):T()},D0=(C,T,E)=>{E("text",{},(N,C)=>{},E0)},B0=(C,T,E)=>{E("radio",{},(N,C)=>{if(C||K||Z(x,"name"))R.i(N,X(v).name);if(C||K||Z(x,"name"))O(N,"value",X(v).name);if(C||K||Z(x,"checked"))O(N,"checked",X(v).checked)},C0);E("label",{},(N,C)=>{if(C)L(N,"label-2-text");if(C||K||Z(x,"name"))O(N,"for",X(v).name)},D0)},A0=(C,$A,$B,$C,$D,$E,T,E)=>{v=$A,w=$B,x=$C,y=$D,z=$E;E("view",{},(N,C)=>{if(C)L(N,"label-2")},B0)},u=(C,T,E,B,F)=>{F(D.radioItems,null,U?U.radioItems:undefined,[0,"radioItems"],A0)},s=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},t);E("radio-group",{},(N,C)=>{if(C)L(N,"group");if(C)O(N,"bindchange","radioChange")},u)},G0=(C,T)=>{C?T("label内有多个时选中第一个"):T()},I0=(C,T)=>{C?T("选项一"):T()},J0=(C,T)=>{C?T("选项二"):T()},K0=(C,T)=>{C?T("点击该label下的文字默认选中第一个checkbox"):T()},H0=(C,T,E)=>{E("checkbox",{},(N,C)=>{if(C)L(N,"checkbox-3")},I0);E("checkbox",{},(N,C)=>{if(C)L(N,"checkbox-3")},J0);E("view",{},(N,C)=>{if(C)L(N,"label-3-text")},K0)},F0=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section-title")},G0);E("label",{},(N,C)=>{if(C)L(N,"label-3")},H0)},e=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-gap")},f);E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-gap")},s);E("view",{},(N,C)=>{if(C)L(N,"page-section page-section-gap")},F0)},L0,M0=(C,T,E,B,F,S,J)=>{var $A=I(L0);if(L0&&$A)$A(R,C,{},K||(U?{}:undefined)).C(C,T,E,B,F,S,J)},b=(C,T,E,B)=>{c="head";B(c,d);E("view",{},(N,C)=>{if(C)L(N,"page-body")},e);L0="foot";B(L0,M0)},a=(C,T,E)=>{E("view",{},(N,C)=>{if(C)L(N,"container page");if(C||K||U.theme)R.d(N,"weuiTheme",D.theme);A["theme"][0]=(D,E,T)=>{R.d(N,"weuiTheme",D.theme);E(N)}},b)};;return {C:a,B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['packageComponent/pages/form/label/label.wxss'] = setCssToHead([".",[1],"label-1,.",[1],"label-2{margin:15px 0}\n.",[1],"label-3-text{color:#576b95;font-size:14px}\n.",[1],"checkbox-3{display:block;margin:15px 0}\n",],undefined,{path:"./packageComponent/pages/form/label/label.wxss"});
}