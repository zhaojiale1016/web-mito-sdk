import { ajax } from "../util/ajax.js";
export function watchApiErrorFetch(name) {
  if (!window.fetch) return;
  let _oldFetch = window.fetch;
  window.fetch = function () {
    return _oldFetch
      .apply(this, arguments)
      .then((res) => {
        if (!res.ok) {
          // True if status is HTTP 2xx
          // 上报错误
          ajax({
            method: "POST",
            url: "http://10.69.57.179:30001/logapi/addErrorLog",
            data: {
              title: res.statusText,
              type: "apiError",
              detail: res.url + "：" + res.status + "&" + res.statusText,
              component: name,
              description: res.url,
            },
          });
          console.log(res);
        }
        return res;
      })
      .catch((error) => {
        // 上报错误
        ajax({
          method: "POST",
          url: "http://10.69.57.179:30001/logapi/addErrorLog",
          data: {
            title: error.message,
            type: "apiError",
            detail: encodeURI(error.stack),
            component: name,
            description: encodeURI(error.stack),
          },
        });
        console.log(error);
        throw error;
      });
  };
}
