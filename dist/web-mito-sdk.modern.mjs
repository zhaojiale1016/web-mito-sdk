new class{constructor({name:n,sendApi:r,sendResource:s,sendJsError:o}){this.name=n,this.sendApi=r,this.sendJsError=o,this.sendResource=s}init(){this.sendJsError&&function(n){const r=window.onerror;window.onerror=function(n,s,o,e,i){!function(n,s,o,e,i){if(r)try{r.call(n,s,o,e,i)}catch(n){}null!=i&&console.log(n,s,o,e,i)}(n,s,o,e,i)}}()}}({name:"opcenter",sendJsError:!0}).init();
//# sourceMappingURL=web-mito-sdk.modern.mjs.map
