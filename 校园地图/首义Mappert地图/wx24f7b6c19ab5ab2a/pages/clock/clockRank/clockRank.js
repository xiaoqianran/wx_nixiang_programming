require("../../../@babel/runtime/helpers/Objectentries");var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _objectSpread2 = require("../../../@babel/runtime/helpers/objectSpread2");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../../utils/request");var _link = require("../../../utils/link");[];Page({
  data: {
    navBarHeight: 0,
    // 导航栏高度
    // 封面前三名Top榜单和默认图标
    canvasUrlList: [{
      url: 'http://introduce.mcdd.top/sp-web-imageBank-202407272107-nvrgc9.png',
      empty: false
    }, {
      url: 'http://introduce.mcdd.top/sp-web-imageBank-202407272107-9lz7e8.png',
      empty: false
    }, {
      url: 'http://introduce.mcdd.top/sp-web-imageBank-202407272107-pepsga.png',
      empty: false
    }],
    topbarBlack: '../../../static/left_black_line.svg',
    // topbar黑色色icon
    pngUrlList: {
      navBackground: 'http://introduce.mcdd.top/sp-web-imageBank-202407300007-jmqr2b.png',
      // 导航背景
      canvasBackground: 'http://introduce.mcdd.top/sp-web-imageBank-202407300907-fttm3r.png',
      // 封面背景
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
      lock: 'http://introduce.mcdd.top/sp-web-imageBank-202407272207-oxvmc3.png' // 未解锁
    },

    placeUrlList: {
      "北门": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-hwp0uc.png',
      "南门": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-0svidt.png',
      "天鹅湖": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-wh47ly.png',
      "操场": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-lwb6qj.png',
      "行政中心": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-3wtjyd.png',
      "实验楼": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-jtbt5t.png',
      "礼堂": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-n9dqn2.png',
      "东门": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-37usbe.png',
      "鸽子屋": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-7glxkf.png',
      "快递点": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-7mltbg.png',
      "图书馆": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-fe9cew.png',
      "教学楼": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-kx8mcy.png',
      "宿舍楼A": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-xyum3d.png',
      "宿舍楼B": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-tbu5cp.png',
      "食堂": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-5krkb8.png',
      "篮球场": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-sjw36i.png',
      "商业街": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-ldg4aj.png',
      "球类运动场": 'http://introduce.mcdd.top/sp-web-imageBank-202407271307-rgdstr.png'
    },
    nowClockDate: '',
    rankInfoList: {},
    rankList: [],
    clcleNameNew: '',
    // 选中的周期
    clcleName: '',
    // 当前周期
    currentCycle: 0,
    // 当前周期（数字）
    cycleId: '',
    // 当前周期id
    isRewarded: false,
    // 是否获奖
    userRank: 0,
    // 用户排名
    allRankList: [],
    // 所有的周期排行
    ruleText: '每一期打卡截止后，活动将会针对小程序的「18」个可打卡地点，公示该周期内的地点打卡数排行，每一期榜单的打卡数独立计算。\n1、当期打卡数排名前三的地点，会获得额外排名标识。\n 2、若出现并列情况，以优先到达该排名的在前。' // 规则内容
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
   * 处理当前打卡期
   */
  updateClockData: function updateClockData(type) {
    var _this$data = this.data,
      clcleName = _this$data.clcleName,
      rankList = _this$data.rankList;
    var currentCycle = 0;
    if (clcleName == '第一期') currentCycle = 0;else if (clcleName == '第二期') currentCycle = 1;else currentCycle = 2;
    // 当本期列表为空时，自动切换到上一周期
    if (rankList.length == 0 && currentCycle > 0) currentCycle -= 1;
    this.setData({
      currentCycle: currentCycle
    });
  },
  /**
   * 控制多个奖励弹出
   */
  showPrizeToast: function showPrizeToast() {},
  /**
   * 获取全部排行
   */
  getPlaceRank: function getPlaceRank() {
    var _this2 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var _this2$data, rankInfoList, rankList, placeUrlList, currentCycle, canvasUrlList, cycleId, userRank, isRewarded, allRankList, clcleName, uid, clcleNameNew, _yield$get, res, _res$data$currentCycl, i, e;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this2$data = _this2.data, rankInfoList = _this2$data.rankInfoList, rankList = _this2$data.rankList, placeUrlList = _this2$data.placeUrlList, currentCycle = _this2$data.currentCycle, canvasUrlList = _this2$data.canvasUrlList, cycleId = _this2$data.cycleId, userRank = _this2$data.userRank, isRewarded = _this2$data.isRewarded, allRankList = _this2$data.allRankList, clcleName = _this2$data.clcleName;
            uid = wx.getStorageSync('uid');
            clcleNameNew = '第一期';
            _context.prev = 3;
            _context.next = 6;
            return (0, _request.get)(_link.getClockRank, 'uid=' + uid);
          case 6:
            _yield$get = _context.sent;
            res = _yield$get.data;
            if (!(res.code == 20000)) {
              _context.next = 27;
              break;
            }
            allRankList = res.data;
            i = 0;
          case 11:
            if (!(i < 3)) {
              _context.next = 20;
              break;
            }
            if (!res.data[i].isRewarded) {
              _context.next = 17;
              break;
            }
            if (i == 1) clcleNameNew = '第二期';else if (i == 2) clcleNameNew = '第三期';
            userRank = res.data[i].rank;
            isRewarded = res.data[i].isRewarded;
            return _context.abrupt("break", 20);
          case 17:
            i++;
            _context.next = 11;
            break;
          case 20:
            rankInfoList = (_res$data$currentCycl = res.data[currentCycle]) === null || _res$data$currentCycl === void 0 ? void 0 : _res$data$currentCycl.ranking;
            cycleId = res.data[currentCycle].cycleId;
            // 地点排行列表
            rankList = Object.keys(rankInfoList).map(function (key) {
              return {
                name: key,
                num: rankInfoList[key],
                url: placeUrlList[key]
              };
            });
            // canvas周期
            canvasUrlList = canvasUrlList.map(function (item, index) {
              var ranking = res.data[index].ranking;
              return _objectSpread2(_objectSpread2({}, item), {}, {
                empty: Object.keys(ranking).length === 0
              });
            });
            // 增加一层校验，防止数组超出3期
            canvasUrlList = canvasUrlList.slice(0, 3);
            _context.next = 28;
            break;
          case 27:
            console.error('请求失败！');
          case 28:
            _context.next = 33;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](3);
            console.error('异常' + _context.t0);
          case 33:
            _this2.setData({
              clcleNameNew: clcleNameNew,
              userRank: userRank,
              rankList: rankList,
              canvasUrlList: canvasUrlList,
              cycleId: cycleId,
              isRewarded: isRewarded,
              allRankList: allRankList
            });
            if (clcleName == '第一期') currentCycle = 0;else if (clcleName == '第二期') currentCycle = 1;else currentCycle = 2;
            // 当本期列表为空时，自动切换到上一周期
            if (rankList.length == 0 && currentCycle > 0) currentCycle -= 1;
            e = {
              currentTarget: {
                id: currentCycle
              }
            };
            _this2.tabCycle(e);
          case 38:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 30]]);
    }))();
  },
  /**
   * 跳转用户排行
   */
  jumpToUserRank: function jumpToUserRank(e) {
    var id = e.currentTarget.id;
    var placeName = e.currentTarget.dataset.name;
    var _this$data2 = this.data,
      cycleId = _this$data2.cycleId,
      currentCycle = _this$data2.currentCycle,
      allRankList = _this$data2.allRankList;
    cycleId = Object(allRankList)[currentCycle].cycleId;
    wx.navigateTo({
      url: "./userRank/userRank?placeName=".concat(placeName, "&cycleId=").concat(cycleId, "&currentCycle=").concat(currentCycle, "&id=").concat(id)
    });
    // 打卡页面/排行榜/地点卡片/点击
    wx.reportEvent("smp_clockin_ranking_locationcards_tap", {
      "cardname": placeName
    });
  },
  /**
   * 用户数据
   */
  userInfo: function userInfo() {
    var userPhoto = wx.getStorageSync('loginHead');
    var userName = wx.getStorageSync('uname');
    var uid = wx.getStorageSync('uid');
    this.setData({
      userPhoto: userPhoto,
      userName: userName,
      uid: uid
    });
  },
  /**
   * 复制南南微信
   */
  copyWeiChat: function copyWeiChat() {
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
      var weiChat;
      return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            weiChat = 'nanlilu22';
            _context2.prev = 1;
            _context2.next = 4;
            return wx.setClipboardData({
              data: weiChat
            });
          case 4:
            wx.showToast({
              title: '复制成功',
              icon: 'none'
            });
            _context2.next = 11;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            wx.showToast({
              title: '复制失败',
              icon: 'none'
            });
            console.error('异常' + _context2.t0);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 7]]);
    }))();
  },
  /**
   * 关闭获奖dialog
   */
  closeDialog: function closeDialog() {
    var _this3 = this;
    var clcleNameNew = this.data.clcleNameNew;
    var currentCycle = 0;
    var userRank = this.data.userRank;
    if (clcleNameNew == '第一期') currentCycle = 0;else if (clcleNameNew == '第二期') currentCycle = 1;
    var allRankList = this.data.allRankList;
    var isRewarded = false;
    allRankList[currentCycle].isRewarded = false;
    this.setData({
      isRewarded: isRewarded
    });
    var _loop = function _loop() {
      if (allRankList[i].isRewarded == true) {
        allRankList[i].isRewarded = false;
        isRewarded = true;
        userRank = allRankList[i].rank;
        var _clcleNameNew = '第一期';
        if (i == 1) _clcleNameNew = '第二期';else if (i == 2) _clcleNameNew = '第三期';
        setTimeout(function () {
          _this3.setData({
            userRank: userRank,
            clcleNameNew: _clcleNameNew,
            isRewarded: isRewarded
          });
        }, 500);
        return 1; // break
      }
    };
    for (var i = currentCycle + 1; i < 3; i++) {
      if (_loop()) break;
    }
    var isRuleDialog = false; // 规则dialog
    this.setData({
      allRankList: allRankList,
      isRuleDialog: isRuleDialog
    });
  },
  /**
   * 切换周期
   */
  tabCycle: function tabCycle(e) {
    var _Object$id;
    var id = e.currentTarget.id;
    var _this$data3 = this.data,
      allRankList = _this$data3.allRankList,
      rankList = _this$data3.rankList,
      placeUrlList = _this$data3.placeUrlList,
      currentCycle = _this$data3.currentCycle;
    var rankInfoList = (_Object$id = Object(allRankList)[id]) === null || _Object$id === void 0 ? void 0 : _Object$id.ranking;
    // 判空
    if (Object.entries(rankInfoList).length == 0) return;
    // 地点排行列表
    rankList = Object.keys(rankInfoList).map(function (key) {
      return {
        name: key == '宿舍楼A' ? '1-2宿舍楼' : key == '宿舍楼B' ? '3-8宿舍楼' : key,
        num: rankInfoList[key],
        url: placeUrlList[key]
      };
    });
    currentCycle = id == 0 ? 0 : id == 1 ? 1 : 2;
    this.setData({
      rankList: rankList,
      currentCycle: currentCycle
    });
  },
  /**
   * 打卡规则dialog
   */
  openRulesDialog: function openRulesDialog() {
    // 打卡页面/排行榜/排行规则/点击
    wx.reportEvent("smp_clockin_ranking_rankingrules_tap", {});
    var isRuleDialog = true;
    this.setData({
      isRuleDialog: isRuleDialog
    });
  },
  /**
   * 获取当前日期
   */
  getCurrentDate: function getCurrentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');
    var currentDate = "".concat(year, ".").concat(month, ".").concat(day);
    this.setData({
      currentDate: currentDate
    });
  },
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
    var clcleName = option.clcleName;
    this.setData({
      clcleNameNew: clcleName,
      clcleName: clcleName
    });
    this.getNavBarHeitht(); // 导航栏高度
    this.setTopbarMiddle(); // 导航栏中点
    this.updateClockData(); // 处理周期状态数据
    this.getPlaceRank(); // 获取位置排行
    this.userInfo(); // 用户信息
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    this.getCurrentDate();
  },
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