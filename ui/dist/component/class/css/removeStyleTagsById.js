var l=(t="",e={})=>{throw new Error(`[joystick${t?`.${t}`:""}] ${e.message||e.reason||e}`)};var s=(t=[])=>{try{let e="";for(let r=0;r<t?.length;r+=1){let o=t[r];e+=`${r!==0?", ":""}style[js-c="${o}"]`}return e}catch(e){l("component.css.removeStyleTagsById.getStyleTagSelector",e)}},y=(t=[])=>{try{if(t?.length>0){let e=s(t),r=document.head.querySelectorAll(e);for(let o=0;o<r?.length;o+=1){let c=r[o];document.head.removeChild(c)}}}catch(e){l("component.css.removeStyleTagsById",e)}};export{y as default};
