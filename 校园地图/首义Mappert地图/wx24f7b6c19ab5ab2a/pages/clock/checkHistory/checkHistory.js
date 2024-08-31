Page({
  /**
   * 页面的初始数据
   */
  data: {
    svgUrlList: {
      clockBlackIcon: 'http://introduce.mcdd.top/fmin-min-2cea51cc-clock-icon-black-line.svg',
      // 打卡icon黑色
      makeUpBlackIcon: 'http://introduce.mcdd.top/fmin-min-7a592cae-make-up-icon-black-line.svg',
      // 补签icon黑色
      noCheckHistory: 'http://introduce.mcdd.top/fmin-min-6bfb8826-no-check-history-icon-face.svg' // 没有历史记录
    },

    topbarTitle: '我的打卡记录',
    // topbar标题
    clockHistory: {},
    // 用户打卡记录
    userInfo: {},
    // 用户基本id信息
    typeKey: {
      '打卡': {
        'backgroundColor': 'Background-Quaternary',
        'icon': 'clockBlackIcon'
      },
      '补签': {
        'backgroundColor': 'Background-Secondary',
        'icon': 'makeUpBlackIcon'
      }
    } // 不同类型对应的背景色和icon
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(option) {
    var eventChannel = this.getOpenerEventChannel();
    var that = this;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (info) {
      info.clockHistory.forEach(function (item) {
        if (item.clockLocation == '宿舍楼A') {
          item.clockLocation = '3-8宿舍楼';
        } else if (item.clockLocation == '宿舍楼B') {
          item.clockLocation = '1-2宿舍楼';
        }
      });
      that.setData({
        clockHistory: info.clockHistory,
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