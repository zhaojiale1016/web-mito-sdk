export function watchApiError(name) {
  function hijackXHR() {
    let xhr = window.XMLHttpRequest;
    const proto = window.XMLHttpRequest.prototype;
    const originalOpen = proto.open;
    const originalSend = proto.send;
    if (xhr._myxhr_flag === true) {
      return;
    }
    xhr._myxhr_flag = true;
    proto.open = function (method, url) {
      this._ctx = {
        url: url || "",
        method,
      };
      originalOpen.apply(this, arguments);
    };

    proto.send = function (body) {
      const that = this;
      const ctx = that._ctx;
      function handler() {
        if (ctx && that.readyState === 4) {
          try {
            const url = that.responseURL || ctx.url;
            // 剔除 SDK 发出的上报请求
            if (url.indexOf(SERVER_HOST) >= 0) {
              return;
            }
            // 上报 API 请求
            console.log({
              url,
              httpMethod: ctx.method,
              httpCode: that.status,
            });
          } catch (err) {
            console.log(err);
            // sender.reportError(err);
          }
        }
      }
    };
  }
  window.XMLHttpRequest && hijackXHR();
}
