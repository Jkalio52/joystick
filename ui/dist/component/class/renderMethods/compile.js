var pe=Object.create;var A=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var fe=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty;var me=r=>A(r,"__esModule",{value:!0});var we=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ue(e))!he.call(r,n)&&n!=="default"&&A(r,n,{get:()=>e[n],enumerable:!(t=le(e,n))||t.enumerable});return r},xe=r=>ye(me(A(r!=null?pe(fe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var $=we(I=>{(function(r,e){if(typeof define=="function"&&define.amd)define(["exports"],e);else if(typeof I!="undefined")e(I);else{var t={exports:{}};e(t.exports),r.index=t.exports}})(I,function(r){"use strict";function e(a){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(a)}function t(a,i){return i&&(e(i)==="object"||typeof i=="function")?i:n(a)}function n(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function o(a){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},o(a)}function d(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(i&&i.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),i&&g(a,i)}function g(a,i){return g=Object.setPrototypeOf||function(l,x){return l.__proto__=x,l},g(a,i)}function y(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0}),r.diff=void 0;var S=function a(i,l){y(this,a),this.type=i,this.path=l?l.toString():""},C=function(a){function i(l,x,c){var T;return y(this,i),T=t(this,o(i).call(this,"E",l)),T.lhs=x,T.rhs=c,T}return d(i,a),i}(S),D=function(a){function i(l,x,c,T){var u;return y(this,i),u=t(this,o(i).call(this,"M",l)),u.item=x,u.lhsIndex=c,u.rhsIndex=T,u}return d(i,a),i}(S),L=function(a){function i(l,x){var c;return y(this,i),c=t(this,o(i).call(this,"D",l)),c.lhs=x,c}return d(i,a),i}(S),N=function(a){function i(l,x){var c;return y(this,i),c=t(this,o(i).call(this,"A",l)),c.rhs=x,c}return d(i,a),i}(S),E=function(a,i){return a?"".concat(a,".").concat(i):i};r.diff=function(i,l){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},c=[],T=x.matchKey,u=x.types||["E","A","D","M"],de=function(f,p,h,O){f.forEach(function(F,m){var M=p.findIndex(function(w){return w[O]===F[O]});-1<M?(-1<u.indexOf("M")&&m!==M&&c.push(new D(h,F,m,M)),j(F,p[M],E(h,M))):-1<u.indexOf("D")&&c.push(new L(h,F))}),p.forEach(function(F,m){var M=f.findIndex(function(w){return F[O]===w[O]});-1<u.indexOf("A")&&M===-1&&c.push(new N(E(h,m),F))})},j=function(f,p,h){var O=Object.prototype.toString.call(f),F=Object.prototype.toString.call(p);if(-1<u.indexOf("E")&&O!==F)return c.push(new C(h,f,p)),!1;if(O==="[object Object]")Object.getOwnPropertyNames(f).forEach(function(w){Object.prototype.hasOwnProperty.call(p,w)?j(f[w],p[w],E(h,w)):-1<u.indexOf("D")&&c.push(new L(E(h,w),f[w]))}),Object.getOwnPropertyNames(p).forEach(function(w){-1<u.indexOf("A")&&!Object.prototype.hasOwnProperty.call(f,w)&&c.push(new N(E(h,w),p[w]))});else if(O!=="[object Array]")-1<u.indexOf("E")&&f!==p&&c.push(new C(h,f,p));else if(T)de(f,p,h,T);else{var m=f.length-1,M=p.length-1;if(-1<u.indexOf("D"))for(;m>M;)c.push(new L(E(h,m),f[m--]));if(-1<u.indexOf("A"))for(;M>m;)c.push(new N(E(h,M),p[M--]));for(;0<=m;--m)j(f[m],p[m],E(h,m))}};return j(i,l),c}})});var s=(r="",e={})=>{throw new Error(`[joystick${r?`.${r}`:""}] ${e.message||e.reason||e}`)};var ae=xe($());var b=()=>typeof window=="undefined";var Me=(r="")=>{try{let[e,t]=r?.split(".");return t?window?.joystick?._internal?.queues[e][t]:window?.joystick?._internal?.queues[e]}catch(e){s("addToQueue.getQueue",e)}},R=(r="",e=null)=>{try{b()||(Me(r)||{}).array.push({callback:e})}catch(t){s("addToQueue",t)}};var U=r=>{try{return!!Array.isArray(r)}catch(e){s("types.isArray",e)}};var B=r=>{try{return typeof r=="function"}catch(e){s("types.isFunction",e)}};var q=r=>{try{return!!(r&&typeof r=="object"&&!Array.isArray(r))}catch(e){s("types.isObject",e)}};var W=r=>{try{return typeof r=="string"}catch(e){s("types.isString",e)}};var V=(r=[],e="")=>{try{return(U(r)&&r.find(n=>n?.ssrId===e))?.data||{}}catch(t){s("findComponentDataFromSSR",t)}};var z=(r={},e="",t="id")=>{try{let n=r&&r.id;if(q(r)&&n){let o=Object.keys(r);for(let d=0;d<o.length;d+=1){let g=o[d],y=r[g];if(g===t&&y===e)return r;if(g==="children"&&Array.isArray(y))for(let S=0;S<y.length;S+=1){let C=y[S],D=z(C,e,t);if(D!==null)return D}}}return null}catch(n){s("component.findComponentInTreeByField",n)}},k=z;var G=(r={})=>{try{let e={},t=k(window.joystick._internal.tree,r.id);return t&&(e[t?.instance?.id]=t?.instance?.props),t?.children?.reduce((n={},o)=>(n[o?.instance?.id]||(n[o?.instance?.id]=o?.instance?.props),n),e)}catch(e){s("component.render.getExistingPropsMap",e)}};var Q=(r={})=>{try{let e={},t=k(window.joystick._internal.tree,r.id);return t&&(e[t?.instance?.id]=t?.instance?.state),t?.children?.reduce((n={},o)=>(n[o?.instance?.id]||(n[o?.instance?.id]=o?.instance?.state),n),e)}catch(e){s("component.render.getExistingStateMap",e)}};var K=new RegExp(/\<\!\-\-(?:.|\n|\r)*?-->/g),ge=new RegExp(/\n/g);var Te=(r="")=>{try{return(r.match(K)||[]).forEach(t=>{r=r.replace(t,"")}),r}catch(e){s("component.render.sanitizeHTML.removeCommentedCode",e)}},X=(r="")=>{try{let e=`${r}`;return e=Te(e),e}catch(e){s("component.render.sanitizeHTML",e)}};var J=(r={},e="")=>{try{let{wrapper:t=null,ssrId:n=null,id:o=null,instanceId:d=null}=r;return`<div ${t?.id?`id="${t.id}" `:""}${t?.classList?`class="${t.classList?.join(" ")}" `:""}js-ssrId="${n}" js-c="${o}" js-i="${d}">${e}</div>`}catch(t){s("component.render.wrapHTML",t)}};var Y=(r={},e={})=>{try{e?.dataFromSSR&&(r.data=V(e.dataFromSSR,r.ssrId)||{});let t={...r,getExistingPropsMap:{},existingPropsMap:b()?{}:G(r),existingStateMap:b()?{}:Q(r),ssrTree:e?.ssrTree,translations:e?.translations||r.translations||{},walkingTreeForSSR:e?.walkingTreeForSSR,renderingHTMLWithDataForSSR:e?.renderingHTMLWithDataForSSR,dataFromSSR:e?.dataFromSSR},n=Z(t),o=r.options.render({...r||{},setState:r.setState.bind(r),...n||{}}),d=X(o),g=J(r,d);return{unwrapped:d,wrapped:g}}catch(t){s("component.render.toHTML",t)}};var Fe=(r={})=>{try{return Object.values(r).reduce((e={},t)=>(e[t.name]=t.value,e),{})}catch(e){s("component.virtualDOM.build.parseAttributeMap",e)}},ee=(r="")=>{try{let e=r.tagName&&r.tagName.toLowerCase()||"text",t={tagName:e,attributes:Fe(r.attributes),children:[].map.call(r.childNodes,n=>ee(n))};return e==="text"&&(t=r.textContent),t}catch(e){s("component.virtualDOM.build.buildVirtualDOMTree",e)}};var re=(r={})=>{try{return r?.childNodes?.length>0&&[].forEach.call(r.childNodes,e=>{re(e),e?.tagName==="WHEN"&&e.childNodes?.length===0&&e.replaceWith(document.createTextNode("")),e?.tagName==="WHEN"&&e?.childNodes?.length>0&&e.replaceWith(...e.childNodes)}),r}catch(e){throw new Error(`[actionName.flattenAndReplaceWhenElements] ${e.message}`)}},Se=(r="",e="")=>{try{let t=document.createElement("div");return t.setAttribute("js-c",e),t.innerHTML=r,re(t)}catch(t){s("component.virtualDOM.build.buildVirtualDOM",t)}},te=(r="",e="")=>{try{let t=Se(r,e);return ee(t)}catch(t){s("component.virtualDOM.build",t)}};var Ee=(r={})=>{try{let e=document.createElement(r.tagName),t=Object.entries(r.attributes);for(let n=0;n<t.length;n+=1){let[o,d]=t[n];e.setAttribute(o,d)}for(let n=0;n<r?.children?.length;n+=1){let o=r?.children[n];if(o){let d=ne(o);e.appendChild(d)}}return e}catch(e){s("component.virtualDOM.renderTreeToDOM.renderElement",e)}},ne=(r=null)=>{try{return W(r)?document.createTextNode(r):Ee(r)}catch(e){s("component.virtualDOM.renderTreeToDOM",e)}},oe=ne;var ie=(r={},e={})=>{try{let t=Y(r),n=te(t.unwrapped,r.id),o=e.includeActual&&n?oe(n):null;return{html:t,virtual:n,actual:o}}catch(t){s("component.render.getUpdatedDOM",t)}};var se=(r="",e={},t=null)=>{let n=k(t||window.joystick._internal.tree,r,"instanceId");n&&(n.children=[...n.children||[],e])};var Oe=(r={},e={})=>{try{let t=ie(r,{includeActual:!0});return r.dom=t,r.setDOMNodeOnInstance(),r.appendCSSToHead(),e.renderedComponent=r,t.html.wrapped}catch(t){s("component.renderMethods.component.renderForClient",t)}},be=(r={})=>{try{return r.renderToHTML({ssrTree:r.parent.ssrTree,translations:r.parent.translations,walkingTreeForSSR:r?.parent?.walkingTreeForSSR,dataFromSSR:r.parent?.dataFromSSR}).wrapped}catch(e){s("component.renderMethods.component.renderToHTMLForSSR",e)}},ke=(r={})=>{try{return r.parent.ssrTree.dataFunctions.push(async()=>{let e=await r.options.data(r.parent.options.api,r.parent.options.req);return r.data=e||{},{componentId:r.id,ssrId:r.ssrId,data:e}}),r.renderToHTML({ssrTree:r?.parent?.ssrTree,translations:r?.parent?.translations,walkingTreeForSSR:r?.parent?.walkingTreeForSSR,dataFromSSR:r?.parent?.dataFromSSR})}catch(e){s("component.renderMethods.component.collectDataFunctionsForSSR",e)}},Re=(r={})=>{try{let e={id:r.id,instanceId:r.instanceId,instance:r,children:[]};se(r.parent.instanceId,e,r.parent&&r.parent.ssrTree||null)}catch(e){s("component.renderMethods.component.handleAddComponentToParent",e)}},Ce=(r={},e={})=>{try{!r.renderedComponent&&e.options&&e.options.lifecycle&&(e.options.lifecycle.onBeforeMount&&R("lifecycle.onBeforeMount",()=>{e.options.lifecycle.onBeforeMount(e)}),!r.renderedComponent&&e.options.lifecycle.onMount&&R("lifecycle.onMount",()=>{e.options.lifecycle.onMount(e)}))}catch(t){s("component.renderMethods.component.handleLifecycle",t)}},De=(r={},e={},t={})=>{try{!e.walkingTreeForSSR&&r?.options?.lifecycle?.onUpdateProps&&(0,ae.diff)(e?.existingPropsMap,t)?.length>0&&R("lifecycle.onUpdateProps",()=>{let o=e?.existingPropsMap&&e?.existingPropsMap[r.id];r.options.lifecycle.onUpdateProps(o||{},t,r)})}catch(n){s("component.renderMethods.component.handleOnChangeProps",n)}},je=function(){return function(e=null,t={},n={}){let o=e({props:t,existingStateMap:!n.walkingTreeForSSR&&n?.existingStateMap,url:n.url,translations:n.translations,api:n.options.api,req:n.options.req,dataFromSSR:n?.dataFromSSR});return o.parent=n,De(o,n,t),R("lifecycle.onMount",()=>{o.setDOMNodeOnInstance()}),Ce(this,o),Re(o),o.options.data&&o.parent.walkingTreeForSSR&&o.parent.ssrTree.dataFunctions?ke(o):o.parent&&o.parent.ssrTree?be(o):Oe(o,this)}},Ie=function(e,t){try{let n=this;return new je().bind({})(e,t,n)}catch(n){s("component.renderMethods.component",n)}},H=Ie;var Le=function(e=[],t=null){try{return B(t)&&e&&Array.isArray(e)?e.map((n,o)=>t(n,o)).join(""):""}catch(n){s("component.renderMethods.each",n)}},P=Le;var Ne=function(e="",t={}){try{let n=b()?this.translations:window.__joystick_i18n__;if(!n||!n[e])return"";let o=Object.entries(t);return o.length>0?o.reduce((d,[g,y])=>d.replace(`{{${g}}}`,y),n[e]):n[e]}catch(n){s("component.renderMethods.i18n",n)}},v=Ne;var Ae=function(e=!1,t=""){try{return this?.renderingHTMLWithDataForSSR||e?`<when>${t.trim()}</when>`:"<when> </when>"}catch(n){s("component.renderMethods.when",n)}},_=Ae;var ce={c:H,component:H,e:P,each:P,i:v,i18n:v,w:_,when:_};var Z=(r={},e={})=>{try{return Object.entries(ce).reduce((t,[n,o])=>(t[n]=o.bind({...r,...e}),t),{})}catch(t){s("component.renderMethods.compile",t)}};export{Z as default};
