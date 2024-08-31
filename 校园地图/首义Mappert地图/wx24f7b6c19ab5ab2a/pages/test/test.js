var righttop = [23.105601636091126, 113.32561652492132];var leftbottom = [23.104752168738766, 113.32324335487533];Page({
  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 0,
      iconPath: "https://introduce.mcdd.top/fin-min-sy-05f68fe1.png",
      // 标记点图片，常见有蓝色点你懂得
      latitude: '23.105601636091126',
      // 每一个被标点的纬度
      longitude: '113.32424842327879',
      // 每一个被标点的经度
      width: 20,
      // 使用图标的宽度
      height: 20,
      // 使用图标的高度
      title: "" // 点击标记点显示的title
    }]
  },
  onTapMap: function onTapMap(e) {
    console.log(e.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var mapCtx = wx.createMapContext('myMap');
    mapCtx.addGroundOverlay({
      id: 1,
      src: "../../static/a.jpg",
      //支持网络图片、临时路径、代码包路径
      bounds: {
        //左下角,横纬竖经
        southwest: {
          longitude: leftbottom[1],
          latitude: leftbottom[0]
        },
        //右上角
        northeast: {
          longitude: righttop[1],
          latitude: righttop[0]
        }
      },
      success: function success(res) {
        console.log('贴图成功');
      },
      fail: function fail(err) {
        console.log(err);
      }
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