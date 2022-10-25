export  function ajax(opt) {
  var that = this;
  return new Promise(function (resolve, reject) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(opt.method, opt.url);
    if (
      opt.method.toUpperCase() === "GET" ||
      opt.method.toUpperCase() === "DELETE"
    ) {
      xmlHttp.send(null);
    } else if (opt.method.toUpperCase() === "POST") {
      var body = JSON.stringify(opt.data);
      xmlHttp.setRequestHeader("Content-Type", "application/json");
      xmlHttp.send(body);
    }
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          try {
            var response =
              typeof xmlHttp.responseText === "string"
                ? JSON.parse(xmlHttp.responseText)
                : xmlHttp.responseText;
            resolve(response);
          } catch (e) {
            reject(e);
          }
        } else {
          reject(xmlHttp);
        }
      }
    };
  });
}

