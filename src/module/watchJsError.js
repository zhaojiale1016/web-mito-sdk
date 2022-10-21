export function watchJsError(name, type, config) {
  window.addEventListener(
    "error",
    (event) => {
      if (!event.target.localName) {
        console.log("这是代码错误", event);
      }
    },
    true
  );

  window.addEventListener("unhandledrejection", (event) => {
    console.log("这是Promise场景中错误", event);
  });

  if (type == "VUE") {
    config.errorHandler = function (err, vm, info) {
      console.log(`Error: ${err.toString()}\nInfo: ${info}`, "vue内部错误");
    };
  }
}
