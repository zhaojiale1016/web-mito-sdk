new(/*#__PURE__*/function(){function n(n){var r=n.sendApi,e=n.sendResource,o=n.sendJsError;this.name=n.name,this.sendApi=r,this.sendJsError=o,this.sendResource=e}return n.prototype.init=function(){var n;this.sendJsError&&(n=window.onerror,window.onerror=function(r,e,o,s,i){!function(r,e,o,s,i){if(n)try{n.call(r,e,o,s,i)}catch(n){}null!=i&&console.log(r,e,o,s,i)}(r,e,o,s,i)})},n}())({name:"opcenter",sendJsError:!0}).init();
//# sourceMappingURL=web-mito-sdk.module.js.map
