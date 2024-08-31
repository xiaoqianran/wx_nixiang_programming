module.exports = {
  libwxPano: require("./utils/panolens.xcx.min.js"),
  TCSCrypt: require('./utils/TCSCrypt'),
  md5: require('./utils/md5'),
  SystemInfo: wx.getSystemInfoSync(),
  compareVersion:function(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)
  
    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }
  
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])
  
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
  
    return 0
  }
}