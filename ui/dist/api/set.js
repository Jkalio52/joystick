var s=(c="",t={})=>{if(fetch)return new Promise((l,i)=>fetch(`${window.location.origin}/api/_setters/${c}`,{method:"POST",mode:"cors",headers:{...t?.headers||{},"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"}).then(async o=>{let e=await o.json();return e&&e.errors?(console.log("%c\u274C set request failed with the following errors:",'background-color: #ffcc00; padding: 7px; font-family: "inherit"; font-size: 11px; line-height: 10px; color: #000;'),e.errors.forEach(n=>{console.log(n.message),n.stack&&console.log(n.stack)}),i(e)):(l(e),e)}).catch(o=>(console.log("%c\u274C set request failed with the following network error:",'background-color: #ffcc00; padding: 7px; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-size: 13px; line-height: 13px; color: #000;'),console.log(o),i(o),o)))};export{s as default};
