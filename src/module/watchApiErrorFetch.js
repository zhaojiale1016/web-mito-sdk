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
        }
        return res;
      })
      .catch((error) => {
        // 上报错误
        throw error;
      });
  };
}
