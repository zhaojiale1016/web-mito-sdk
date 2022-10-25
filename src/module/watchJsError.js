import { ajax } from "../util/ajax.js";
export function watchJsError(name, type, config) {
  window.addEventListener(
    "error",
    (event) => {
      if (!event.target.localName) {
        ajax({
          method: "POST",
          url: "http://localhost:8081/logapi/addErrorLog",
          data: {
            title: event.error.message,
            type: "jsError",
            detail: encodeURI(event.error.stack),
            component: name,
            description: event.filename,
          },
        });
        console.log(event);
      }
    },
    true
  );

  window.addEventListener("unhandledrejection", (event) => {
    console.log("这是Promise场景中错误", event);
    ajax({
      method: "POST",
      url: "http://localhost:8081/logapi/addErrorLog",
      data: {
        title: event,
        type: "jsPromiseError",
      },
    });
  });

  if (type == "VUE") {
    config.errorHandler = function (err, vm, info) {
      ajax({
        method: "POST",
        url: "http://localhost:8081/logapi/addErrorLog",
        data: {
          title: err.message,
          type: "vueError",
          detail: encodeURI(err.stack),
          component: name,
          description: `组件${vm.$vnode.tag}发生错误：${err.message}, ${info}`,
        },
      });
      console.log(err);
    };
  }
}
