var r=(o="",f={})=>{if(fetch)return new Promise((p,i)=>{let d={signup:"signup",login:"login",logout:"logout",recoverPassword:"recover-password",resetPassword:"reset-password"}[o];return fetch(`${window.location.origin}/api/_accounts/${d}`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({...f,origin:window?.location?.origin}),credentials:"include"}).then(async t=>{let e=await t.json();return e&&e.errors?(console.log(`%c\u274C accounts.${o} request failed with the following errors:`,'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),e.errors.forEach(s=>{console.log(s.message),s.stack&&console.log(s.stack)}),i(e)):(p(e),e)}).catch(t=>(console.log(`%c\u274C accounts.${o} request failed with the following network error:`,'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),console.log(t),i(t),t))})};var n=(o={})=>r("signup",o);var a=(o={})=>r("login",o);var l=()=>r("logout");var u=(o={})=>r("recoverPassword",o);var c=(o={})=>r("resetPassword",o);var T={signup:n,login:a,logout:l,recoverPassword:u,resetPassword:c};export{T as default};
