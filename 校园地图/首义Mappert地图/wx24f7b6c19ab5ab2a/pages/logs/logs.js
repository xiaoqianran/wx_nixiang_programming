var _util = require("../../utils/util");Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return {
          date: (0, _util.formatTime)(new Date(log)),
          timeStamp: log
        };
      })
    });
  }
});