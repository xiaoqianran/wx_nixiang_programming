Object.defineProperty(exports, "__esModule", {
  value: true
});exports.get = get;exports.post = post;function post(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    wx.request({
      method: "POST",
      url: url,
      data: data,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}function get(url, string) {
  return new Promise(function (resolve, reject) {
    wx.request({
      method: "GET",
      url: string ? url + "?" + string : url,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}