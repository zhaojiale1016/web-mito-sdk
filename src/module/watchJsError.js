export function watchJsError(name) {
  const onError = window.onerror;
  function errorHandler(message, source, lineno, colno, error) {
    if (onError) {
      try {
        onError.call(message, source, lineno, colno, error);
      } catch (err) {}
    }
    if (error != null) {
      //上报
      console.log(error);
    }
  }
  window.onerror = function (message, source, lineno, colno, error) {
    errorHandler(message, source, lineno, colno, error);
  };
}
