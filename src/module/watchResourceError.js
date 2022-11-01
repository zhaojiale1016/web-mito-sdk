import { ajax } from "../util/ajax.js";
export function watchResourceError(name) {
  window.addEventListener(
    "error",
    (event) => {
      if (event.target.localName) {
        ajax({
          method: "POST",
          url: "http://10.69.57.179:30001/logapi/addErrorLog",
          data: {
            title: event.target.localName + "资源错误",
            type: "resourceError",
            detail: event.target.outerHTML,
            component: name,
            description: `引用${event.target.currentSrc}失败`,
          },
        });
        console.log(event);
      }
    },
    true
  );
}
