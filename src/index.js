import { watchApiErrorXhr } from "./module/watchApiErrorXhr.js";
import { watchApiErrorFetch } from "./module/watchApiErrorFetch.js";
import { watchJsError } from "./module/watchJsError.js";
import { watchResourceError } from "./module/watchResourceError.js";

(function () {
  const { name } = getScriptQuery();
  watchApiErrorXhr(name);
  watchApiErrorFetch(name);
  watchJsError(name);
  watchResourceError(name);
})();
