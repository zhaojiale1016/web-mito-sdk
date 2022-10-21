# web-mito-sdk

```
npm install web-mito-sdk || yarn add web-mito-sdk
```

```
name : 上报组件名称，
type : 目前支持原生JS和VUE,
config: vue监控需要调用内部errorHandler，所以需要传入vueConfig,
sendApi: 是否上报 api 接口报错,
sendResource:是否上报资源请求错误，
sendJsError:, 是否上报 js error
```

```
import Vue from "vue";
import { webMitoSdkInit } from "web-mito-sdk";

const webMitoSdkInits = new webMitoSdkInit({
      name: "opcenter",
      type: "VUE",
      config: Vue.config,
      sendApi:true,
      sendJsError: true,
      sendResource:true,
});

webMitoSdkInits.init();
```
