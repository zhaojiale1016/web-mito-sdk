function t(t){return new Promise(function(e,r){var o=new XMLHttpRequest;if(o.open(t.method,t.url),"GET"===t.method.toUpperCase()||"DELETE"===t.method.toUpperCase())o.send(null);else if("POST"===t.method.toUpperCase()){var n=JSON.stringify(t.data);o.setRequestHeader("Content-Type","application/json"),o.send(n)}o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status)try{var t="string"==typeof o.responseText?JSON.parse(o.responseText):o.responseText;e(t)}catch(t){r(t)}else r(o)}})}var e;(function(e){var r,o,n;window.XMLHttpRequest&&(r=window.XMLHttpRequest.prototype,o=r.send,n=function(r){r&&r.currentTarget&&200!==r.currentTarget.status&&(t({method:"POST",url:"http://10.69.57.179:30001/logapi/addErrorLog",data:{title:r.currentTarget.responseText,type:"apiError",detail:r.currentTarget.responseURL+"："+r.currentTarget.status+"&"+r.currentTarget.statusText,component:e,description:r.currentTarget.responseURL}}),console.log(r.currentTarget))},r.send=function(){if(this.addEventListener)this.addEventListener("error",n),this.addEventListener("load",n),this.addEventListener("abort",n);else{var t=this.onreadystatechange;this.onreadystatechange=function(e){4===this.readyState&&n(e),t&&t.apply(this,arguments)}}return o.apply(this,arguments)})})(e=getScriptQuery().name),function(e){if(window.fetch){var r=window.fetch;window.fetch=function(){return r.apply(this,arguments).then(function(r){return r.ok||(t({method:"POST",url:"http://10.69.57.179:30001/logapi/addErrorLog",data:{title:r.statusText,type:"apiError",detail:r.url+"："+r.status+"&"+r.statusText,component:e,description:r.url}}),console.log(r)),r}).catch(function(r){throw t({method:"POST",url:"http://10.69.57.179:30001/logapi/addErrorLog",data:{title:r.message,type:"apiError",detail:encodeURI(r.stack),component:e,description:encodeURI(r.stack)}}),console.log(r),r})}}}(e),function(e){window.addEventListener("error",function(r){r.target.localName||(t({method:"POST",url:"http://10.69.57.179:30001/logapi/addErrorLog",data:{title:r.error.message,type:"jsError",detail:encodeURI(r.error.stack),component:e,description:r.filename}}),console.log(r))},!0),window.addEventListener("unhandledrejection",function(r){t({method:"POST",url:"http://10.69.57.179:30001/logapi/addErrorLog",data:{title:r.reason.message,type:"jsError",detail:encodeURI(r.reason.stack),component:e,description:encodeURI(r.reason.stack)}}),console.log(r)})}(e),function(e){window.addEventListener("error",function(r){r.target.localName&&(t({method:"POST",url:"http://10.69.57.179:30001/logapi/addErrorLog",data:{title:r.target.localName+"资源错误",type:"resourceError",detail:r.target.outerHTML,component:e,description:"引用"+r.target.currentSrc+"失败"}}),console.log(r))},!0)}(e);
//# sourceMappingURL=web-mito-sdk.js.map
