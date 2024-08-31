var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var request = require('../../../utils/request');var url = require('../../../utils/link');Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginTitle: "登录",
    preTime: 0,
    bindTime: 0,
    finishJump: false,
    //该值控制跳转防抖,
    chooseAvatar: true,
    //弹窗防抖
    pos: '',
    name: ''
  },
  /**
   * 返回上一页
   */
  back: function back() {
    wx.navigateBack();
  },
  /**
   * 微信授权获取Uid
   */
  getUid: function getUid() {
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var loginRes, codeString;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return wx.login();
          case 3:
            loginRes = _context.sent;
            if (loginRes.code) {
              codeString = 'code=' + loginRes.code;
              request.get(url.getUserUid, codeString).then(function (resq) {
                if (resq.data.code === 20000) {
                  var uid = resq.data.data.uid;
                  var openid = resq.data.data.openid;
                  var unionid = resq.data.data.unionid;
                  wx.setStorageSync('uid', uid ? uid : "");
                  wx.setStorageSync('openid', openid ? openid : "");
                  wx.setStorageSync('unionid', unionid ? unionid : "");
                }
              });
            } else {
              console.error('微信登录失败！' + loginRes.errMsg);
            }
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("网络错误", _context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }))();
  },
  /**
   * 用户登录
   */
  userLogin: function userLogin(e) {
    var _this = this;
    if (e.timeStamp - this.data.bindTime > 1000) {
      // 网络错误
      wx.getNetworkType({
        success: function success(res) {
          if (res.networkType === 'none') wx.showToast({
            title: '网络错误!',
            icon: "none"
          });
        }
      });
      // 缓存头像
      var avatarUrl = e.detail.avatarUrl.replace('https', 'http');
      wx.setStorageSync('loginHead', avatarUrl);
      // 获取Uid
      this.getUid();
      //避免重复跳转
      !this.data.finishJump && wx.redirectTo({
        url: "../updataUserInfo/updataUserInfo",
        success: function success() {
          _this.setData({
            finishJump: true
          });
        }
      });
    }
    this.setData({
      bindTime: e.timeStamp
    });
  },
  /**
   * 控制弹窗防抖
   */
  tapLogin: function tapLogin(e) {
    this.setData({
      chooseAvatar: e.timeStamp - this.data.preTime > 350 ? true : false,
      preTime: e.timeStamp
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    this.setData({
      finishJump: false
    });
  },
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