var n=/*#__PURE__*/function(){function n(n){var e=n.type,t=n.config,o=n.sendApi,i=n.sendResource,r=n.sendJsError;this.name=n.name,this.type=e,this.config=t,this.sendApi=o,this.sendJsError=r,this.sendResource=i}return n.prototype.init=function(){var n,e,t,o,i;this.sendApi&&window.XMLHttpRequest&&(n=window.XMLHttpRequest,e=window.XMLHttpRequest.prototype,t=e.open,!0!==n._myxhr_flag&&(n._myxhr_flag=!0,e.open=function(n,e){this._ctx={url:e||"",method:n},t.apply(this,arguments)},e.send=function(n){})),this.sendJsError&&(o=this.type,i=this.config,window.addEventListener("error",function(n){n.target.localName?console.log("这是资源错误",n):console.log("这是代码错误",n)},!0),window.addEventListener("unhandledrejection",function(n){console.log("这是Promise场景中错误",n)}),"VUE"==o&&(i.errorHandler=function(n,e,t){console.log("Error: "+n.toString()+"\nInfo: "+t,"vue内部错误")}))},n}();export{n as webMitoSdkInit};
//# sourceMappingURL=web-mito-sdk.module.js.map
