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
      console.log(vm.$options.propsData, "vue内部错误");
    };
  }
}
