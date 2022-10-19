# web-mito-sdk

```
npm install web-mito-sdk || yarn add web-mito-sdk
```

```
 name : 上报组件名称，
 sendApi: 是否上报 api 接口报错,
 sendResource:是否上报资源请求错误，
 sendJsError:, 是否上报 js error
```

```
 import webMitoSdkInit from "web-mito-sdk";

 let webMitoSdkInits = new webMitoSdkInit({
      name: "opcenter",
      sendApi:true,
      sendJsError: true,
      sendResource:true,
 });

 webMitoSdkInits.init();
```
