export function watchApiError(name) {
  function hijackXHR() {
    const proto = window.XMLHttpRequest.prototype;
    const originalOpen = proto.open;
    const originalSend = proto.send;

    proto.open = function (method, url, async) {
        this._ctx = {
          url: url || "",
          method,
        };
        console.log(this._ctx,'open');
      return originalOpen.apply(this, arguments);
    };

    proto.send = function (body) {
        console.log(body,'send');
      //   function handler() {
      //     if (ctx && that.readyState === 4) {
      //       try {
      //         const url = that.responseURL || ctx.url;
      //         // 上报 API 请求
      //         console.log({
      //           url,
      //           httpMethod: ctx.method,
      //           httpCode: that.status,
      //         });
      //       } catch (err) {
      //         console.log(err);
      //         // sender.reportError(err);
      //       }
      //     }
      //   }
      return originalSend.apply(this, arguments);
    };
  }
  window.XMLHttpRequest && hijackXHR();
}
