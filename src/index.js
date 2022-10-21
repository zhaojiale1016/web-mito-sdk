import { watchApiErrorXhr } from "./module/watchApiErrorXhr.js";
import { watchApiErrorFetch } from "./module/watchApiErrorFetch.js";
import { watchJsError } from "./module/watchJsError.js";
import { watchResourceError } from "./module/watchResourceError.js";

export class webMitoSdkInit {
  constructor({ name, type, config, sendApi, sendResource, sendJsError }) {
    this.name = name;
    this.type = type;
    this.config = config;
    this.sendApi = sendApi;
    this.sendJsError = sendJsError;
    this.sendResource = sendResource;
  }
  init() {
    this.sendApi && watchApiErrorXhr(this.name);
    this.sendApi && watchApiErrorFetch(this.name);
    this.sendJsError && watchJsError(this.name, this.type, this.config);
    this.sendResource && watchResourceError(this.name);
  }
}
