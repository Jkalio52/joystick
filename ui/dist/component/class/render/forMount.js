var pe=Object.create;var H=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var fe=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var he=r=>H(r,"__esModule",{value:!0});var we=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of le(e))!me.call(r,n)&&n!=="default"&&H(r,n,{get:()=>e[n],enumerable:!(t=ue(e,n))||t.enumerable});return r},xe=r=>ye(he(H(r!=null?pe(fe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var z=we(j=>{(function(r,e){if(typeof define=="function"&&define.amd)define(["exports"],e);else if(typeof j!="undefined")e(j);else{var t={exports:{}};e(t.exports),r.index=t.exports}})(j,function(r){"use strict";function e(c){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(c)}function t(c,i){return i&&(e(i)==="object"||typeof i=="function")?i:n(c)}function n(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function o(c){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},o(c)}function d(c,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(i&&i.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),i&&g(c,i)}function g(c,i){return g=Object.setPrototypeOf||function(u,x){return u.__proto__=x,u},g(c,i)}function y(c,i){if(!(c instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0}),r.diff=void 0;var E=function c(i,u){y(this,c),this.type=i,this.path=u?u.toString():""},D=function(c){function i(u,x,s){var T;return y(this,i),T=t(this,o(i).call(this,"E",u)),T.lhs=x,T.rhs=s,T}return d(i,c),i}(E),C=function(c){function i(u,x,s,T){var l;return y(this,i),l=t(this,o(i).call(this,"M",u)),l.item=x,l.lhsIndex=s,l.rhsIndex=T,l}return d(i,c),i}(E),N=function(c){function i(u,x){var s;return y(this,i),s=t(this,o(i).call(this,"D",u)),s.lhs=x,s}return d(i,c),i}(E),A=function(c){function i(u,x){var s;return y(this,i),s=t(this,o(i).call(this,"A",u)),s.rhs=x,s}return d(i,c),i}(E),S=function(c,i){return c?"".concat(c,".").concat(i):i};r.diff=function(i,u){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},s=[],T=x.matchKey,l=x.types||["E","A","D","M"],de=function(f,p,m,O){f.forEach(function(F,h){var M=p.findIndex(function(w){return w[O]===F[O]});-1<M?(-1<l.indexOf("M")&&h!==M&&s.push(new C(m,F,h,M)),I(F,p[M],S(m,M))):-1<l.indexOf("D")&&s.push(new N(m,F))}),p.forEach(function(F,h){var M=f.findIndex(function(w){return F[O]===w[O]});-1<l.indexOf("A")&&M===-1&&s.push(new A(S(m,h),F))})},I=function(f,p,m){var O=Object.prototype.toString.call(f),F=Object.prototype.toString.call(p);if(-1<l.indexOf("E")&&O!==F)return s.push(new D(m,f,p)),!1;if(O==="[object Object]")Object.getOwnPropertyNames(f).forEach(function(w){Object.prototype.hasOwnProperty.call(p,w)?I(f[w],p[w],S(m,w)):-1<l.indexOf("D")&&s.push(new N(S(m,w),f[w]))}),Object.getOwnPropertyNames(p).forEach(function(w){-1<l.indexOf("A")&&!Object.prototype.hasOwnProperty.call(f,w)&&s.push(new A(S(m,w),p[w]))});else if(O!=="[object Array]")-1<l.indexOf("E")&&f!==p&&s.push(new D(m,f,p));else if(T)de(f,p,m,T);else{var h=f.length-1,M=p.length-1;if(-1<l.indexOf("D"))for(;h>M;)s.push(new N(S(m,h),f[h--]));if(-1<l.indexOf("A"))for(;M>h;)s.push(new A(S(m,M),p[M--]));for(;0<=h;--h)I(f[h],p[h],S(m,h))}};return I(i,u),s}})});var a=(r="",e={})=>{throw new Error(`[joystick${r?`.${r}`:""}] ${e.message||e.reason||e}`)};var b=()=>typeof window=="undefined";var $=r=>{try{return!!Array.isArray(r)}catch(e){a("types.isArray",e)}};var B=r=>{try{return typeof r=="function"}catch(e){a("types.isFunction",e)}};var q=r=>{try{return!!(r&&typeof r=="object"&&!Array.isArray(r))}catch(e){a("types.isObject",e)}};var W=r=>{try{return typeof r=="string"}catch(e){a("types.isString",e)}};var V=(r=[],e="")=>{try{return($(r)&&r.find(n=>n?.componentId===e))?.data||{}}catch(t){a("findComponentDataFromSSR",t)}};var K=xe(z());var Me=(r="")=>{try{let[e,t]=r?.split(".");return t?window?.joystick?._internal?.queues[e][t]:window?.joystick?._internal?.queues[e]}catch(e){a("addToQueue.getQueue",e)}},R=(r="",e=null)=>{try{b()||(Me(r)||{}).array.push({callback:e})}catch(t){a("addToQueue",t)}};var G=(r={},e="",t="id")=>{try{let n=r&&r.id;if(q(r)&&n){let o=Object.keys(r);for(let d=0;d<o.length;d+=1){let g=o[d],y=r[g];if(g===t&&y===e)return r;if(g==="children"&&Array.isArray(y))for(let E=0;E<y.length;E+=1){let D=y[E],C=G(D,e,t);if(C!==null)return C}}}return null}catch(n){a("component.findComponentInTreeByField",n)}},k=G;var Q=(r="",e={},t=null)=>{let n=k(t||window.joystick._internal.tree,r,"instanceId");n&&(n.children=[...n.children||[],e])};var ge=(r={},e={})=>{try{let t=L(r,{includeActual:!0});return r.dom=t,r.setDOMNodeOnInstance(),r.appendCSSToHead(),e.renderedComponent=r,t.html.wrapped}catch(t){a("component.renderMethods.component.renderForClient",t)}},Te=(r={})=>{try{return r.renderToHTML({ssrTree:r.parent.ssrTree,translations:r.parent.translations,walkingTreeForSSR:r?.parent?.walkingTreeForSSR,dataFromSSR:r.parent?.dataFromSSR}).wrapped}catch(e){a("component.renderMethods.component.renderToHTMLForSSR",e)}},Fe=(r={})=>{try{return r.parent.ssrTree.dataFunctions.push(async()=>{let e=await r.options.data(r.parent.options.api,r.parent.options.req);return r.data=e||{},{componentId:r.id,ssrId:r.ssrId,data:e}}),r.renderToHTML({ssrTree:r?.parent?.ssrTree,translations:r?.parent?.translations,walkingTreeForSSR:r?.parent?.walkingTreeForSSR,dataFromSSR:r?.parent?.dataFromSSR})}catch(e){a("component.renderMethods.component.collectDataFunctionsForSSR",e)}},Ee=(r={})=>{try{let e={id:r.id,instanceId:r.instanceId,instance:r,children:[]};Q(r.parent.instanceId,e,r.parent&&r.parent.ssrTree||null)}catch(e){a("component.renderMethods.component.handleAddComponentToParent",e)}},Se=(r={},e={})=>{try{!r.renderedComponent&&e.options&&e.options.lifecycle&&(e.options.lifecycle.onBeforeMount&&R("lifecycle.onBeforeMount",()=>{e.options.lifecycle.onBeforeMount(e)}),!r.renderedComponent&&e.options.lifecycle.onMount&&R("lifecycle.onMount",()=>{e.options.lifecycle.onMount(e)}))}catch(t){a("component.renderMethods.component.handleLifecycle",t)}},Oe=(r={},e={},t={})=>{try{!e.walkingTreeForSSR&&r?.options?.lifecycle?.onUpdateProps&&(0,K.diff)(e?.existingPropsMap,t)?.length>0&&R("lifecycle.onUpdateProps",()=>{let o=e?.existingPropsMap&&e?.existingPropsMap[r.id];r.options.lifecycle.onUpdateProps(o||{},t,r)})}catch(n){a("component.renderMethods.component.handleOnChangeProps",n)}},be=function(){return function(e=null,t={},n={}){let o=e({props:t,existingStateMap:!n.walkingTreeForSSR&&n?.existingStateMap,url:n.url,translations:n.translations,api:n.options.api,req:n.options.req,dataFromSSR:n?.dataFromSSR});return o.parent=n,Oe(o,n,t),R("lifecycle.onMount",()=>{o.setDOMNodeOnInstance()}),Se(this,o),Ee(o),o.options.data&&o.parent.walkingTreeForSSR&&o.parent.ssrTree.dataFunctions?Fe(o):o.parent&&o.parent.ssrTree?Te(o):ge(o,this)}},ke=function(e,t){try{let n=this;return new be().bind({})(e,t,n)}catch(n){a("component.renderMethods.component",n)}},P=ke;var Re=function(e=[],t=null){try{return B(t)&&e&&Array.isArray(e)?e.map((n,o)=>t(n,o)).join(""):""}catch(n){a("component.renderMethods.each",n)}},v=Re;var De=function(e="",t={}){try{let n=b()?this.translations:window.__joystick_i18n__;if(!n||!n[e])return"";let o=Object.entries(t);return o.length>0?o.reduce((d,[g,y])=>d.replace(`{{${g}}}`,y),n[e]):n[e]}catch(n){a("component.renderMethods.i18n",n)}},_=De;var Ce=function(e=!1,t=""){try{return this?.renderingHTMLWithDataForSSR||e?`<when>${t.trim()}</when>`:"<when> </when>"}catch(n){a("component.renderMethods.when",n)}},U=Ce;var X={c:P,component:P,e:v,each:v,i:_,i18n:_,w:U,when:U};var J=(r={},e={})=>{try{return Object.entries(X).reduce((t,[n,o])=>(t[n]=o.bind({...r,...e}),t),{})}catch(t){a("component.renderMethods.compile",t)}};var Y=(r={})=>{try{let e={},t=k(window.joystick._internal.tree,r.instanceId);return t&&(e[t?.instance?.instanceId]=t?.instance?.props),t?.children?.reduce((n={},o)=>(n[o?.instance?.instanceId]||(n[o?.instance?.instanceId]=o?.instance?.props),n),e)}catch(e){a("component.render.getExistingPropsMap",e)}};var Z=(r={})=>{try{let e={},t=k(window.joystick._internal.tree,r.instanceId);return t&&(e[t?.instance?.instanceId]=t?.instance?.state),t?.children?.reduce((n={},o)=>(n[o?.instance?.instanceId]||(n[o?.instance?.instanceId]=o?.instance?.state),n),e)}catch(e){a("component.render.getExistingStateMap",e)}};var ee=new RegExp(/\<\!\-\-(?:.|\n|\r)*?-->/g),Ie=new RegExp(/\n/g);var je=(r="")=>{try{return(r.match(ee)||[]).forEach(t=>{r=r.replace(t,"")}),r}catch(e){a("component.render.sanitizeHTML.removeCommentedCode",e)}},re=(r="")=>{try{let e=`${r}`;return e=je(e),e}catch(e){a("component.render.sanitizeHTML",e)}};var te=(r={},e="")=>{try{let{wrapper:t=null,ssrId:n=null,id:o=null,instanceId:d=null}=r;return`<div ${t?.id?`id="${t.id}" `:""}${t?.classList?`class="${t.classList?.join(" ")}" `:""}js-ssrId="${n}" js-c="${o}" js-i="${d}">${e}</div>`}catch(t){a("component.render.wrapHTML",t)}};var ne=(r={},e={})=>{try{e?.dataFromSSR&&(r.data=V(e.dataFromSSR,r.id)||{});let t={...r,getExistingPropsMap:{},existingPropsMap:b()?{}:Y(r),existingStateMap:b()?{}:Z(r),ssrTree:e?.ssrTree,translations:e?.translations||r.translations||{},walkingTreeForSSR:e?.walkingTreeForSSR,renderingHTMLWithDataForSSR:e?.renderingHTMLWithDataForSSR,dataFromSSR:e?.dataFromSSR},n=J(t),o=r.options.render({...r||{},setState:r.setState.bind(r),...n||{}}),d=re(o),g=te(r,d);return{unwrapped:d,wrapped:g}}catch(t){a("component.render.toHTML",t)}};var Le=(r={})=>{try{return Object.values(r).reduce((e={},t)=>(e[t.name]=t.value,e),{})}catch(e){a("component.virtualDOM.build.parseAttributeMap",e)}},oe=(r="")=>{try{let e=r.tagName&&r.tagName.toLowerCase()||"text",t={tagName:e,attributes:Le(r.attributes),children:[].map.call(r.childNodes,n=>oe(n))};return e==="text"&&(t=r.textContent),t}catch(e){a("component.virtualDOM.build.buildVirtualDOMTree",e)}};var ie=(r={})=>{try{return r?.childNodes?.length>0&&[].forEach.call(r.childNodes,e=>{ie(e),e?.tagName==="WHEN"&&e.childNodes?.length===0&&e.replaceWith(document.createTextNode("")),e?.tagName==="WHEN"&&e?.childNodes?.length>0&&e.replaceWith(...e.childNodes)}),r}catch(e){throw new Error(`[actionName.flattenAndReplaceWhenElements] ${e.message}`)}},Ne=(r="",e="")=>{try{let t=document.createElement("div");return t.setAttribute("js-c",e),t.innerHTML=r,ie(t)}catch(t){a("component.virtualDOM.build.buildVirtualDOM",t)}},ae=(r="",e="")=>{try{let t=Ne(r,e);return oe(t)}catch(t){a("component.virtualDOM.build",t)}};var Ae=(r={})=>{try{let e=document.createElement(r.tagName),t=Object.entries(r.attributes);for(let n=0;n<t.length;n+=1){let[o,d]=t[n];e.setAttribute(o,d)}for(let n=0;n<r?.children?.length;n+=1){let o=r?.children[n];if(o){let d=ce(o);e.appendChild(d)}}return e}catch(e){a("component.virtualDOM.renderTreeToDOM.renderElement",e)}},ce=(r=null)=>{try{return W(r)?document.createTextNode(r):Ae(r)}catch(e){a("component.virtualDOM.renderTreeToDOM",e)}},se=ce;var L=(r={},e={})=>{try{let t=ne(r),n=ae(t.unwrapped,r.id),o=e.includeActual&&n?se(n):null;return{html:t,virtual:n,actual:o}}catch(t){a("component.render.getUpdatedDOM",t)}};var it=(r={})=>{try{let e=L(r,{includeActual:!0});return r.dom=e,e.actual}catch(e){a("component.render.forMount",e)}};export{it as default};
