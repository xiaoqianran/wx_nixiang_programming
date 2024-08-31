var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../utils/request");var _link = require("../../utils/link");var wxPano = requirePlugin("wxPano");Page({
  data: {
    place: '',
    // 指定地点名称
    VRUrl: '',
    // 指定地点的VR图片地址
    topBarHeigth: 0,
    // topbar高度
    tweetLink: '' // 推文链接
  },
  /**
   * 获取推文信息
   */
  getTweetLink: function getTweetLink() {
    var _this = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var _yield$get, res;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _request.get)(_link.getVRTweet);
          case 3:
            _yield$get = _context.sent;
            res = _yield$get.data;
            if (res.code == 20000) {
              _this.setData({
                tweetLink: res.data
              });
            } else {
              console.error("获取推文接口出现异常");
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }))();
  },
  onLoad: function onLoad(e) {
    // 获取推文信息
    this.getTweetLink();
    var place = e.place;
    this.setData({
      place: place.substring(2, place.length),
      VRUrl: e.VRUrl
    });
  },
  onReady: function onReady() {
    this.selectComponent("#toast").showToast("加载中", "lodding");
    var that = this;
    var VRUrl = this.data.VRUrl;
    wxPano.config({
      panolist: [{
        name: "全景图图片",
        src: VRUrl,
        infospots: [
        //信息标记
        {
          type: "page",
          page: function page() {
            var tweetLink = that.data.tweetLink;
            if (tweetLink) {
              wx.setStorageSync("src", tweetLink);
              wx.navigateTo({
                url: "/pages/webtweet/webtweet",
                success: function success() {
                  wx.reportEvent("smp_vr_tweet_tap", {});
                  wx.hideLoading();
                }
              });
            } else {
              wx.hideLoading();
            }
          },
          position: {
            x: 0.5,
            y: 0.7
          },
          size: 1.5,
          icon: "http://introduce.mcdd.top/fmin-min-1d670f5f-nannan-logo.svg"
        }]
      }],
      loader: "GLLoader",
      entryname: "全景图图片"
    });
    wxPano.onReady = function () {
      //wxPano初始化完成后会触发此事件
      that.selectComponent("#toast").hiddenToast();
      // 控制一开始进入时的图片缩放，缩放到最小，区间【0-120】
      wxPano.setCameraFov(120);
    };
  },
  touchmove: function touchmove(e) {
    if (e.changedTouches.length > 1) {
      wxPano.disableTouch();
    } else {
      wxPano.enableTouch();
    }
  },
  onShow: function onShow() {
    this.getTopBarHeight();
  },
  /**
   * 获取topbar高度
   */
  getTopBarHeight: function getTopBarHeight() {
    var menuButton = wx.getMenuButtonBoundingClientRect();
    var menuButtonHeight = menuButton.height;
    var menuButtonTop = menuButton.top;
    // 获取设备的信息  
    var systemInfo = wx.getSystemInfoSync();
    // 获取信号区高度
    var statusBarHeight = systemInfo['statusBarHeight'];
    // 设置胶囊行的高度
    var capsuleBoxHeight = menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;
    this.setData({
      topBarHeigth: statusBarHeight + capsuleBoxHeight
    });
  }
});