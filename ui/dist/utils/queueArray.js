var s=class{constructor(a=[]){this.array=[...a],this.array.push=function(){Array.prototype.push.apply(this,arguments)}}async process(){if(this.array.length>0){let a=this.array.shift();a&&a.callback&&(await a.callback(),this.process())}}},r=s;export{r as default};
