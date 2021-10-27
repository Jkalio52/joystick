var we=Object.create;var R=Object.defineProperty;var ve=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,Ce=Object.prototype.hasOwnProperty;var Se=t=>R(t,"__esModule",{value:!0});var je=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var _e=(t,e,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of be(e))!Ce.call(t,n)&&n!=="default"&&R(t,n,{get:()=>e[n],enumerable:!(o=ve(e,n))||o.enumerable});return t},ke=t=>_e(Se(R(t!=null?we(xe(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var V=je((T,I)=>{var P=[].slice;(function(t,e){return typeof define=="function"&&define.amd!=null?define([],e):typeof T!="undefined"&&T!==null?I.exports=e():t.UrlPattern=e()})(T,function(){var t,e,o,n,r,a,u,d,p,v,x,O,L,k,S;return p=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},u=function(s,i){var c,l,f;for(f=[],c=-1,l=s.length;++c<l;)f=f.concat(i(s[c]));return f},k=function(s,i){var c,l,f;for(f="",c=-1,l=s.length;++c<l;)f+=i(s[c]);return f},L=function(s){return new RegExp(s.toString()+"|").exec("").length-1},x=function(s,i){var c,l,f,h,m;for(h={},c=-1,f=s.length;++c<f;)l=s[c],m=i[c],m!=null&&(h[l]!=null?(Array.isArray(h[l])||(h[l]=[h[l]]),h[l].push(m)):h[l]=m);return h},t={},t.Result=function(s,i){this.value=s,this.rest=i},t.Tagged=function(s,i){this.tag=s,this.value=i},t.tag=function(s,i){return function(c){var l,f;if(l=i(c),l!=null)return f=new t.Tagged(s,l.value),new t.Result(f,l.rest)}},t.regex=function(s){return function(i){var c,l;if(c=s.exec(i),c!=null)return l=c[0],new t.Result(l,i.slice(l.length))}},t.sequence=function(){var s;return s=1<=arguments.length?P.call(arguments,0):[],function(i){var c,l,f,h,m,y;for(c=-1,l=s.length,y=[],h=i;++c<l;){if(f=s[c],m=f(h),m==null)return;y.push(m.value),h=m.rest}return new t.Result(y,h)}},t.pick=function(){var s,i;return s=arguments[0],i=2<=arguments.length?P.call(arguments,1):[],function(c){var l,f;if(f=t.sequence.apply(t,i)(c),f!=null)return l=f.value,f.value=l[s],f}},t.string=function(s){var i;return i=s.length,function(c){if(c.slice(0,i)===s)return new t.Result(s,c.slice(i))}},t.lazy=function(s){var i;return i=null,function(c){return i==null&&(i=s()),i(c)}},t.baseMany=function(s,i,c,l,f){var h,m,y,j;for(y=f,j=c?"":[];!(i!=null&&(h=i(y),h!=null)||(m=s(y),m==null));)c?j+=m.value:j.push(m.value),y=m.rest;if(!(l&&j.length===0))return new t.Result(j,y)},t.many1=function(s){return function(i){return t.baseMany(s,null,!1,!0,i)}},t.concatMany1Till=function(s,i){return function(c){return t.baseMany(s,i,!0,!0,c)}},t.firstChoice=function(){var s;return s=1<=arguments.length?P.call(arguments,0):[],function(i){var c,l,f,h;for(c=-1,l=s.length;++c<l;)if(f=s[c],h=f(i),h!=null)return h}},O=function(s){var i;return i={},i.wildcard=t.tag("wildcard",t.string(s.wildcardChar)),i.optional=t.tag("optional",t.pick(1,t.string(s.optionalSegmentStartChar),t.lazy(function(){return i.pattern}),t.string(s.optionalSegmentEndChar))),i.name=t.regex(new RegExp("^["+s.segmentNameCharset+"]+")),i.named=t.tag("named",t.pick(1,t.string(s.segmentNameStartChar),t.lazy(function(){return i.name}))),i.escapedChar=t.pick(1,t.string(s.escapeChar),t.regex(/^./)),i.static=t.tag("static",t.concatMany1Till(t.firstChoice(t.lazy(function(){return i.escapedChar}),t.regex(/^./)),t.firstChoice(t.string(s.segmentNameStartChar),t.string(s.optionalSegmentStartChar),t.string(s.optionalSegmentEndChar),i.wildcard))),i.token=t.lazy(function(){return t.firstChoice(i.wildcard,i.optional,i.named,i.static)}),i.pattern=t.many1(t.lazy(function(){return i.token})),i},d={escapeChar:"\\",segmentNameStartChar:":",segmentValueCharset:"a-zA-Z0-9-_~ %",segmentNameCharset:"a-zA-Z0-9",optionalSegmentStartChar:"(",optionalSegmentEndChar:")",wildcardChar:"*"},a=function(s,i){if(Array.isArray(s))return k(s,function(c){return a(c,i)});switch(s.tag){case"wildcard":return"(.*?)";case"named":return"(["+i+"]+)";case"static":return p(s.value);case"optional":return"(?:"+a(s.value,i)+")?"}},r=function(s,i){return i==null&&(i=d.segmentValueCharset),"^"+a(s,i)+"$"},n=function(s){if(Array.isArray(s))return u(s,n);switch(s.tag){case"wildcard":return["_"];case"named":return[s.value];case"static":return[];case"optional":return n(s.value)}},v=function(s,i,c,l){var f,h,m,y;if(l==null&&(l=!1),y=s[i],y==null){if(l)throw new Error("no values provided for key `"+i+"`");return}if(f=c[i]||0,h=Array.isArray(y)?y.length-1:0,f>h){if(l)throw new Error("too few values provided for key `"+i+"`");return}return m=Array.isArray(y)?y[f]:y,l&&(c[i]=f+1),m},o=function(s,i,c){var l,f;if(Array.isArray(s)){for(l=-1,f=s.length;++l<f;)if(o(s[l],i,c))return!0;return!1}switch(s.tag){case"wildcard":return v(i,"_",c,!1)!=null;case"named":return v(i,s.value,c,!1)!=null;case"static":return!1;case"optional":return o(s.value,i,c)}},S=function(s,i,c){if(Array.isArray(s))return k(s,function(l){return S(l,i,c)});switch(s.tag){case"wildcard":return v(i,"_",c,!0);case"named":return v(i,s.value,c,!0);case"static":return s.value;case"optional":return o(s.value,i,c)?S(s.value,i,c):""}},e=function(s,i){var c,l,f,h,m;if(s instanceof e){this.isRegex=s.isRegex,this.regex=s.regex,this.ast=s.ast,this.names=s.names;return}if(this.isRegex=s instanceof RegExp,!(typeof s=="string"||this.isRegex))throw new TypeError("argument must be a regex or a string");if(this.isRegex){if(this.regex=s,i!=null){if(!Array.isArray(i))throw new Error("if first argument is a regex the second argument may be an array of group names but you provided something else");if(c=L(this.regex),i.length!==c)throw new Error("regex contains "+c+" groups but array of group names contains "+i.length);this.names=i}return}if(s==="")throw new Error("argument must not be the empty string");if(m=s.replace(/\s+/g,""),m!==s)throw new Error("argument must not contain whitespace");if(l={escapeChar:(i!=null?i.escapeChar:void 0)||d.escapeChar,segmentNameStartChar:(i!=null?i.segmentNameStartChar:void 0)||d.segmentNameStartChar,segmentNameCharset:(i!=null?i.segmentNameCharset:void 0)||d.segmentNameCharset,segmentValueCharset:(i!=null?i.segmentValueCharset:void 0)||d.segmentValueCharset,optionalSegmentStartChar:(i!=null?i.optionalSegmentStartChar:void 0)||d.optionalSegmentStartChar,optionalSegmentEndChar:(i!=null?i.optionalSegmentEndChar:void 0)||d.optionalSegmentEndChar,wildcardChar:(i!=null?i.wildcardChar:void 0)||d.wildcardChar},h=O(l),f=h.pattern(s),f==null)throw new Error("couldn't parse pattern");if(f.rest!=="")throw new Error("could only partially parse pattern");this.ast=f.value,this.regex=new RegExp(r(this.ast,l.segmentValueCharset)),this.names=n(this.ast)},e.prototype.match=function(s){var i,c;return c=this.regex.exec(s),c==null?null:(i=c.slice(1),this.names?x(this.names,i):i)},e.prototype.stringify=function(s){if(s==null&&(s={}),this.isRegex)throw new Error("can't stringify patterns generated from a regex");if(s!==Object(s))throw new Error("argument must be an object or undefined");return S(this.ast,s,{})},e.escapeForRegex=p,e.concatMap=u,e.stringConcatMap=k,e.regexGroupCount=L,e.keysAndValuesToObject=x,e.P=t,e.newParser=O,e.defaultOptions=d,e.astNodeToRegexString=r,e.astNodeToNames=n,e.getParam=v,e.astNodeContainsSegmentsForProvidedParams=o,e.stringify=S,e})});var q=ke(V());var g=(t="")=>{throw new Error(`[joystick] ${t}`)};var $={events:["readystatechange","pointerlockchange","pointerlockerror","beforecopy","beforecut","beforepaste","freeze","resume","search","securitypolicyviolation","visibilitychange","fullscreenchange","fullscreenerror","webkitfullscreenchange","webkitfullscreenerror","beforexrselect","abort","blur","cancel","canplay","canplaythrough","change","click","close","contextmenu","cuechange","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","ended","error","focus","formdata","input","invalid","keydown","keypress","keyup","load","loadeddata","loadedmetadata","loadstart","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","pause","play","playing","progress","ratechange","reset","resize","scroll","seeked","seeking","select","stalled","submit","suspend","timeupdate","toggle","volumechange","waiting","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend","wheel","auxclick","gotpointercapture","lostpointercapture","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","pointerenter","pointerleave","selectstart","selectionchange","animationend","animationiteration","animationstart","transitionrun","transitionstart","transitionend","transitioncancel","copy","cut","paste","pointerrawupdate"],lifecycle:["onBeforeMount","onMount","onBeforeUnmount"],options:["name","props","state","lifecycle","methods","events","css","render"]},B={options:["render"]},Te={name:t=>{typeof t!="string"&&g("options.name must be a string.")},lifecycle:t=>{t instanceof Object||g("options.lifecycle must be an object.");for(let[e,o]of Object.entries(t))$.lifecycle.includes(e)||g(`options.lifecycle.${e} is not supported.`),typeof o!="function"&&g(`options.lifecycle.${e} must be assigned a function.`)},methods:t=>{t instanceof Object||g("options.methods must be an object.");for(let[e,o]of Object.entries(t))typeof o!="function"&&g(`options.methods.${e} must be assigned a function.`)},events:t=>{t instanceof Object||g("options.events must be an object.");for(let e of Object.keys(t)){let[o]=e.split(" ");$.events.includes(o)||g(`${o} is not a supported JavaScript event type.`)}for(let[e,o]of Object.entries(t))typeof o!="function"&&g(`options.events.${e} must be assigned a function.`)},css:t=>{typeof t!="string"&&typeof t!="function"&&g("options.css must be a string or function returning a string.")},render:t=>{typeof t!="function"&&g("options.render must be a function returning a string.")}},H=(t={})=>{B.options.every(e=>Object.keys(t).includes(e))||g(`component options must include ${B.options.join(",")}.`);for(let[e,o]of Object.entries(t)){$.options.includes(e)||g(`${e} is not supported by joystick.component.`);let n=Te[e];n&&typeof n=="function"&&n(o)}};var F=(t={})=>Object.entries(t).map(([e,o])=>{let[n,r]=e.split(" ");return{type:n.toLowerCase(),selector:r,handler:o}});var M=(t="")=>{let e=[],o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];for(let n=0;n<t;n++)e.push(o[Math.floor(Math.random()*16)]);return e.join("")};var D=({joystickInstance:t,id:e,parentId:o,element:n,eventType:r,eventListener:a})=>{n||g("Must pass an element to addEventListener."),r||g("Must pass an eventType to addEventListener."),a||g("Must pass an eventListener to addEventListener."),n.addEventListener(r,a),t._internal.eventListeners.attached.push({id:e,eventId:M(8),parentId:o,element:n,eventType:r,eventListener:a})};var A=(t=[])=>{for(let e of t)e.element&&e.eventType&&e.eventListener&&e.element.removeEventListener(e.eventType,e.eventListener)};var Me=(t={})=>Object.entries(t).reduce((e={},[o,n])=>(e[n.name]=n.value,e),{}),G=(t=null)=>{if(t){let e=t.tagName&&t.tagName.toLowerCase()||"text",o={tagName:e,attributes:Me(t.attributes),children:[].map.call(t.childNodes,n=>G(n))};return e==="text"&&(o=t.textContent),o}},J=G;var Ae=(t="",e="")=>{if(t&&typeof t=="string"){let o=document.createElement("div");return o.setAttribute("js-c",e),o.innerHTML=t,o}return null},K=Ae;var Ee=({tagName:t,attributes:e,children:o})=>{let n=document.createElement(t);for(let[r,a]of Object.entries(e))n.setAttribute(r,a);for(let r of o){let a=U(r);n.appendChild(a)}return n},U=t=>typeof t=="string"?document.createTextNode(t):Ee(t),C=U;var Oe=(t,e)=>{let o=[];for(let n=0;n<Math.max(t.length,e.length);n++)o.push([t[n],e[n]]);return o},Le=(t,e)=>{let o=[];for(let[n,r]of Object.entries(e))o.push(a=>(a&&a.setAttribute(n,r),a));for(let n in t)n in e||o.push(r=>(r&&r.removeAttribute(n),r));return n=>{for(let r of o)r&&typeof r=="function"&&r(n)}},Re=(t,e)=>{let o=[];t.forEach((r,a)=>{o.push(W(r,e[a]))});let n=[];for(let r of e.slice(t.length))n.push(a=>(a.appendChild(C(r)),a));return r=>{if(r){for(let[a,u]of Oe(o,r.childNodes))a&&typeof a=="function"&&a(u);for(let a of n)a&&typeof a=="function"&&a(r)}return r}},W=(t,e)=>{if(e===void 0)return r=>{r.remove()};if(typeof t=="string"||typeof e=="string")return t!==e?r=>{let a=C(e);return r.replaceWith(a),a}:r=>{};if(t.tagName!==e.tagName)return r=>{let a=C(e);return r.replaceWith(a),a};let o=Le(t.attributes,e.attributes),n=Re(t.children,e.children);return r=>(o(r),n(r),r)},X=W;var Y=new RegExp(/\<\!\-\-(?:.|\n|\r)*?-->/g);var Z=class{constructor(e={},o={},n=null){H(e),this.id=M(8),this.dom={virtual:{},actual:{}},this.options=e||{},this.name="",this.props=e.props||{},this.state={},this.lifecycle={onBeforeMount:()=>null,onMount:()=>null,onBeforeUnmount:()=>null},this.methods={},this.events={},this.css="",this.children=[],this.translations=n,this.handleAttachOptionsToInstance(),typeof window=="undefined"&&(this.url={...o,isActive:r=>!!new q.default(o.route).match(r)}),typeof window!="undefined"&&window.__joystick_url__&&(this.url={...window.__joystick_url__,isActive:r=>!!new q.default(window.__joystick_url__.route).match(r)})}handleGetJoystickInstance(){return typeof window!="undefined"?w&&w.mountedInstance?w:window.__joystick__:w}handleSetProps(e){this.props=e}handleAttachOptionsToInstance(){this.handleAttachState(this.options?.state),this.handleAttachLifecycleMethods(this.options?.lifecycle),this.handleAttachMethods(this.options?.methods)}handleAttachState(e={}){if(typeof e=="function"){let o=e(this);if(o&&typeof o=="object"&&!Array.isArray(o)){this.state=Object.assign({},o);return}}this.state=Object.assign({},e)}handleAttachLifecycleMethods(e={}){this.lifecycle=Object.entries(e).reduce((o={},[n,r])=>(o[n]=()=>r(this),o),{})}handleAttachMethods(e={}){this.methods=Object.entries(e).reduce((o={},[n,r])=>(o[n]=(...a)=>r(...a,this),o),{})}handleAttachEvents(e=null){let o=F(this.options?.events),n=this;if(this.lifecycle&&this.lifecycle.onBeforeUnmount&&typeof this.lifecycle.onBeforeUnmount=="function"){let a=function(){n.lifecycle.onBeforeUnmount(n)};window.removeEventListener("beforeunload",a),window.addEventListener("beforeunload",a)}let r=this.handleGetJoystickInstance();o.forEach(a=>{r._internal.eventListeners.queue.array.push({callback:()=>{let u=document.querySelector(`[js-c="${this.id}"] ${a.selector}`);u&&D({joystickInstance:r,id:this.id,parentId:e?.id,element:u,eventType:a.type,eventListener:function(p){Object.defineProperty(p,"target",{value:p.composedPath()[0]}),a.handler(p,n)}})}})})}handleDetachEvents(){let e=this.handleGetJoystickInstance(),o=e._internal.eventListeners.attached.filter(({id:r,parentId:a})=>r===this.id||a===this.id),n=o.map(({eventId:r})=>r);A(o),e._internal.eventListeners.attached=e._internal.eventListeners.attached.filter(({eventId:r})=>!n.includes(r))}handleAttachCSS(){let e=this.handleCompileCSS();if(e){let o=btoa(e.trim()).substring(0,8),n=document.head.querySelector(`[js-c-id="${this.id}"]`),r=document.head.querySelector(`[js-css="${o}"]`);if(n&&!r&&document.head.removeChild(n),!r){let u=document.createElement("style");u.innerHTML=this.handlePrefixCSS(this.options.css,this.id),u.setAttribute("js-c-id",this.id),u.setAttribute("js-css",o),document.head.appendChild(u)}}}handleCompileCSS(){return this.options?.css&&typeof this.options?.css=="string"?this.options.css:this.options?.css&&typeof this.options?.css=="function"?this.options.css(this):""}handlePrefixCSS(e="",o=""){let n=this.handleGetCSSRules(e);return Object.entries(n).map(([u,d])=>d).map(u=>{if(u.type===1)return`[js-c="${o}"] ${u.cssText}`;if(u.type===4)return`
          @media ${u.conditionText} {
            ${Object.entries(u.cssRules).map(([d,p])=>`[js-c="${o}"] ${p.cssText}`).join(`
`)}
          }
        `}).join(`
`)}handleGetCSSRules(e=""){let o=document.implementation.createHTMLDocument(""),n=document.createElement("style");return n.textContent=e,o.body.appendChild(n),n.sheet.cssRules}handleOnBeforeMount(){this.options.lifecycle&&this.options.lifecycle.onBeforeMount&&this.options.lifecycle.onBeforeMount(this)}handleOnMount(){this.options.lifecycle&&this.options.lifecycle.onMount&&this.options.lifecycle.onMount(this)}handleWrapHTMLForRender(e=""){return`<div js-c="${this.id}">${e}</div>`}getDOMNodeToPatch=(e={})=>e?document.querySelector(`[js-c="${e?.attributes["js-c"]}"]`):null;render(e={}){if(e&&e.mounting){let r=this.renderToDOM({includeActual:!0});return this.dom=r,r.actual}let o=this.renderToDOM({includeActual:!0}),n=X(this.dom.virtual,o.virtual);n&&typeof n=="function"&&(this.handleDetachEvents(),this.dom.actual=n(this.getDOMNodeToPatch(this.dom.virtual)),this.dom.virtual=o.virtual,this.handleAttachCSS(),this.handleAttachEvents(),this.handleGetJoystickInstance()._internal.eventListeners.queue.process())}handleSanitizeHTML(e=""){let o=`${e}`;return(o.match(Y)||[]).forEach(r=>{o=o.replace(r,"")}),o}handleGetSanitizedThis(){let e=this,o=typeof e.state=="function"?e.state(this):e.state;return e.state=o,e}renderToHTML(e=null,o=null){let n=this.handleGetSanitizedThis(),r=this.options.render({...n,...Object.entries(N).reduce((d,[p,v])=>(d[p]=v.bind({...n,ssrTree:e,translations:o||this.translations||{}}),d),{})}),a=this.handleSanitizeHTML(r),u=this.handleWrapHTMLForRender(a);return{unwrapped:a,wrapped:u}}renderToDOM(e={}){let o=this.renderToHTML(),n=J(K(o.unwrapped,this.id)),r=e.includeActual?C(n):null;return{virtual:n,actual:r}}setState(e={},o=null){this.state=Object.assign(this.state,e),this.render(),o&&typeof o=="function"&&o()}},Q=Z;var ee=(t={})=>(e,o={},n={})=>new Q({...t,props:e},o,n);var te=(t,e)=>e?(e.innerHTML="",e.appendChild(t),t):null;var Pe=()=>{let t=document.querySelector("style[js-css-ssr]"),e=document.querySelectorAll("style[js-css]");t&&t.parentNode.removeChild(t),e&&[].forEach.call(e,o=>{o.parentNode.removeChild(o)})},ne=(t,e={},o)=>{let n=t(e);w._internal.tree={id:n.id,instance:n,children:[]},w.mountedInstance=!0,typeof window!="undefined"&&(window.__joystick__=w,window.__joystick__.utils={removeEventListeners:A}),n.handleSetProps(e),n.handleOnBeforeMount(),Pe();let r=n.render({mounting:!0});return w._internal.lifecycle.onBeforeMount.process(),te(r,o),n.handleAttachCSS(),n.handleAttachEvents(),w._internal.eventListeners.queue.process(),n.handleOnMount(),w._internal.lifecycle.onMount.process(),n};var re=class{constructor(e=[]){this.array=[...e],this.array.push=function(){Array.prototype.push.apply(this,arguments)}}async process(){if(this.array.length>0){let e=this.array.shift();e&&e.callback&&(await e.callback(),this.process())}}},E=re;var oe=(t="",e={})=>{if(fetch)return new Promise((o,n)=>{let r=JSON.stringify(e.input||{}),a=JSON.stringify(e.output||{}),u={method:"GET",mode:"cors",credentials:"include"};e?.headers&&(u.headers=e?.headers),fetch(`${window.location.origin}/api/_getters/${t}?input=${r}&output=${a}`,u).then(async d=>{let p=await d.json();return p&&p.errors?(console.log("%c\u274C get request failed with the following errors:",'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),p.errors.forEach(v=>{console.log(v.message),v.stack&&console.log(v.stack)}),n(p)):(o(p),p)}).catch(d=>(console.log("%c\u274C get request failed with the following network error:",'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),console.log(d),n(d),d))})};var ie=(t="",e={})=>{if(fetch)return new Promise((o,n)=>fetch(`${window.location.origin}/api/_setters/${t}`,{method:"POST",mode:"cors",headers:{...e?.headers||{},"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then(async r=>{let a=await r.json();return a&&a.errors?(console.log("%c\u274C set request failed with the following errors:",'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),a.errors.forEach(u=>{console.log(u.message),u.stack&&console.log(u.stack)}),n(a)):(o(a),a)}).catch(r=>(console.log("%c\u274C set request failed with the following network error:",'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),console.log(r),n(r),r)))};var _={get:oe,set:ie};var b=(t="",e={})=>{if(fetch)return new Promise((o,n)=>{let r={signup:"signup",login:"login",logout:"logout",recoverPassword:"recover-password",resetPassword:"reset-password"}[t];return fetch(`${window.location.origin}/api/_accounts/${r}`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,origin:window?.location?.origin}),credentials:"include"}).then(async a=>{let u=await a.json();return u&&u.errors?(console.log(`%c\u274C accounts.${t} request failed with the following errors:`,'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),u.errors.forEach(d=>{console.log(d.message),d.stack&&console.log(d.stack)}),n(u)):(o(u),u)}).catch(a=>(console.log(`%c\u274C accounts.${t} request failed with the following network error:`,'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),console.log(a),n(a),a))})};var se=(t={})=>b("signup",t);var ae=(t={})=>b("login",t);var ce=()=>b("logout");var le=(t={})=>b("recoverPassword",t);var ue=(t={})=>b("resetPassword",t);var fe={signup:se,login:ae,logout:ce,recoverPassword:le,resetPassword:ue};var z={_internal:{eventListeners:{attached:[],queue:new E([])},timers:[],lifecycle:{onBeforeMount:new E([]),onMount:new E([])},tree:{}},component:ee,mount:ne,get:_.get,set:_.set,accounts:fe};typeof window!="undefined"&&(window.joystick=window.joystick?{...window.joystick,settings:window.__joystick_settings__}:{settings:window.__joystick_settings__});if(typeof window!="undefined"){let t=window.setTimeout,e=window.setInterval;window.setTimeout._tainted||(window.setTimeout=(o=null,n=null)=>{if(o&&n>=0){let r=t(o,n);return z._internal.timers.push({type:"timeout",id:r}),r}},window.setTimeout._tainted=!0),window.setInterval._tainted||(window.setInterval=(o=null,n=null)=>{if(o&&n>=0){let r=e(o,n);return z._internal.timers.push({type:"interval",id:r}),r}},window.setInterval._tainted=!0)}var Ut=_.get,Wt=_.set;var w=z;var $e=t=>!!(t&&typeof t=="object"&&!Array.isArray(t)),de=(t={},e="",o={})=>{let n=t&&t.id;if($e(t)&&n){let r=Object.entries(t);for(let a=0;a<r.length;a+=1){let[u,d]=r[a];if(u==="id"&&d===e)return t;if(u==="children"&&Array.isArray(d))for(let p=0;p<d.length;p+=1){let v=d[p],x=de(v,e,o);if(x!==null)return x}}}return null},he=de;var qe=()=>typeof window!="undefined"?w&&w.mountedInstance?w:window.__joystick__:w,pe=function(e,o){try{let n=qe(),r=e(o,this.url,this.translations);e.instance&&(r.id=e.instance.id),r.parent=this,r.options&&r.options.lifecycle&&(r.options.lifecycle.onBeforeMount&&n._internal.lifecycle.onBeforeMount.array.push({callback:()=>{r.options.lifecycle.onBeforeMount(r)}}),r.options.lifecycle.onMount&&n._internal.lifecycle.onMount.array.push({callback:()=>{r.options.lifecycle.onMount(r)}}));let a=he(r.parent.ssrTree||n._internal.tree,r.parent.id);if(a&&a.children&&a.children.push({id:r.id,instance:r,children:[]}),r.parent&&r.parent.ssrTree)return r.renderToHTML(r.parent.ssrTree).wrapped;let u=r.renderToDOM({includeActual:!0}),d=r.renderToHTML();return r.dom=u,r.handleAttachCSS(),r.handleAttachEvents(r.parent),e.instance=r,d.wrapped}catch(n){console.log(n)}},me=function(e,o){return e.map(n=>o(n)).join(`
`)},ge=function(e="",o={}){let n=typeof window!="undefined"?window.__joystick_i18n__:this.translations;return n&&n[e]?Object.entries(o).length>0?Object.entries(o).reduce((r,[a,u])=>r.replace(`{{${a}}}`,u),n[e]):n[e]:""},ye=function(e=!1,o=""){return e?o:""},N={c:pe,component:pe,e:me,each:me,i:ge,i18n:ge,w:ye,when:ye};export{N as default};
