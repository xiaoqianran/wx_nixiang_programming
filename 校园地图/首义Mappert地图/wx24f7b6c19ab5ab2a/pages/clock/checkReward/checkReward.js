Page({
  /**
   * 页面的初始数据
   */
  data: {
    svgUrlList: {
      noCheckHistory: 'http://introduce.mcdd.top/fmin-min-6bfb8826-no-check-history-icon-face.svg',
      // 没有历史记录
      giftFace: 'http://introduce.mcdd.top/fmin-min-484deefd-gift-white-face.svg',
      // 白色礼物
      unclaimedPrize: 'http://introduce.mcdd.top/fmin-min-8ae6b3de-unclaimed-prize-line-black.svg',
      // 未兑奖icon
      claimedPrize: 'http://introduce.mcdd.top/fmin-min-97112c36-claimed-prize-line-black.svg' // 已兑奖icon
    },

    topbarTitle: '获奖记录',
    // topbar标题
    clockReward: {},
    // 用户获奖记录
    userInfo: {},
    // 用户基本id信息
    typeKey: {
      'false': {
        'backgroundColor': 'Background-Quaternary',
        'icon': 'unclaimedPrize'
      },
      'true': {
        'backgroundColor': 'Background-Low',
        'icon': 'claimedPrize'
      }
    } // 不同类型对应的背景色和icon
  },
  /**
   * 点击复制南南微信button
   */
  copyButton: function copyButton() {
    // 打卡页面/领奖记录/提示文字/点击埋点
    wx.reportEvent("smp_clockin_awardrecord_cluetext_tap", {});
    wx.setClipboardData({
      data: 'nanlilu22'
    });
    this.setData({
      toastCard: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(option) {
    var eventChannel = this.getOpenerEventChannel();
    var that = this;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (info) {
      var clockReward = info.clockReward;
      clockReward.forEach(function (item) {
        var _item$cashTime;
        var arr = item.awardTime.split(' ');
        var arrCashTime = [];
        if ((_item$cashTime = item.cashTime) !== null && _item$cashTime !== void 0 && _item$cashTime.length) {
          arrCashTime = item === null || item === void 0 ? void 0 : item.cashTime.split(' ');
          item.cashTime = arrCashTime[0].replace(/-/g, '.').replace('.0', '.');
        }
        item.awardTime = arr[0].replace(/-/g, '.').replace('.0', '.');
      });
      that.setData({
        clockReward: info.clockReward,
        userInfo: info.userInfo
      });
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {}
});