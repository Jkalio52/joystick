var i=(e="",t={})=>{throw new Error(`[joystick${e?`.${e}`:""}] ${t.message||t.reason||t}`)};var l=(e={})=>{try{return Object.entries(e).map(([t,o])=>{let[s,...n]=t.split(" ");return{type:s.toLowerCase(),selector:n.join(" "),handler:o}})}catch(t){i("component.events.serialize",t)}};var a=e=>{try{return typeof e=="function"}catch(t){i("types.isFunction",t)}};var m=(e={})=>{try{if(e.lifecycle&&e.lifecycle.onBeforeUnmount&&a(e.lifecycle.onBeforeUnmount)){let t=function(){e.lifecycle.onBeforeUnmount(e)};window.removeEventListener("beforeunload",t),window.addEventListener("beforeunload",t)}}catch(t){i("component.events.registerListeners.attachOnBeforeUnmount",t)}},p=(e={},t=[])=>{let o=e.instance.options.events||{},s=Object.keys(o).length>0;if(m(e.instance),s&&t.push({id:e.id,instanceId:e.instance.instanceId,events:l(o).map(n=>{let r=document.querySelectorAll(`body [js-i="${e.instance.instanceId}"] ${n.selector}`),y=document.querySelectorAll(`body [js-c="${e.id}"] ${n.selector}`);return{...n,eventListener:function(c){Object.defineProperty(c,"target",{value:c.composedPath()[0]}),n.handler(c,e.instance)},elements:r?.length>0?r:[]}}),instance:e.instance}),e?.children?.length>0)for(let n=0;n<e?.children?.length;n+=1){let r=e?.children[n];p(r,t)}return t},E=()=>{setTimeout(()=>{let e=p(window.joystick._internal.tree,[]);for(let t=0;t<e?.length;t+=1){let o=e[t];for(let s=0;s<o?.events?.length;s+=1){let n=o.events[s];for(let r=0;r<n?.elements?.length;r+=1)n.elements[r].addEventListener(n.type,n.eventListener)}}window.joystick._internal.eventListeners=e},0)};export{E as default};
