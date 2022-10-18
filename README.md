# web-mito-sdk

/_
name : 上报组件名称，
sendApi: 是否上报 api 接口报错,
sendResource:是否上报资源请求错误，
sendJsError:, 是否上报 js error
_/
let webMitoSdkInits = new webMitoSdkInit({
name: "opcenter",
sendJsError: true,
});

webMitoSdkInits.init();
