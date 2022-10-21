export function watchResourceError(name) {
  window.addEventListener(
    "error",
    (event) => {
      if (event.target.localName) {
        console.log("这是资源错误", event);
      }
    },
    true
  );
}
