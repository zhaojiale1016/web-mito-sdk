export function watchApiErrorXhr(name) {
  function hijackXHR() {
   
    const proto = window.XMLHttpRequest.prototype;
    const originalOpen = proto.open;
    const originalSend = proto.send;
    var _handleEvent = function (event) {
      if (event && event.currentTarget && event.currentTarget.status !== 200) {
        console.log(event.currentTarget, "apiError");
        // 自定义错误上报 }
      }
    };
    // proto.open = function (method, url, async) {
    //   this._ctx = {
    //     url: url || "",
    //     method,
    //   };
    //   return originalOpen.apply(this, arguments);
    // };
    proto.send = function () {
      if (this["addEventListener"]) {
        this["addEventListener"]("error", _handleEvent);
        this["addEventListener"]("load", _handleEvent);
        this["addEventListener"]("abort", _handleEvent);
      } else {
        var _oldStateChange = this["onreadystatechange"];
        this["onreadystatechange"] = function (event) {
          if (this.readyState === 4) {
            _handleEvent(event);
          }
          _oldStateChange && _oldStateChange.apply(this, arguments);
        };
      }
      return originalSend.apply(this, arguments);
    };


  }
  window.XMLHttpRequest && hijackXHR();
}
