import { watchApiError } from "./module/watchApiError.js";
import { watchJsError } from "./module/watchJsError.js";
import { watchResourceError } from "./module/watchResourceError.js";

class webMitoSdkInit {
  /*
    name : 上报组件名称，
    sendApi: 是否上报api接口报错,
    sendResource:是否上报资源请求错误，
    sendJsError:, 是否上报 js error
    */
  constructor({ name, sendApi, sendResource, sendJsError }) {
    this.name = name;
    this.sendApi = sendApi;
    this.sendJsError = sendJsError;
    this.sendResource = sendResource;
  }
  init() {
    this.sendApi && watchApiError(this.name);
    this.sendJsError && watchJsError(this.name);
    this.sendResource && watchResourceError(this.name);
  }
}

let webMitoSdkInits = new webMitoSdkInit({
  name: "opcenter",
  sendJsError: true,
});

webMitoSdkInits.init();
