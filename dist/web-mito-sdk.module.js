var t=/*#__PURE__*/function(){function t(t){var e=t.type,n=t.config,r=t.sendApi,o=t.sendResource,i=t.sendJsError;this.name=t.name,this.type=e,this.config=n,this.sendApi=r,this.sendJsError=i,this.sendResource=o}return t.prototype.init=function(){var t,e,n,r,o;this.sendApi&&window.XMLHttpRequest&&(t=window.XMLHttpRequest.prototype,e=t.send,n=function(t){t&&t.currentTarget&&200!==t.currentTarget.status&&console.log(t.currentTarget,"apiError")},t.send=function(){if(this.addEventListener)this.addEventListener("error",n),this.addEventListener("load",n),this.addEventListener("abort",n);else{var t=this.onreadystatechange;this.onreadystatechange=function(e){4===this.readyState&&n(e),t&&t.apply(this,arguments)}}return e.apply(this,arguments)}),this.sendApi&&function(t){if(window.fetch){var e=window.fetch;window.fetch=function(){return e.apply(this,arguments).then(function(t){return t}).catch(function(t){throw t})}}}(),this.sendJsError&&(r=this.type,o=this.config,window.addEventListener("error",function(t){t.target.localName||console.log("这是代码错误",t)},!0),window.addEventListener("unhandledrejection",function(t){console.log("这是Promise场景中错误",t)}),"VUE"==r&&(o.errorHandler=function(t,e,n){console.log("Error: "+t.toString()+"\nInfo: "+n,"vue内部错误")})),this.sendResource&&window.addEventListener("error",function(t){t.target.localName&&console.log("这是资源错误",t)},!0)},t}();export{t as webMitoSdkInit};
//# sourceMappingURL=web-mito-sdk.module.js.map
