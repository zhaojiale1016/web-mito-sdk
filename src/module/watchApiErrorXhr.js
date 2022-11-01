import { ajax } from "../util/ajax.js";
export function watchApiErrorXhr(name) {
  function hijackXHR() {
    const proto = window.XMLHttpRequest.prototype;
    const originalOpen = proto.open;
    const originalSend = proto.send;
    var _handleEvent = function (event) {
      if (event && event.currentTarget && event.currentTarget.status !== 200) {
        // 自定义错误上报 }
        ajax({
          method: "POST",
          url: "http://10.69.57.179:30001/logapi/addErrorLog",
          data: {
            title: event.currentTarget.responseText,
            type: "apiError",
            detail:
              event.currentTarget.responseURL +
              "：" +
              event.currentTarget.status +
              "&" +
              event.currentTarget.statusText,
            component: name,
            description: event.currentTarget.responseURL,
          },
        });
        console.log(event.currentTarget);
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
