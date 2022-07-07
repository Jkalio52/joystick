var pr=Object.create;var v=Object.defineProperty;var dr=Object.getOwnPropertyDescriptor;var ur=Object.getOwnPropertyNames;var lr=Object.getPrototypeOf,fr=Object.prototype.hasOwnProperty;var hr=r=>v(r,"__esModule",{value:!0});var mr=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var wr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ur(e))!fr.call(r,o)&&o!=="default"&&v(r,o,{get:()=>e[o],enumerable:!(t=dr(e,o))||t.enumerable});return r},yr=r=>wr(hr(v(r!=null?pr(lr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var V=mr(C=>{(function(r,e){if(typeof define=="function"&&define.amd)define(["exports"],e);else if(typeof C!="undefined")e(C);else{var t={exports:{}};e(t.exports),r.index=t.exports}})(C,function(r){"use strict";function e(c){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(c)}function t(c,n){return n&&(e(n)==="object"||typeof n=="function")?n:o(c)}function o(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function s(c){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},s(c)}function p(c,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(n&&n.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),n&&x(c,n)}function x(c,n){return x=Object.setPrototypeOf||function(u,M){return u.__proto__=M,u},x(c,n)}function h(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0}),r.diff=void 0;var E=function c(n,u){h(this,c),this.type=n,this.path=u?u.toString():""},k=function(c){function n(u,M,a){var S;return h(this,n),S=t(this,s(n).call(this,"E",u)),S.lhs=M,S.rhs=a,S}return p(n,c),n}(E),R=function(c){function n(u,M,a,S){var l;return h(this,n),l=t(this,s(n).call(this,"M",u)),l.item=M,l.lhsIndex=a,l.rhsIndex=S,l}return p(n,c),n}(E),A=function(c){function n(u,M){var a;return h(this,n),a=t(this,s(n).call(this,"D",u)),a.lhs=M,a}return p(n,c),n}(E),I=function(c){function n(u,M){var a;return h(this,n),a=t(this,s(n).call(this,"A",u)),a.rhs=M,a}return p(n,c),n}(E),O=function(c,n){return c?"".concat(c,".").concat(n):n};r.diff=function(n,u){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},a=[],S=M.matchKey,l=M.types||["E","A","D","M"],ar=function(f,d,m,F){f.forEach(function(g,w){var T=d.findIndex(function(y){return y[F]===g[F]});-1<T?(-1<l.indexOf("M")&&w!==T&&a.push(new R(m,g,w,T)),j(g,d[T],O(m,T))):-1<l.indexOf("D")&&a.push(new A(m,g))}),d.forEach(function(g,w){var T=f.findIndex(function(y){return g[F]===y[F]});-1<l.indexOf("A")&&T===-1&&a.push(new I(O(m,w),g))})},j=function(f,d,m){var F=Object.prototype.toString.call(f),g=Object.prototype.toString.call(d);if(-1<l.indexOf("E")&&F!==g)return a.push(new k(m,f,d)),!1;if(F==="[object Object]")Object.getOwnPropertyNames(f).forEach(function(y){Object.prototype.hasOwnProperty.call(d,y)?j(f[y],d[y],O(m,y)):-1<l.indexOf("D")&&a.push(new A(O(m,y),f[y]))}),Object.getOwnPropertyNames(d).forEach(function(y){-1<l.indexOf("A")&&!Object.prototype.hasOwnProperty.call(f,y)&&a.push(new I(O(m,y),d[y]))});else if(F!=="[object Array]")-1<l.indexOf("E")&&f!==d&&a.push(new k(m,f,d));else if(S)ar(f,d,m,S);else{var w=f.length-1,T=d.length-1;if(-1<l.indexOf("D"))for(;w>T;)a.push(new A(O(m,w),f[w--]));if(-1<l.indexOf("A"))for(;T>w;)a.push(new I(O(m,T),d[T--]));for(;0<=w;--w)j(f[w],d[w],O(m,w))}};return j(n,u),a}})});var i=(r="",e={})=>{throw new Error(`[joystick${r?`.${r}`:""}] ${e.message||e.reason||e}`)};var U=r=>{try{return!!Array.isArray(r)}catch(e){i("types.isArray",e)}};var $=r=>{try{return typeof r=="function"}catch(e){i("types.isFunction",e)}};var q=r=>{try{return!!(r&&typeof r=="object"&&!Array.isArray(r))}catch(e){i("types.isObject",e)}};var D=r=>{try{return typeof r=="string"}catch(e){i("types.isString",e)}};var z=(r=[],e="")=>{try{return(U(r)&&r.find(o=>o?.ssrId===e))?.data||{}}catch(t){i("findComponentDataFromSSR",t)}};var B=yr(V());var L=()=>typeof window=="undefined";var xr=(r="")=>{try{let[e,t]=r?.split(".");return t?window?.joystick?._internal?.queues[e][t]:window?.joystick?._internal?.queues[e]}catch(e){i("addToQueue.getQueue",e)}},b=(r="",e=null)=>{try{L()||(xr(r)||{}).array.push({callback:e})}catch(t){i("addToQueue",t)}};var G=(r={},e="",t=null)=>{try{let o=r&&r.id;if(q(r)&&o){let s=Object.keys(r);for(let p=0;p<s.length;p+=1){let x=s[p],h=r[x];if(x==="id"&&h===e)return r;if(x==="children"&&Array.isArray(h))for(let E=0;E<h.length;E+=1){let k=h[E],R=G(k,e,t);if(R!==null)return R}}}return null}catch(o){i("component.findComponentInTree",o)}},Q=G;var Mr=(r={},e={})=>{try{let t=K(r,{includeActual:!0});return r.dom=t,r.setDOMNodeOnInstance(),r.attachEventsToDOM(),r.appendCSSToHead(),e.renderedComponent=r,t.html.wrapped}catch(t){i("component.renderMethods.component.renderForClient",t)}},Tr=(r={})=>{try{return r.renderToHTML({ssrTree:r.parent.ssrTree,translations:r.parent.translations,walkingTreeForSSR:r?.parent?.walkingTreeForSSR,dataFromSSR:r.parent?.dataFromSSR}).wrapped}catch(e){i("component.renderMethods.component.renderToHTMLForSSR",e)}},Sr=(r={})=>{try{return r.parent.ssrTree.dataFunctions.push(async()=>{let e=await r.options.data(r.parent.options.api,r.parent.options.req);return r.data=e||{},{componentId:r.id,ssrId:r.ssrId,data:e}}),r.renderToHTML({ssrTree:r?.parent?.ssrTree,translations:r?.parent?.translations,walkingTreeForSSR:r?.parent?.walkingTreeForSSR,dataFromSSR:r?.parent?.dataFromSSR})}catch(e){i("component.renderMethods.component.collectDataFunctionsForSSR",e)}},gr=(r={})=>{try{let e=Q(r.parent.ssrTree||window.joystick._internal.tree,r.parent.id);e?.children&&e.children.push({id:r.id,instance:r,children:[]})}catch(e){i("component.renderMethods.component.handleAddComponentToParent",e)}},Er=(r={},e={})=>{try{!r.renderedComponent&&e.options&&e.options.lifecycle&&(e.options.lifecycle.onBeforeMount&&b("lifecycle.onBeforeMount",()=>{e.options.lifecycle.onBeforeMount(e)}),!r.renderedComponent&&e.options.lifecycle.onMount&&b("lifecycle.onMount",()=>{e.options.lifecycle.onMount(e)}))}catch(t){i("component.renderMethods.component.handleLifecycle",t)}},Or=(r={},e={},t={})=>{try{!e.walkingTreeForSSR&&r?.options?.lifecycle?.onUpdateProps&&(0,B.diff)(e?.existingPropsMap,t)?.length>0&&b("lifecycle.onUpdateProps",()=>{let s=e?.existingPropsMap&&e?.existingPropsMap[r.ssrId];r.options.lifecycle.onUpdateProps(s||{},t,r)})}catch(o){i("component.renderMethods.component.handleOnChangeProps",o)}},Fr=function(){return function(e=null,t={},o={}){let s=e({props:t,existingStateMap:!o.walkingTreeForSSR&&o?.existingStateMap,url:o.url,translations:o.translations,api:o.options.api,req:o.options.req,dataFromSSR:o?.dataFromSSR});return s.parent=o,Or(s,o,t),b("lifecycle.onMount",()=>{console.log("ON MOUNT LIFECYCLE"),s.setDOMNodeOnInstance()}),Er(this,s),gr(s),s.options.data&&s.parent.walkingTreeForSSR&&s.parent.ssrTree.dataFunctions?Sr(s):s.parent&&s.parent.ssrTree?Tr(s):Mr(s,this)}},br=function(e,t){try{let o=this;return new Fr().bind({})(e,t,o)}catch(o){i("component.renderMethods.component",o)}},N=br;var kr=function(e=[],t=null){try{return $(t)&&e&&Array.isArray(e)?e.map((o,s)=>t(o,s)).join(""):""}catch(o){i("component.renderMethods.each",o)}},P=kr;var Rr=function(e="",t={}){try{let o=L()?this.translations:window.__joystick_i18n__;if(!o||!o[e])return"";let s=Object.entries(t);return s.length>0?s.reduce((p,[x,h])=>p.replace(`{{${x}}}`,h),o[e]):o[e]}catch(o){i("component.renderMethods.i18n",o)}},_=Rr;var jr=function(e=!1,t=""){try{return e?t:""}catch(o){i("component.renderMethods.when",o)}},H=jr;var X={c:N,component:N,e:P,each:P,i:_,i18n:_,w:H,when:H};var Y=(r={},e={})=>{try{return Object.entries(X).reduce((t,[o,s])=>(t[o]=s.bind({...r,...e}),t),{})}catch(t){i("component.renderMethods.compile",t)}};var J=(r={})=>{try{return r?.componentInTree?.children?.reduce((e={},t)=>(e[t?.instance?.ssrId]||(e[t?.instance?.ssrId]=t?.instance?.props),e),{})}catch(e){i("component.render.getExistingPropsMap",e)}};var W=(r={})=>{try{return r?.componentInTree?.children?.reduce((e={},t)=>(e[t?.instance?.ssrId]||(e[t?.instance?.ssrId]=t?.instance?.state),e),{})}catch(e){i("component.render.getExistingStateMap",e)}};var Z=new RegExp(/\<\!\-\-(?:.|\n|\r)*?-->/g),rr=new RegExp(/(\r\n|\n|\r)/gm,"");var Dr=(r="")=>{try{return r.replace(rr,"")}catch(e){i("component.render.sanitizeHTML.removeNewLineCharacters",e)}},Cr=(r="")=>{try{return(r.match(Z)||[]).forEach(t=>{r=r.replace(t,"")}),r}catch(e){i("component.render.sanitizeHTML.removeCommentedCode",e)}},er=(r="")=>{try{let e=`${r}`;return e=Cr(e),e=Dr(e),e}catch(e){i("component.render.sanitizeHTML",e)}};var tr=(r={},e="")=>{try{let{wrapper:t=null,ssrId:o=null,id:s=null}=r;return`<div ${t?.id?`id="${t.id}" `:""}${t?.classList?`class="${t.classList?.join(" ")}" `:""}js-ssrId="${o}" js-c="${s}">${e}</div>`}catch(t){i("component.render.wrapHTML",t)}};var or=(r={},e={})=>{try{e?.dataFromSSR&&(r.data=z(e.dataFromSSR,r.ssrId)||{});let t=J(r),o=W(r),s=Y({...r,existingPropsMap:t,existingStateMap:o,ssrTree:e?.ssrTree,translations:e?.translations||r.translations||{},walkingTreeForSSR:e?.walkingTreeForSSR,dataFromSSR:e?.dataFromSSR}),p=r.options.render({...r||{},setState:r.setState.bind(r),...s||{}}),x=er(p),h=tr(r,x);return{unwrapped:x,wrapped:h}}catch(t){i("component.render.toHTML",t)}};var Lr=(r={})=>{try{return Object.values(r).reduce((e={},t)=>(e[t.name]=t.value,e),{})}catch(e){i("component.virtualDOM.build.parseAttributeMap",e)}},nr=(r="")=>{try{let e=r.tagName&&r.tagName.toLowerCase()||"text",t={tagName:e,attributes:Lr(r.attributes),children:[].map.call(r.childNodes,o=>nr(o))};return e==="text"&&(t=r.textContent),t}catch(e){i("component.virtualDOM.build.buildVirtualDOMTree",e)}},Ar=(r="",e="")=>{try{if(!r||!D(r))return null;let t=document.createElement("div");return t.setAttribute("js-c",e),t.innerHTML=r,t}catch(t){i("component.virtualDOM.build.buildVirtualDOM",t)}},ir=(r="",e="")=>{try{let t=Ar(r,e);return nr(t)}catch(t){i("component.virtualDOM.build",t)}};var Ir=(r={})=>{try{let e=document.createElement(r.tagName),t=Object.entries(r.attributes);for(let o=0;o<t.length;o+=1){let[s,p]=t[o];e.setAttribute(s,p)}for(let o=0;o<r?.children?.length;o+=1){let s=r?.children[o];if(s){let p=sr(s);e.appendChild(p)}}return e}catch(e){i("component.virtualDOM.renderTreeToDOM.renderElement",e)}},sr=(r=null)=>{try{return D(r)?document.createTextNode(r):Ir(r)}catch(e){i("component.virtualDOM.renderTreeToDOM",e)}},cr=sr;var K=(r={},e={})=>{try{let t=or(r),o=ir(t.unwrapped,r.id),s=e.includeActual&&o?cr(o):null;return{html:t,virtual:o,actual:s}}catch(t){i("component.render.getUpdatedDOM",t)}};export{K as default};
