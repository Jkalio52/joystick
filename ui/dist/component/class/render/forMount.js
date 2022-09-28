var pr=Object.create;var H=Object.defineProperty;var ur=Object.getOwnPropertyDescriptor;var lr=Object.getOwnPropertyNames;var fr=Object.getPrototypeOf,mr=Object.prototype.hasOwnProperty;var hr=e=>H(e,"__esModule",{value:!0});var wr=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var yr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of lr(r))!mr.call(e,n)&&n!=="default"&&H(e,n,{get:()=>r[n],enumerable:!(t=ur(r,n))||t.enumerable});return e},xr=e=>yr(hr(H(e!=null?pr(fr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var z=wr(I=>{(function(e,r){if(typeof define=="function"&&define.amd)define(["exports"],r);else if(typeof I!="undefined")r(I);else{var t={exports:{}};r(t.exports),e.index=t.exports}})(I,function(e){"use strict";function r(s){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},r(s)}function t(s,i){return i&&(r(i)==="object"||typeof i=="function")?i:n(s)}function n(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function o(s){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},o(s)}function d(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(i&&i.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),i&&g(s,i)}function g(s,i){return g=Object.setPrototypeOf||function(u,x){return u.__proto__=x,u},g(s,i)}function y(s,i){if(!(s instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.diff=void 0;var E=function s(i,u){y(this,s),this.type=i,this.path=u?u.toString():""},D=function(s){function i(u,x,c){var T;return y(this,i),T=t(this,o(i).call(this,"E",u)),T.lhs=x,T.rhs=c,T}return d(i,s),i}(E),C=function(s){function i(u,x,c,T){var l;return y(this,i),l=t(this,o(i).call(this,"M",u)),l.item=x,l.lhsIndex=c,l.rhsIndex=T,l}return d(i,s),i}(E),N=function(s){function i(u,x){var c;return y(this,i),c=t(this,o(i).call(this,"D",u)),c.lhs=x,c}return d(i,s),i}(E),A=function(s){function i(u,x){var c;return y(this,i),c=t(this,o(i).call(this,"A",u)),c.rhs=x,c}return d(i,s),i}(E),S=function(s,i){return s?"".concat(s,".").concat(i):i};e.diff=function(i,u){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},c=[],T=x.matchKey,l=x.types||["E","A","D","M"],dr=function(f,p,m,O){f.forEach(function(F,h){var M=p.findIndex(function(w){return w[O]===F[O]});-1<M?(-1<l.indexOf("M")&&h!==M&&c.push(new C(m,F,h,M)),j(F,p[M],S(m,M))):-1<l.indexOf("D")&&c.push(new N(m,F))}),p.forEach(function(F,h){var M=f.findIndex(function(w){return F[O]===w[O]});-1<l.indexOf("A")&&M===-1&&c.push(new A(S(m,h),F))})},j=function(f,p,m){var O=Object.prototype.toString.call(f),F=Object.prototype.toString.call(p);if(-1<l.indexOf("E")&&O!==F)return c.push(new D(m,f,p)),!1;if(O==="[object Object]")Object.getOwnPropertyNames(f).forEach(function(w){Object.prototype.hasOwnProperty.call(p,w)?j(f[w],p[w],S(m,w)):-1<l.indexOf("D")&&c.push(new N(S(m,w),f[w]))}),Object.getOwnPropertyNames(p).forEach(function(w){-1<l.indexOf("A")&&!Object.prototype.hasOwnProperty.call(f,w)&&c.push(new A(S(m,w),p[w]))});else if(O!=="[object Array]")-1<l.indexOf("E")&&f!==p&&c.push(new D(m,f,p));else if(T)dr(f,p,m,T);else{var h=f.length-1,M=p.length-1;if(-1<l.indexOf("D"))for(;h>M;)c.push(new N(S(m,h),f[h--]));if(-1<l.indexOf("A"))for(;M>h;)c.push(new A(S(m,M),p[M--]));for(;0<=h;--h)j(f[h],p[h],S(m,h))}};return j(i,u),c}})});var a=(e="",r={})=>{throw new Error(`[joystick${e?`.${e}`:""}] ${r.message||r.reason||r}`)};var b=()=>typeof window=="undefined";var $=e=>{try{return!!Array.isArray(e)}catch(r){a("types.isArray",r)}};var B=e=>{try{return typeof e=="function"}catch(r){a("types.isFunction",r)}};var q=e=>{try{return!!(e&&typeof e=="object"&&!Array.isArray(e))}catch(r){a("types.isObject",r)}};var W=e=>{try{return typeof e=="string"}catch(r){a("types.isString",r)}};var V=(e=[],r="")=>{try{return($(e)&&e.find(n=>n?.ssrId===r))?.data||{}}catch(t){a("findComponentDataFromSSR",t)}};var K=xr(z());var Mr=(e="")=>{try{let[r,t]=e?.split(".");return t?window?.joystick?._internal?.queues[r][t]:window?.joystick?._internal?.queues[r]}catch(r){a("addToQueue.getQueue",r)}},R=(e="",r=null)=>{try{b()||(Mr(e)||{}).array.push({callback:r})}catch(t){a("addToQueue",t)}};var G=(e={},r="",t="id")=>{try{let n=e&&e.id;if(q(e)&&n){let o=Object.keys(e);for(let d=0;d<o.length;d+=1){let g=o[d],y=e[g];if(g===t&&y===r)return e;if(g==="children"&&Array.isArray(y))for(let E=0;E<y.length;E+=1){let D=y[E],C=G(D,r,t);if(C!==null)return C}}}return null}catch(n){a("component.findComponentInTreeByField",n)}},k=G;var Q=(e="",r={},t=null)=>{let n=k(t||window.joystick._internal.tree,e,"instanceId");n&&(n.children=[...n.children||[],r])};var gr=(e={},r={})=>{try{let t=L(e,{includeActual:!0});return e.dom=t,e.setDOMNodeOnInstance(),e.appendCSSToHead(),r.renderedComponent=e,t.html.wrapped}catch(t){a("component.renderMethods.component.renderForClient",t)}},Tr=(e={})=>{try{return e.renderToHTML({ssrTree:e.parent.ssrTree,translations:e.parent.translations,walkingTreeForSSR:e?.parent?.walkingTreeForSSR,dataFromSSR:e.parent?.dataFromSSR}).wrapped}catch(r){a("component.renderMethods.component.renderToHTMLForSSR",r)}},Fr=(e={})=>{try{return e.parent.ssrTree.dataFunctions.push(async()=>{let r=await e.options.data(e.parent.options.api,e.parent.options.req);return e.data=r||{},{componentId:e.id,ssrId:e.ssrId,data:r}}),e.renderToHTML({ssrTree:e?.parent?.ssrTree,translations:e?.parent?.translations,walkingTreeForSSR:e?.parent?.walkingTreeForSSR,dataFromSSR:e?.parent?.dataFromSSR})}catch(r){a("component.renderMethods.component.collectDataFunctionsForSSR",r)}},Er=(e={})=>{try{let r={id:e.id,instanceId:e.instanceId,instance:e,children:[]};Q(e.parent.instanceId,r,e.parent&&e.parent.ssrTree||null)}catch(r){a("component.renderMethods.component.handleAddComponentToParent",r)}},Sr=(e={},r={})=>{try{!e.renderedComponent&&r.options&&r.options.lifecycle&&(r.options.lifecycle.onBeforeMount&&R("lifecycle.onBeforeMount",()=>{r.options.lifecycle.onBeforeMount(r)}),!e.renderedComponent&&r.options.lifecycle.onMount&&R("lifecycle.onMount",()=>{r.options.lifecycle.onMount(r)}))}catch(t){a("component.renderMethods.component.handleLifecycle",t)}},Or=(e={},r={},t={})=>{try{!r.walkingTreeForSSR&&e?.options?.lifecycle?.onUpdateProps&&(0,K.diff)(r?.existingPropsMap,t)?.length>0&&R("lifecycle.onUpdateProps",()=>{let o=r?.existingPropsMap&&r?.existingPropsMap[e.id];e.options.lifecycle.onUpdateProps(o||{},t,e)})}catch(n){a("component.renderMethods.component.handleOnChangeProps",n)}},br=function(){return function(r=null,t={},n={}){let o=r({props:t,existingStateMap:!n.walkingTreeForSSR&&n?.existingStateMap,url:n.url,translations:n.translations,api:n.options.api,req:n.options.req,dataFromSSR:n?.dataFromSSR});return o.parent=n,Or(o,n,t),R("lifecycle.onMount",()=>{o.setDOMNodeOnInstance()}),Sr(this,o),Er(o),o.options.data&&o.parent.walkingTreeForSSR&&o.parent.ssrTree.dataFunctions?Fr(o):o.parent&&o.parent.ssrTree?Tr(o):gr(o,this)}},kr=function(r,t){try{let n=this;return new br().bind({})(r,t,n)}catch(n){a("component.renderMethods.component",n)}},P=kr;var Rr=function(r=[],t=null){try{return B(t)&&r&&Array.isArray(r)?r.map((n,o)=>t(n,o)).join(""):""}catch(n){a("component.renderMethods.each",n)}},v=Rr;var Dr=function(r="",t={}){try{let n=b()?this.translations:window.__joystick_i18n__;if(!n||!n[r])return"";let o=Object.entries(t);return o.length>0?o.reduce((d,[g,y])=>d.replace(`{{${g}}}`,y),n[r]):n[r]}catch(n){a("component.renderMethods.i18n",n)}},_=Dr;var Cr=function(r=!1,t=""){try{return this?.renderingHTMLWithDataForSSR||r?`<when>${t.trim()}</when>`:"<when> </when>"}catch(n){a("component.renderMethods.when",n)}},U=Cr;var X={c:P,component:P,e:v,each:v,i:_,i18n:_,w:U,when:U};var J=(e={},r={})=>{try{return Object.entries(X).reduce((t,[n,o])=>(t[n]=o.bind({...e,...r}),t),{})}catch(t){a("component.renderMethods.compile",t)}};var Y=(e={})=>{try{let r={},t=k(window.joystick._internal.tree,e.id);return t&&(r[t?.instance?.id]=t?.instance?.props),t?.children?.reduce((n={},o)=>(n[o?.instance?.id]||(n[o?.instance?.id]=o?.instance?.props),n),r)}catch(r){a("component.render.getExistingPropsMap",r)}};var Z=(e={})=>{try{let r={},t=k(window.joystick._internal.tree,e.id);return t&&(r[t?.instance?.id]=t?.instance?.state),t?.children?.reduce((n={},o)=>(n[o?.instance?.id]||(n[o?.instance?.id]=o?.instance?.state),n),r)}catch(r){a("component.render.getExistingStateMap",r)}};var rr=new RegExp(/\<\!\-\-(?:.|\n|\r)*?-->/g),jr=new RegExp(/\n/g);var Ir=(e="")=>{try{return(e.match(rr)||[]).forEach(t=>{e=e.replace(t,"")}),e}catch(r){a("component.render.sanitizeHTML.removeCommentedCode",r)}},er=(e="")=>{try{let r=`${e}`;return r=Ir(r),r}catch(r){a("component.render.sanitizeHTML",r)}};var tr=(e={},r="")=>{try{let{wrapper:t=null,ssrId:n=null,id:o=null,instanceId:d=null}=e;return`<div ${t?.id?`id="${t.id}" `:""}${t?.classList?`class="${t.classList?.join(" ")}" `:""}js-ssrId="${n}" js-c="${o}" js-i="${d}">${r}</div>`}catch(t){a("component.render.wrapHTML",t)}};var nr=(e={},r={})=>{try{r?.dataFromSSR&&(e.data=V(r.dataFromSSR,e.ssrId)||{});let t={...e,getExistingPropsMap:{},existingPropsMap:b()?{}:Y(e),existingStateMap:b()?{}:Z(e),ssrTree:r?.ssrTree,translations:r?.translations||e.translations||{},walkingTreeForSSR:r?.walkingTreeForSSR,renderingHTMLWithDataForSSR:r?.renderingHTMLWithDataForSSR,dataFromSSR:r?.dataFromSSR},n=J(t),o=e.options.render({...e||{},setState:e.setState.bind(e),...n||{}}),d=er(o),g=tr(e,d);return{unwrapped:d,wrapped:g}}catch(t){a("component.render.toHTML",t)}};var Lr=(e={})=>{try{return Object.values(e).reduce((r={},t)=>(r[t.name]=t.value,r),{})}catch(r){a("component.virtualDOM.build.parseAttributeMap",r)}},or=(e="")=>{try{let r=e.tagName&&e.tagName.toLowerCase()||"text",t={tagName:r,attributes:Lr(e.attributes),children:[].map.call(e.childNodes,n=>or(n))};return r==="text"&&(t=e.textContent),t}catch(r){a("component.virtualDOM.build.buildVirtualDOMTree",r)}};var ir=(e={})=>{try{return e?.childNodes?.length>0&&[].forEach.call(e.childNodes,r=>{ir(r),r?.tagName==="WHEN"&&r.childNodes?.length===0&&r.replaceWith(document.createTextNode("")),r?.tagName==="WHEN"&&r?.childNodes?.length>0&&r.replaceWith(...r.childNodes)}),e}catch(r){throw new Error(`[actionName.flattenAndReplaceWhenElements] ${r.message}`)}},Nr=(e="",r="")=>{try{let t=document.createElement("div");return t.setAttribute("js-c",r),t.innerHTML=e,ir(t)}catch(t){a("component.virtualDOM.build.buildVirtualDOM",t)}},ar=(e="",r="")=>{try{let t=Nr(e,r);return or(t)}catch(t){a("component.virtualDOM.build",t)}};var Ar=(e={})=>{try{let r=document.createElement(e.tagName),t=Object.entries(e.attributes);for(let n=0;n<t.length;n+=1){let[o,d]=t[n];r.setAttribute(o,d)}for(let n=0;n<e?.children?.length;n+=1){let o=e?.children[n];if(o){let d=sr(o);r.appendChild(d)}}return r}catch(r){a("component.virtualDOM.renderTreeToDOM.renderElement",r)}},sr=(e=null)=>{try{return W(e)?document.createTextNode(e):Ar(e)}catch(r){a("component.virtualDOM.renderTreeToDOM",r)}},cr=sr;var L=(e={},r={})=>{try{let t=nr(e),n=ar(t.unwrapped,e.id),o=r.includeActual&&n?cr(n):null;return{html:t,virtual:n,actual:o}}catch(t){a("component.render.getUpdatedDOM",t)}};var it=(e={})=>{try{let r=L(e,{includeActual:!0});return e.dom=r,r.actual}catch(r){a("component.render.forMount",r)}};export{it as default};
