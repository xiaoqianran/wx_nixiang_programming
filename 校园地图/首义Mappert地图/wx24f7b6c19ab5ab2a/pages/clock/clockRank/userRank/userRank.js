var _regeneratorRuntime2 = require("../../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../../../utils/request");var _link = require("../../../../utils/link");Page({
  data: {
    navBarHeight: 0,
    // 导航栏高度
    placeName: '',
    // 地点名
    cycleId: '',
    // 周期id
    canvasUrlList: {
      "图书馆": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-z9frl6.png",
      "食堂": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-6aedc3.png",
      "鸽子屋": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-qdy78l.png",
      "实验楼": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-x4ksrb.png",
      "行政中心": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-5z6uch.png",
      "天鹅湖": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-oxply6.png",
      "教学楼": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-boxki8.png",
      "北门": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-9zzvxd.png",
      "操场": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-47m7a6.png",
      "商业街": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-1soddk.png",
      "篮球场": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-po6hys.png",
      "快递点": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-ppds4r.png",
      "球类运动场": "http://introduce.mcdd.top/sp-web-imageBank-202408012308-1ztx5h.png",
      "1-2宿舍楼": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-uvcr4o.png",
      "3-8宿舍楼": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-3a05ua.png",
      "礼堂": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-5xcd8u.png",
      "东门": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-zt1t64.png",
      "南门": "http://introduce.mcdd.top/sp-web-imageBank-202407280107-ebtw8n.png"
    },
    svgPathList: {
      topbarBlack: '../../../../static/left_black_line.svg',
      // topbar黑色色icon
      topbarWhite: '../../../../static/back_white.svg' // topbar白色icon
    },

    pngUrlList: {
      navLawn: 'http://introduce.mcdd.top/sp-web-imageBank-202407270207-inb3p5.png',
      // 草坪
      questionMark: 'http://introduce.mcdd.top/sp-web-imageBank-202407270207-rqmlxe.png',
      // 问号
      wink: 'http://introduce.mcdd.top/sp-web-imageBank-202407270307-nnur8c.png',
      // 提示笑脸
      lightning: 'http://introduce.mcdd.top/sp-web-imageBank-202407271407-smbxm1.png',
      // 闪电
      arrowRight: 'http://introduce.mcdd.top/sp-web-imageBank-202407271407-2pvae6.png',
      // 箭头
      rankTop1: 'http://introduce.mcdd.top/sp-web-imageBank-202407271507-j1ag5b.png',
      // 第一名
      rankTop2: 'http://introduce.mcdd.top/sp-web-imageBank-202407271507-33gwkk.png',
      // 第二名
      rankTop3: 'http://introduce.mcdd.top/sp-web-imageBank-202407271507-il5rch.png',
      // 第三名
      mapLogo: 'http://introduce.mcdd.top/sp-web-imageBank-202407280207-zeqk9l.png',
      // 地图logo
      empty: 'http://introduce.mcdd.top/sp-web-imageBank-202407280407-kcak02.png',
      // 空白展示
      rewardedGift: 'http://introduce.mcdd.top/sp-web-imageBank-202407301107-1l7vc8.png' // 抽奖机会icon
    },

    userRankList: {},
    // 用户排行
    uid: '',
    //用户id
    userInfo: {},
    // 用户个人信息
    userIndex: '',
    // 用户排名
    ruleText: '每一期打卡截止后，活动将会针对小程序的「18」个可打卡地点，公示地点打卡数排行榜，每个地点还会有单独的用户打卡数排行榜，每一期榜单的打卡数独立计算。\n1、榜首地点的打卡数前三名用户，将会依次获得称号「到此n游」「打卡先锋」「探索达人」\n2、若出现并列情况，以优先到达该排名的在前。\n3、若出现榜首地点打卡人数不足三人的情况，仍会按照名次发放对应奖励。'
  },
  /**
   * 计算导航栏高度
   */
  getNavBarHeitht: function getNavBarHeitht() {
    var systemInfo = wx.getSystemInfoSync();
    var statusBarHeight = systemInfo.statusBarHeight;
    var menuButton = wx.getMenuButtonBoundingClientRect();
    var navBarHeight = statusBarHeight + menuButton.height + (menuButton.top - statusBarHeight) * 2;
    this.setData({
      navBarHeight: navBarHeight
    });
  },
  /**
   * 设置topbar中点
   */
  setTopbarMiddle: function setTopbarMiddle() {
    var _this = this;
    var menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    var query = wx.createSelectorQuery();
    query.select('.topbar-title').boundingClientRect(function (rect) {
      if (rect) {
        var capsuleCenterY = menuButtonInfo.top + menuButtonInfo.height / 2;
        var refreshBtnTop = capsuleCenterY - rect.height / 2;
        var middlePlace = "top: ".concat(refreshBtnTop, "px;");
        _this.setData({
          middlePlace: middlePlace
        });
      }
    }).exec();
  },
  /**
   * 返回上一级页面
   */
  backPage: function backPage() {
    wx.navigateBack();
  },
  /**
   * 初始化canvas
   */
  initCanvas: function initCanvas() {
    var _this$data = this.data,
      placeName = _this$data.placeName,
      canvasUrlList = _this$data.canvasUrlList;
    var canvasUrl = canvasUrlList[placeName];
    this.setData({
      canvasUrl: canvasUrl
    });
  },
  /**
   * 获取用户排行
   */
  postUserRank: function postUserRank(uid) {
    var _this2 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var _this2$data, userRankList, cycleId, placeName, userInfo, userIndex, locationName, resFrom, _yield$post, res, image, username, clockNum;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this2$data = _this2.data, userRankList = _this2$data.userRankList, cycleId = _this2$data.cycleId, placeName = _this2$data.placeName, userInfo = _this2$data.userInfo, userIndex = _this2$data.userIndex;
            locationName = placeName;
            resFrom = {
              cycleId: cycleId,
              locationName: locationName
            };
            _context.prev = 3;
            _context.next = 6;
            return (0, _request.post)(_link.postUserRank, resFrom);
          case 6:
            _yield$post = _context.sent;
            res = _yield$post.data;
            if (res.code == 20000) {
              userRankList = res.data;
              uid = wx.getStorageSync('uid');
              userInfo = Object(userRankList).find(function (item) {
                return item.uid === uid;
              });
              userIndex = Object(userRankList).findIndex(function (item) {
                return item.uid === uid;
              });
            } else {
              console.error('请求失败');
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            console.error('异常' + _context.t0);
          case 14:
            // 增加一层校验，防止匹配不到
            if (userInfo == undefined || userIndex == '-1') {
              image = wx.getStorageSync('loginHead');
              username = wx.getStorageSync('uname');
              clockNum = 0;
              userInfo = {
                username: username,
                uid: uid,
                image: image,
                clockNum: clockNum
              };
            }
            _this2.setData({
              userRankList: userRankList,
              uid: uid,
              userInfo: userInfo,
              userIndex: userIndex
            });
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 11]]);
    }))();
  },
  /**
   * 打卡dialog
   */
  openDialog: function openDialog() {
    var uid = this.data.uid;
    if (uid) return;
    var showDialog = true;
    // 打卡页面/排行榜/用户排行榜/用户卡片/点击
    wx.reportEvent("smp_clockin_ranking_usersranking_usercard_tap", {});
    this.setData({
      showDialog: showDialog
    });
  },
  /**
   * 关闭dialog
   */
  closeDialog: function closeDialog() {
    var showDialog = false;
    var isRuleDialog = false;
    this.setData({
      showDialog: showDialog,
      isRuleDialog: isRuleDialog
    });
  },
  /**
   * 跳转登录页面
   */
  jumpToLogin: function jumpToLogin() {
    wx.navigateTo({
      url: '../../../login/loginPage/login'
    });
    var showDialog = false;
    this.setData({
      showDialog: showDialog
    });
  },
  /**
   * 打卡规则dialog
   */
  openRulesDialog: function openRulesDialog() {
    // 打卡页面/排行榜/用户排行/排行规则/点击
    wx.reportEvent("smp_clockin_ranking_usersranking_rankingrules_tap", {});
    var isRuleDialog = true;
    this.setData({
      isRuleDialog: isRuleDialog
    });
  },
  /**
   * 用户卡片点击埋点
   */
  tapUserCard: function tapUserCard() {},
  /**
   * 生命周期函数--监听页面滑动
   */
  onPageScroll: function onPageScroll(e) {
    var scrollTop = e.scrollTop;
    var navBarHeight = this.data.navBarHeight;
    var navFixed = '';
    var rpxWidth = scrollTop / 750 * wx.getSystemInfoSync().windowHeight;
    if (rpxWidth >= 120) {
      navFixed = "position: fixed; top: ".concat(navBarHeight, "px");
    } else {
      navFixed = '';
    }
    this.setData({
      navFixed: navFixed
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(option) {
    var id = option.id,
      placeName = option.placeName,
      cycleId = option.cycleId,
      currentCycle = option.currentCycle;
    this.setData({
      id: id,
      placeName: placeName,
      cycleId: cycleId,
      // currentCycle = Number(currentCycle);会报类型错误
      currentCycle: Number(currentCycle)
    });
    this.getNavBarHeitht(); // 获取导航栏高度
    this.setTopbarMiddle(); // 获取导航栏中点
    this.initCanvas(); // 初始化canvas
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // 走栈抽取上一级页面
    var currentPage = getCurrentPages().pop();
    var lastPath = currentPage === null || currentPage === void 0 ? void 0 : currentPage.__displayReporter.showReferpagepath;
    var uid = wx.getStorageSync('uid');
    // searchPath指特页面
    var searchPath = "pages/login/updataUserInfo/updataUserInfo.html";
    if (uid) {
      if (lastPath == searchPath) {
        this.setData({
          uid: uid
        });
      }
    }
    this.postUserRank(uid); // 获取用户排行
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