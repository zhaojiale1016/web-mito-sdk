import { ajax } from "../util/ajax.js";
export function watchJsError(name) {
  window.addEventListener(
    "error",
    (event) => {
      if (!event.target.localName) {
        ajax({
          method: "POST",
          url: "http://10.69.57.179:30001/logapi/addErrorLog",
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
    ajax({
      method: "POST",
      url: "http://10.69.57.179:30001/logapi/addErrorLog",
      data: {
        title: event.reason.message,
        type: "jsError",
        detail: encodeURI(event.reason.stack),
        component: name,
        description: encodeURI(event.reason.stack),
      },
    });
    console.log(event);
  });

  // if (type == "VUE") {
  //   config.errorHandler = function (err, vm, info) {
  //     ajax({
  //       method: "POST",
  //       url: "http://10.69.57.179:30001/logapi/addErrorLog",
  //       data: {
  //         title: err.message,
  //         type: "vueError",
  //         detail: encodeURI(err.stack),
  //         component: name,
  //         description: `组件${vm.$vnode.tag}发生错误：${err.message}, ${info}`,
  //       },
  //     });
  //     console.log(err);
  //   };
  // }
}
