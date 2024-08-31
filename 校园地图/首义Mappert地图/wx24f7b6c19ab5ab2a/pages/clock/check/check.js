var _slicedToArray2 = require("../../../@babel/runtime/helpers/slicedToArray");require("../../../@babel/runtime/helpers/Arrayincludes");var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _defineProperty2 = require("../../../@babel/runtime/helpers/defineProperty");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var request = require('../../../utils/request');var url = require('../../../utils/link');var amapFile = require('../../../utils/amap-wx.130');Page({
  data: {
    urlList: {
      nanlilu: 'http://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU5NjgxNzM0NA==#wechat_redirect' // 南里路公众号主页
    },

    pngUrlList: {
      gift: 'http://introduce.mcdd.top/fmin-min-9523c2ab-AI-icon-gift-face.png',
      // 一堆周边礼品
      mapManHoldCup: 'http://introduce.mcdd.top/sp-web-imageBank-202407260907-bew2xk.png',
      // 地图小人捧杯
      mapManRaiseCup: 'http://introduce.mcdd.top/sp-web-imageBank-202407252107-u7grwf.png',
      // 地图小人举杯
      cardBackgroundLawn: 'http://introduce.mcdd.top/sp-web-imageBank-202407252107-42nyau.png' // 卡片背景草坪
    },

    svgUrlList: {
      successQuestionNannan: 'http://introduce.mcdd.top/fmin-min-3ec72a53-question-success-nannan-face.svg',
      // 回答正确南南脸
      errorQuestionNannan: 'http://introduce.mcdd.top/fmin-min-e23c3384-question-error-nannan-face.svg',
      // 回答错误南南脸
      questionNannan: 'http://introduce.mcdd.top/fmin-min-b12b225b-question-nannan-face.svg',
      // 南南问号脸
      rightArrow: 'http://introduce.mcdd.top/fmin-min-22966fcf-right-arrow-white-line.svg',
      // 白色箭头线性
      nannanFriendsLogo: 'http://introduce.mcdd.top/fmin-min-eca99b62-nannan-logo-green-face.svg',
      // 南南logo
      arrow: 'http://introduce.mcdd.top/fmin-min-0ffc66d0-white-arrow-face.svg',
      // 实心白色箭头
      labelText: 'http://introduce.mcdd.top/fmin-min-8b89c82f-white-text.svg',
      // 艺术字：点击前往首义首义查看周周边
      bubblingText: 'http://introduce.mcdd.top/fmin-min-44285e0c-bubbling-text.svg',
      // 艺术字 周边礼品免费得
      noClockStatuText: 'http://introduce.mcdd.top/fmin-min-2c5c3bd6-clock-statu-text.svg',
      // 艺术字 签到未开启
      clockStatuText: 'http://introduce.mcdd.top/fmin-min-25e504de-clock-tips-text.svg',
      // 艺术字 快来参加打卡吧
      greenArrowLineIcon: 'http://introduce.mcdd.top/fmin-min-47528450-green-arrow-line.svg',
      // 绿色箭头
      twillGreenLine: 'http://introduce.mcdd.top/fmin-min-fb2452ef-twill-green-line.svg',
      // 状态栏斜纹icon
      noticeStatusBarText: 'http://introduce.mcdd.top/fmin-min-3157bd81-status-bar-show-text.svg',
      // 艺术字 排行榜公示中
      inactiveStatusBarText: 'http://introduce.mcdd.top/fmin-min-2c5c3bd6-clock-statu-text.svg',
      // 艺术字 签到未开启
      clockStatusBarText: 'http://introduce.mcdd.top/fmin-min-f1363c62-status-bar-ing-text.svg',
      // 艺术字 打卡进行中
      endStatusBarText: 'http://introduce.mcdd.top/fmin-min-0d0b69da-status-bar-end-text.svg',
      // 艺术字 活动已结束
      firstPeriodText: 'http://introduce.mcdd.top/fmin-min-17e32b86-first-period-text.svg',
      // 艺术字 第一期
      secondPeriodText: 'http://introduce.mcdd.top/fmin-min-aa71fe27-second-period-text.svg',
      // 艺术字 第二期
      thirdPeriodText: 'http://introduce.mcdd.top/fmin-min-3e0bd488-third-period-text.svg',
      // 艺术字 第三期
      logo: 'http://introduce.mcdd.top/fmin-min-36434dcc-smp-logo-face.svg',
      // smp的logo
      logoText: 'http://introduce.mcdd.top/fmin-min-dd9d19bb-log-text.svg',
      // 艺术字 首义地图
      tickGreen: 'http://introduce.mcdd.top/fmin-min-eae616d6-tick-green-face.svg',
      // 对勾绿色
      oneDayClocking: 'http://introduce.mcdd.top/fmin-min-13830730-first-day-clocking.svg',
      // 艺术字 已经签到1天
      twoDayClocking: 'http://introduce.mcdd.top/fmin-min-981487df-two-day-clocking.svg',
      // 艺术字 已经签到2天
      threeDayClocking: 'http://introduce.mcdd.top/fmin-min-fe2d970f-three-day-clocking.svg',
      // 艺术字 已经签到3天
      fourDayClocking: 'http://introduce.mcdd.top/fmin-min-e65ec240-four-day-clocking.svg',
      // 艺术字 已经签到4天
      fiveDayClocking: 'http://introduce.mcdd.top/fmin-min-073051a2-five-day-clocking.svg',
      // 艺术字 已经签到5天
      sixDayClocking: 'http://introduce.mcdd.top/fmin-min-c6083be9-six-day-clocking.svg',
      // 艺术字 已经签到6天
      sevenDayClocking: 'http://introduce.mcdd.top/fmin-min-5f5ae60d-senven-day-clocking.svg',
      // 艺术字 已经签到7天
      replenishmentToastImage: 'http://introduce.mcdd.top/fmin-min-2b56cdc0-replenishment-toast-face.svg',
      // 补签方式toast的背景图
      clockRanking: 'http://introduce.mcdd.top/fmin-min-1578f626-clock-ranking-text.svg',
      // 艺术字 打卡排行榜
      activityText: 'http://introduce.mcdd.top/fmin-min-b47688a0-activity-introduction-text.svg',
      // 艺术字 活动介绍
      video: 'http://introduce.mcdd.top/fmin-min-782a97ed-video-face-green.svg',
      // 播放器icon
      work: 'http://introduce.mcdd.top/fmin-min-61ac48fa-work-face-green.svg' // 任务icon
    },

    year: 0,
    // 当前年份
    clockArray: [],
    // 已打卡数组
    askToastShow: false,
    // toast的question的出现
    toastQuestionTitle: '',
    // toast的question的title
    toastQuestionIcon: '',
    // toast的question的logo
    questionIcon: '',
    // 用户选错后南南logo
    clockQuestion: {
      "stem": '',
      "optionA": '',
      "optionB": '',
      "optionC": '',
      "correctOption": ''
    },
    // 随机补签问题
    clockQuestionArray: [{
      key: 'optionA',
      color: 'normol'
    }, {
      key: 'optionB',
      color: 'normol'
    }, {
      key: 'optionC',
      color: 'normol'
    } // normol/sure/error 正常/正确/错误
    ],

    // 随机补签问题对应数组
    check: {
      'calendarInformation': {},
      'postClockApiRecord': {}
    },
    // 用户缓存数据
    toastPrizeCard: false,
    // 获奖toast弹出
    rpx: 2,
    // 屏幕分辨率
    workList: [{
      'icon': 'video',
      'title': '查看活动推文视频讲解',
      'stitle': '详细讲解活动流程与规则~',
      'id': 'viewTweet'
    }, {
      'icon': 'work',
      'title': '查看活动规则文字说明',
      'stitle': '包含此次活动的全部规则声明~',
      'id': 'viewRule'
    }],
    // 活动介绍列表
    makeUpToast: [{
      id: 0,
      title: '关注南南公众号',
      stitle: '去关注'
    }, {
      id: 1,
      title: '分享活动',
      stitle: '去分享'
    }],
    // 补签方法toast的logo部分
    clockingDayNum: 0,
    // 打卡已经x天
    clockingDay: {
      '1': 'oneDayClocking',
      '2': 'twoDayClocking',
      '3': 'threeDayClocking',
      '4': 'fourDayClocking',
      '5': 'fiveDayClocking',
      '6': 'sixDayClocking',
      '7': 'sevenDayClocking'
    },
    // 打卡已经x天对应key值
    clockApiInfo: {},
    // 打卡/补签api所需参数
    startTime: '',
    // 开启时间 蒙层显示
    leftTopTips: "",
    dateCardCss: {
      '待签': 'wait',
      '补签': 'mending',
      '今日': 'nowDay',
      '漏签': 'leakage',
      '已签': 'has'
    },
    // 日期小卡片的css值对
    cycleName: {
      '第一期': 'firstPeriodText',
      '第二期': 'secondPeriodText',
      '第三期': 'thirdPeriodText'
    },
    // 第x周期的key值对
    clockStatuKey: {
      'inactive': {
        'punchTitle': ['活动还未开启~', '可以去看看周边奖池哦~']
      },
      'notice': {
        'punchTitle': ['现在是排行榜公示期哦~', '快去查看你喜欢的地点排行吧~']
      },
      'end': {
        'punchTitle': ['活动已结束', '快去查看你喜欢的地点排行吧~']
      },
      'clock': {
        'punchTitle': ['每日首次打卡即算签到成功，为你喜欢的地点打卡吧~', '连续打卡7天可获得「周边抽奖机会*1」']
      },
      'prize': {
        'punchTitle': ['本期奖励已经获取~', '前往获奖记录查看吧~']
      }
    },
    // 打卡卡片提示文字 clock/notice/end 表示打卡期/公示期/已结束三种状态
    topbarTitle: '打卡赢周边',
    // topbar标题
    userId: '',
    // 用户id
    uname: '',
    // 用户name
    unionid: '',
    // 用户unionid
    calendarInformation: {},
    nowDay: '',
    // 今天日期
    nowDate: '',
    // YYYY-MM-DD hh:mm:ss格式的今天日期
    isFuzzyLocation: '',
    // 用户位置
    isAuthorization: false,
    // 是否授权了地理位置
    loginHead: '',
    // 用户头像
    titleTimeText: '',
    // toast打卡卡片中时间
    postClockApiRecord: {},
    // 打卡/补签api返回值 
    place: '',
    // 用户打卡地点
    toastCard: false,
    // 打卡成功卡片弹出
    clockHistory: {},
    // 打卡记录
    prizesClock: false,
    // 打卡是否已经七天
    dialog: false,
    clockReward: [],
    // 获奖记录
    appidList: {
      'sy': 'wx3bc34f074a36d6a6'
    },
    // 跳转小程序appid
    makeUpToastShow: false,
    // 是否弹出补签方式
    clockMaskShow: false,
    // 打卡的蒙层显示
    tapWatch: false,
    // 点击事件监控
    userSetting: {},
    // 用户设置
    makeupTitle: '可以点击底端卡片前往首义首义寻找答案~',
    // 补签回答问题弹窗title
    questionToastShow: false,
    // 回答问题弹窗出现
    makeUpData: '',
    // 补签的时间
    latitude: 0,
    // 维度
    longitude: 0,
    // 经度
    questionOption: '',
    // 当前问题选中项
    currentCycle: '',
    // 当前周期
    currentCycleState: '' // 当前周期状态
  },
  /**
   * 关闭补签弹窗
   */
  closeMakeupDialog: function closeMakeupDialog() {
    var _this = this;
    var clockQuestionArray = this.data.clockQuestionArray;
    clockQuestionArray.forEach(function (item) {
      item.color = '';
    });
    this.setData({
      questionOption: '',
      clockQuestionArray: clockQuestionArray,
      makeUpToastShow: false,
      questionToastShow: false,
      askToastShow: false
    });
    setTimeout(function () {
      _this.data.toastQuestionTitle = '';
    }, 300);
  },
  /**
   * 回答问题弹窗点击选择选择
   */
  chooseOption: function chooseOption(e) {
    var _this2 = this;
    var questionOption = this.data.questionOption;
    var clockQuestion = this.data.clockQuestion;
    var clockQuestionArray = this.data.clockQuestionArray;
    var id = e.currentTarget.dataset.id;
    if (questionOption == id) {
      return;
    }
    questionOption = id;
    var makeupTitle = this.data.makeupTitle;
    var questionIcon = this.data.questionIcon;
    var toastQuestionIcon = this.data.toastQuestionIcon;
    var toastQuestionTitle = this.data.toastQuestionTitle;
    var askToastShow = this.data.askToastShow;
    var questionToastShow = this.data.questionToastShow;
    var makeUpData = this.data.makeUpData;
    var color = '';
    var count = 1;
    if (toastQuestionTitle == '答对啦\n前往补签中~' || toastQuestionTitle == '答错了\n本次补签失败') {
      return;
    }
    if (id !== null && id !== void 0 && id.includes(clockQuestion.correctOption)) {
      // 埋点
      wx.reportEvent("smp_clockin_countersign_sucsigntoast", {});
      // 选择正确
      toastQuestionIcon = this.data.svgUrlList.successQuestionNannan;
      toastQuestionTitle = '答对啦\n前往补签中~';
      color = 'sure';
      askToastShow = true;
      questionToastShow = false;
    } else {
      // 选择错误
      color = 'error';
      toastQuestionIcon = this.data.svgUrlList.errorQuestionNannan;
      questionIcon = this.data.svgUrlList.errorQuestionNannan;
      makeupTitle = '选错啦，再仔细看看吧~';
    }
    clockQuestionArray.forEach(function (item) {
      if (item.color == 'error' && color == 'error') {
        count++;
        if (count == 2) {
          toastQuestionTitle = '答错了\n本次补签失败';
          askToastShow = true;
          questionToastShow = false;
          // 埋点
          wx.reportEvent("smp_clockin_countersign_failsigntoast", {});
        }
      }
      if (item.key == id) {
        item.color = color;
      }
    });
    this.setData({
      questionOption: questionOption,
      toastQuestionTitle: toastQuestionTitle,
      toastQuestionIcon: toastQuestionIcon,
      makeupTitle: makeupTitle,
      clockQuestionArray: clockQuestionArray
    });
    setTimeout(function () {
      if (count == 2) {
        _this2.setTimeToast('questionToastShow', false, 0.2);
        _this2.setTimeToast('askToastShow', true, 0.4);
        setTimeout(function () {
          _this2.closeMakeupDialog();
        }, 1200);
      }
      if (color == 'sure') {
        _this2.setTimeToast('questionToastShow', false, 0.2);
        _this2.setTimeToast('askToastShow', true, 0.4);
        setTimeout(function () {
          wx.navigateTo({
            url: '/pages/clock/newmap/newmap?type=' + 'MakeUp' + '&makeUpData=' + makeUpData
          });
          _this2.closeMakeupDialog();
        }, 1200);
      }
    }, 500);
  },
  /**
   * 延迟弹窗
   */
  setTimeToast: function setTimeToast(show, statu, time) {
    var _this3 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return setTimeout(function () {
              _this3.setData(_defineProperty2({}, show, statu));
            }, time * 1000);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 弹窗开始回答问题
   */
  askShow: function askShow() {
    // 埋点
    wx.reportEvent("smp_clockin_countersign_qabutton_tap", {});
    this.setData({
      makeUpToastShow: false,
      questionToastShow: true
    });
  },
  /**
   * closeToast关闭弹窗
   */
  closeToast: function closeToast(e) {
    var _this4 = this;
    var id = e.currentTarget.dataset.id;
    var postClockApiRecord = this.data.postClockApiRecord;
    var toastPrizeCard = this.data.toastPrizeCard;
    switch (id) {
      case 'clock':
        if (postClockApiRecord !== null && postClockApiRecord !== void 0 && postClockApiRecord.isAwarded) {
          // 打卡页面/获奖弹窗埋点
          wx.reportEvent("smp_clockin_prizedialog", {});
          if (postClockApiRecord.isAwarded) {
            toastPrizeCard = true;
          }
        }
        break;
      case 'prize':
        toastPrizeCard = false;
        break;
    }
    this.setData({
      toastCard: false
    });
    setTimeout(function () {
      _this4.setData({
        toastPrizeCard: toastPrizeCard
      });
    }, 300);
  },
  tapWatch: function tapWatch() {
    var _this5 = this;
    this.data.tapWatch = true;
    setTimeout(function () {
      _this5.data.tapWatch = false;
    }, 1000);
  },
  /**
   * 点击去查看button
   */
  tapViewButton: function tapViewButton(e) {
    var _this6 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
      var id, calendarInformation, tapWatch;
      return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            id = e.currentTarget.dataset.id;
            calendarInformation = _this6.data.calendarInformation;
            tapWatch = _this6.data.tapWatch;
            if (!tapWatch) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return");
          case 5:
            _this6.tapWatch();
            if (id) {
              _context2.next = 8;
              break;
            }
            return _context2.abrupt("return");
          case 8:
            _context2.t0 = id;
            _context2.next = _context2.t0 === "viewRule" ? 11 : _context2.t0 === "viewTweet" ? 13 : 17;
            break;
          case 11:
            wx.navigateTo({
              url: '../clockRule/clockRule'
            });
            return _context2.abrupt("break", 17);
          case 13:
            _context2.next = 15;
            return wx.setStorageSync('src', calendarInformation.tweetLink);
          case 15:
            wx.navigateTo({
              url: '../../webtweet/webtweet'
            });
            return _context2.abrupt("break", 17);
          case 17:
            _this6.setData({
              tapWatch: false
            });
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   * gotoMini 跳转到其他小程序
   */
  gotoMini: function gotoMini(e) {
    var id = e.currentTarget.dataset.id;
    var tapWatch = this.data.tapWatch;
    var path = 'pages/index/index';
    if (id == 'sy-product') {
      path = 'pages/product/productList/productList';
      // 打卡页面/礼物卡片/点击埋点
      wx.reportEvent("smp_clockin_presentcard_tap", {});
    } else {
      // 埋点
      wx.reportEvent("smp_clockin_countersign_qadialog_jumparea_tap", {});
    }
    if (tapWatch) return;
    this.tapWatch();
    var sy = this.data.appidList['sy'];
    wx.navigateToMiniProgram({
      appId: sy,
      envVersion: 'release',
      path: path
    });
    this.setData({
      tapWatch: false
    });
  },
  /**
   * 补签toast的点击事件
   * id 0 关注公众号
   * id 1 分享活动
   */
  makeUpTapEvent: function makeUpTapEvent(e) {
    var _this7 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
      var nanlilu, id;
      return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            nanlilu = _this7.data.urlList.nanlilu;
            id = e.currentTarget.dataset.id; // 分享活动
            if (!id) {
              _context3.next = 5;
              break;
            }
            _context3.next = 8;
            break;
          case 5:
            _context3.next = 7;
            return wx.setStorageSync("src", nanlilu);
          case 7:
            wx.navigateTo({
              url: '../../webtweet/webtweet'
            });
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  /**
   * 点击漏签，弹出补签方法
   */
  makeUpClock: function makeUpClock(e) {
    var _this8 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
      var tapWatch, id, _this8$data, userId, uname, isAuthorization, isFuzzyLocation, clockQuestion, questionIcon, makeupTitle, userSetting, makeUpData, calendarInformation, arr, today, uid, _yield$request$get, res;
      return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            // 打卡页面/补签弹窗埋点
            wx.reportEvent("smp_clockin_countersigndialog", {});
            tapWatch = _this8.data.tapWatch;
            if (!tapWatch) {
              _context4.next = 4;
              break;
            }
            return _context4.abrupt("return");
          case 4:
            _this8.tapWatch();
            id = e.currentTarget.dataset.id;
            _this8$data = _this8.data, userId = _this8$data.userId, uname = _this8$data.uname, isAuthorization = _this8$data.isAuthorization, isFuzzyLocation = _this8$data.isFuzzyLocation, clockQuestion = _this8$data.clockQuestion, questionIcon = _this8$data.questionIcon, makeupTitle = _this8$data.makeupTitle, userSetting = _this8$data.userSetting; // 判断用户登录
            if (userId) {
              _context4.next = 12;
              break;
            }
            _this8.showDialog();
            return _context4.abrupt("return");
          case 12:
            if (uname) {
              _context4.next = 15;
              break;
            }
            wx.navigateTo({
              url: '/pages/login/updataUserInfo/updataUserInfo'
            });
            return _context4.abrupt("return");
          case 15:
            if (isAuthorization && isFuzzyLocation.length) {
              _context4.next = 23;
              break;
            }
            if (!(JSON.stringify(userSetting).length !== 2 && !userSetting["scope.userFuzzyLocation"])) {
              _context4.next = 21;
              break;
            }
            _this8.dialogShow();
            return _context4.abrupt("return");
          case 21:
            _this8.getFuzzyLocation('makeUp', id);
            return _context4.abrupt("return");
          case 23:
            makeUpData = _this8.data.makeUpData;
            calendarInformation = _this8.data.calendarInformation;
            arr = calendarInformation.data[id].date.split('.');
            today = new Date();
            makeUpData = "".concat(arr[0], "-").concat(arr[1], " ").concat(today.toTimeString().substring(0, 8));
            // 埋点
            wx.reportEvent("smp_clockin_countersign_tap", {});
            uid = 'uid=' + userId;
            _context4.prev = 30;
            _context4.next = 33;
            return request.get(url.getClockQuestion, uid);
          case 33:
            _yield$request$get = _context4.sent;
            res = _yield$request$get.data;
            if (res.code == 20000) {
              clockQuestion = res.data;
            }
            _context4.next = 42;
            break;
          case 38:
            _context4.prev = 38;
            _context4.t0 = _context4["catch"](30);
            _this8.selectComponent("#toast").showToastAuto("网络错误", "error", 1);
            console.log(_context4.t0);
          case 42:
            questionIcon = _this8.data.svgUrlList.questionNannan;
            makeupTitle = '可以点击底端卡片前往首义首义寻找答案~';
            _this8.setData({
              makeUpData: makeUpData,
              makeUpToastShow: true,
              makeupTitle: makeupTitle,
              questionIcon: questionIcon,
              clockQuestion: clockQuestion,
              tapWatch: false
            });
          case 45:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[30, 38]]);
    }))();
  },
  /**
   * 点击复制南南微信button
   */
  copyButton: function copyButton() {
    wx.setClipboardData({
      data: 'nanlilu22'
    });
    this.setData({
      toastPrizeCard: false,
      toastCard: false
    });
  },
  /**
   * 跳转到获奖记录页面
   */
  gotoRewardPage: function gotoRewardPage() {
    var _this9 = this;
    // 打卡页面/领奖记录/点击埋点
    wx.reportEvent("smp_clockin_awardrecord_tap", {});
    var _this$data = this.data,
      loginHead = _this$data.loginHead,
      clockReward = _this$data.clockReward,
      uname = _this$data.uname,
      userId = _this$data.userId;
    var tapWatch = this.data.tapWatch;
    if (tapWatch) return;
    this.tapWatch();
    if (!(clockReward !== null && clockReward !== void 0 && clockReward.length)) {
      wx.showToast({
        'title': '暂无获奖记录~',
        'icon': 'none'
      });
      return;
    }
    var option = {
      'clockReward': clockReward,
      'userInfo': {
        'loginHead': loginHead,
        'uname': uname,
        'userId': userId
      }
    };
    wx.navigateTo({
      url: '../checkReward/checkReward',
      success: function success(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', option);
        _this9.setData({
          tapWatch: false
        });
      }
    });
  },
  /**
   * 跳转到打卡记录页面
   */
  gotoHistoryPage: function gotoHistoryPage() {
    var _this10 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee5() {
      var _this10$data, loginHead, clockHistory, uname, userId, tapWatch, option;
      return _regeneratorRuntime2().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            // 打卡页面/打卡记录/点击埋点
            wx.reportEvent("smp_clockin_punchingrecord_tap", {});
            _this10$data = _this10.data, loginHead = _this10$data.loginHead, clockHistory = _this10$data.clockHistory, uname = _this10$data.uname, userId = _this10$data.userId;
            tapWatch = _this10.data.tapWatch;
            if (!tapWatch) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return");
          case 5:
            _this10.tapWatch();
            if (userId) {
              _context5.next = 8;
              break;
            }
            return _context5.abrupt("return");
          case 8:
            option = {
              'clockHistory': clockHistory,
              'userInfo': {
                'loginHead': loginHead,
                'uname': uname,
                'userId': userId
              }
            };
            wx.navigateTo({
              url: '../checkHistory/checkHistory',
              success: function success(res) {
                // 通过eventChannel向被打开页面传送数据
                res.eventChannel.emit('acceptDataFromOpenerPage', option);
              }
            });
            _this10.setData({
              tapWatch: false
            });
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  /**
   * 弹出的打卡成功toast，button事件
   */
  konwButton: function konwButton() {
    this.setData({
      toastCard: false
    });
  },
  /**
   * 用户进行打卡
   * @param place 上个页面返回值（打卡地点）
   * @param type ClockIn/MakeUp 打卡/补签
   */
  clockPlace: function clockPlace(place, type, makeUpData) {
    var _this11 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee6() {
      var tapWatch, makeupType, _this11$data, year, clockApiInfo, userId, nowDate, isFuzzyLocation, postClockApiRecord, toastCard, calendarInformation, data, _yield$request$post, res;
      return _regeneratorRuntime2().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            tapWatch = _this11.data.tapWatch;
            if (!tapWatch) {
              _context6.next = 3;
              break;
            }
            return _context6.abrupt("return");
          case 3:
            _this11.tapWatch();
            makeupType = type == 'MakeUp' ? 'ask' : '';
            _this11$data = _this11.data, year = _this11$data.year, clockApiInfo = _this11$data.clockApiInfo, userId = _this11$data.userId, nowDate = _this11$data.nowDate, isFuzzyLocation = _this11$data.isFuzzyLocation, postClockApiRecord = _this11$data.postClockApiRecord, toastCard = _this11$data.toastCard, calendarInformation = _this11$data.calendarInformation;
            data = makeUpData ? year + '-' + makeUpData : nowDate;
            clockApiInfo = {
              "uid": userId,
              "type": type,
              "makeupType": makeupType,
              "date": data,
              "clockLocation": place,
              "userLocation": isFuzzyLocation
            };
            _this11.selectComponent("#toast").showToastAuto("加载中", "lodding", 100);
            _context6.prev = 9;
            _context6.next = 12;
            return request.post(url.postClock, clockApiInfo);
          case 12:
            _yield$request$post = _context6.sent;
            res = _yield$request$post.data;
            _this11.selectComponent("#toast").hiddenToast();
            if (res.code == 20000) {
              if (place == '宿舍楼A') {
                place = '3-8宿舍楼';
              } else if (place == '宿舍楼B') {
                place = '1-2宿舍楼';
              }
              _this11.setData({
                place: place
              }); // 页面传参给定place的值
              postClockApiRecord = res.data;
              calendarInformation.dailyNum = postClockApiRecord.dailyNum;
              // 打卡页面/打卡弹窗埋点
              wx.reportEvent("smp_clockin_clockdialog", {});
              toastCard = true;
              wx.setStorageSync('check', {
                'calendarInformation': calendarInformation,
                'postClockApiRecord': postClockApiRecord
              });
              _this11.getPunchCalendar(userId);
              _this11.setData({
                type: type,
                tapWatch: false,
                calendarInformation: calendarInformation,
                toastCard: toastCard,
                postClockApiRecord: postClockApiRecord
              });
            } else {
              _this11.selectComponent("#toast").showToastAuto("网络错误", "error", 1);
            }
            _context6.next = 22;
            break;
          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](9);
            _this11.selectComponent("#toast").showToastAuto("网络错误", "error", 1);
            console.log(_context6.t0);
          case 22:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[9, 18]]);
    }))();
  },
  /**
   * 获取今天日期 + 校验
   */
  dateCheck: function dateCheck() {
    // 获取当前日期
    var today = new Date();
    // 获取年份、月份和日期
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    // 获取时间戳（毫秒）
    var nowDay = "".concat(month, ".").concat(date);
    var nowDate = "".concat(year, "-").concat(month, "-").concat(date, " ").concat(today.toTimeString().substring(0, 8));
    var titleTimeText = "".concat(year, ".").concat(month, ".").concat(date);
    this.setData({
      year: year,
      titleTimeText: titleTimeText,
      nowDay: nowDay,
      nowDate: nowDate
    });
    return nowDay;
  },
  /**
   * 地理位置授权 (获取模糊位置)
   * @param latitude纬度
   * @param long经度
   */
  getAdress: function getAdress(latitude, longitude) {
    var that = this;
    var isFuzzyLocation = this.data.isFuzzyLocation;
    var myAmapFun = new amapFile.AMapWX({
      key: "3f546d4004e51f3be4167a81be7ce78a"
    });
    myAmapFun.getRegeo({
      location: '' + longitude + ',' + latitude + '',
      //location的格式为'经度,纬度'
      success: function success(data) {
        var _data$0$regeocodeData = data[0].regeocodeData.addressComponent,
          province = _data$0$regeocodeData.province,
          city = _data$0$regeocodeData.city,
          country = _data$0$regeocodeData.country;
        if (city.length) {
          city = city.replace('市', '');
          province = province.replace('省', '');
          isFuzzyLocation = province + city;
        } else {
          province = province.replace('省', '');
          isFuzzyLocation = country + province;
        }
        that.setData({
          isFuzzyLocation: isFuzzyLocation
        });
      },
      fail: function fail() {
        var latitude = this.data.latitude;
        var longitude = this.data.longitude;
        this.getAdress(latitude, longitude);
      }
    });
  },
  /**
   * 地理位置授权 (获取经纬度)
   */
  getFuzzyLocation: function getFuzzyLocation(type, id) {
    var _this12 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee7() {
      var that, isAuthorization, data;
      return _regeneratorRuntime2().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            that = _this12;
            isAuthorization = _this12.data.isAuthorization;
            data = _this12.data.nowDate;
            _context7.next = 5;
            return wx.authorize({
              scope: 'scope.userFuzzyLocation',
              success: function success(res) {
                if (res.errMsg == 'authorize:ok') {
                  wx.getFuzzyLocation({
                    type: 'wgs84',
                    success: function success(res) {
                      that.getAdress(res.latitude, res.longitude);
                      var userSetting = {
                        "scope.userFuzzyLocation": true
                      };
                      wx.setStorageSync('userSetting', userSetting);
                      if (type == 'button') {
                        wx.navigateTo({
                          url: '/pages/clock/newmap/newmap?type=' + 'ClockIn'
                        });
                      }
                      that.setData({
                        latitude: res.latitude,
                        longitude: res.longitude,
                        tapWatch: false,
                        userSetting: userSetting,
                        isAuthorization: true
                      });
                      if (type == 'makeUp') {
                        var e = {
                          currentTarget: {
                            dataset: {
                              id: id
                            }
                          }
                        };
                        that.makeUpClock(e);
                      }
                    }
                  });
                }
              },
              fail: function fail(err) {
                var userSetting = {
                  "scope.userFuzzyLocation": false
                };
                wx.setStorageSync('userSetting', userSetting);
                that.setData({
                  userSetting: userSetting,
                  isAuthorization: false
                });
              }
            });
          case 5:
            if (!isAuthorization) {
              _context7.next = 9;
              break;
            }
            return _context7.abrupt("return", true);
          case 9:
            return _context7.abrupt("return", false);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  /**
   * 点击进行打卡
   * 功能流程:用户登录>用户位置>打卡
   */
  tapClockButton: function tapClockButton() {
    var _this13 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee8() {
      var _this13$data, userId, uname, isAuthorization, isFuzzyLocation, calendarInformation, userSetting, latitude, longitude, tapWatch, data;
      return _regeneratorRuntime2().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _this13$data = _this13.data, userId = _this13$data.userId, uname = _this13$data.uname, isAuthorization = _this13$data.isAuthorization, isFuzzyLocation = _this13$data.isFuzzyLocation, calendarInformation = _this13$data.calendarInformation, userSetting = _this13$data.userSetting, latitude = _this13$data.latitude, longitude = _this13$data.longitude;
            tapWatch = _this13.data.tapWatch; // 判断用户登录
            if (userId) {
              _context8.next = 7;
              break;
            }
            _this13.showDialog();
            return _context8.abrupt("return");
          case 7:
            if (uname) {
              _context8.next = 10;
              break;
            }
            wx.navigateTo({
              url: '/pages/login/updataUserInfo/updataUserInfo'
            });
            return _context8.abrupt("return");
          case 10:
            if (!(calendarInformation.dailyNum <= 0)) {
              _context8.next = 12;
              break;
            }
            return _context8.abrupt("return");
          case 12:
            if (!tapWatch) {
              _context8.next = 14;
              break;
            }
            return _context8.abrupt("return");
          case 14:
            if (isAuthorization && isFuzzyLocation.length) {
              _context8.next = 22;
              break;
            }
            if (!(JSON.stringify(userSetting).length !== 2 && !userSetting["scope.userFuzzyLocation"])) {
              _context8.next = 20;
              break;
            }
            _this13.dialogShow();
            return _context8.abrupt("return");
          case 20:
            _this13.getFuzzyLocation('button');
            return _context8.abrupt("return");
          case 22:
            _this13.tapWatch();
            // 跳转到打卡图
            data = _this13.data.nowDate;
            wx.navigateTo({
              url: '/pages/clock/newmap/newmap?type=' + 'ClockIn'
            });
            _this13.setData({
              tapWatch: false
            });
          case 26:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  },
  /**
   * 请求获取打卡位置dialog弹出
   */
  dialogShow: function dialogShow() {
    this.setData({
      dialog: true,
      dialogTitle: '请求获取打卡位置',
      dialogStitle: ''
    });
  },
  /**
   * 获取获奖记录api
   */
  getClockReward: function getClockReward(userId) {
    var _this14 = this;
    var clockReward = this.data.clockReward;
    var uid = 'uid=' + userId;
    request.get(url.getClockReward, uid).then(function (res) {
      var info = res.data;
      if (info.code == 20000) {
        clockReward = info.data;
        _this14.setData({
          clockReward: clockReward
        });
      }
    });
  },
  /**
   * 获取打卡记录api
   */
  getClockHistory: function getClockHistory(userId) {
    var _this15 = this;
    var clockHistory = this.data.clockHistory;
    var uid = 'uid=' + userId;
    try {
      request.get(url.getClockHistory, uid).then(function (res) {
        var info = res.data;
        if (info.code == 20000) {
          clockHistory = info.data;
          _this15.setData({
            clockHistory: clockHistory
          });
        }
      });
    } catch (error) {
      this.selectComponent("#toast").showToastAuto("网络错误", "error", 1);
      console.log(error);
    }
  },
  /**
   * 获取打卡日历API
   */
  getPunchCalendar: function getPunchCalendar(userId) {
    var _this16 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee9() {
      var calendarInformation, startTime, clockingDayNum, prizesClock, clockMaskShow, currentCycleInfo, uid, _yield$request$get2, res, id, arr, nowDay, _arr;
      return _regeneratorRuntime2().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            calendarInformation = _this16.data.calendarInformation;
            startTime = _this16.data.startTime;
            clockingDayNum = 0;
            prizesClock = _this16.data.prizesClock;
            clockMaskShow = _this16.data.clockMaskShow;
            currentCycleInfo = {};
            _context9.prev = 6;
            uid = 'uid=' + userId;
            _context9.next = 10;
            return request.get(url.getPunchCalendar, uid);
          case 10:
            _yield$request$get2 = _context9.sent;
            res = _yield$request$get2.data;
            if (res.code == 20000) {
              // 将打卡信息传递处理
              currentCycleInfo.cycleName = res.data.cycleName;
              currentCycleInfo.status = res.data.status;
              currentCycleInfo.noticeTime = res.data.noticeTime;
              _this16.checkCard(currentCycleInfo);
              id = 0;
              arr = [];
              nowDay = _this16.dateCheck();
              res.data.data.forEach(function (item) {
                // 处理时间格式
                if (item.date[0] == '0') {
                  item.date = item.date.slice(1);
                }
                item.date = item.date.replace('-', '.');
                item.date = item.date.replace('.0', '.');
                // 处理显示状态（今日，待签，漏签）
                item.id = id;
                if (nowDay == item.date) {
                  item.statusText = '今日';
                  // 筛选漏签
                  for (var i = 0; i <= id; i++) {
                    if (res.data.data[i].status) {
                      res.data.data[i].statusText = '已签';
                      clockingDayNum = clockingDayNum + 1;
                    } else if (i !== id) {
                      res.data.data[i].statusText = '漏签';
                      res.data.data[i].statusStext = '补签';
                    }
                    // 当打卡满7天时
                    if (id == 6) {
                      arr.push(item.status);
                      if (i == 6) {
                        prizesClock = !arr.includes(false);
                      }
                    }
                  }
                } else {
                  item.statusText = '待签';
                }
                if (res.data.status == 'notice') {
                  for (var _i = 0; _i <= 6; _i++) {
                    if (res.data.data[_i].status) {
                      res.data.data[_i].statusText = '已签';
                      clockingDayNum = clockingDayNum + 1;
                    } else {
                      res.data.data[_i].statusText = '漏签';
                      res.data.data[_i].statusStext = '补签';
                    }
                  }
                }
                id++;
              });
              // 处理蒙层时间格式
              if (res.data.status == 'notice' || res.data.status == 'inactive') {
                _arr = res.data.nextStartTime.split('-');
                if (_arr[1][0] == '0') {
                  _arr[1] = _arr[1].slice(1);
                }
                _arr[2] = _arr[2].replace(' ', '日').slice(0, -3);
                res.data.nextStartTime = "".concat(_arr[1], "\u6708").concat(_arr[2], "\u5F00\u542F");
              }
              if (res.data.status == 'end') {
                res.data.nextStartTime = '活动已结束';
              }
              if (res.data.cycleName == '第三期' && res.data.status == 'notice') {
                // 第三期公示期相当于结束活动
                res.data.nextStartTime = '活动已结束';
              }
              if (res.data.status !== 'clock') {
                clockMaskShow = true;
              }
              calendarInformation = res.data;
            }
            _context9.next = 19;
            break;
          case 15:
            _context9.prev = 15;
            _context9.t0 = _context9["catch"](6);
            _this16.selectComponent("#toast").showToastAuto("网络错误", "error", 1);
            console.log(_context9.t0);
          case 19:
            _this16.setData({
              clockMaskShow: clockMaskShow,
              prizesClock: prizesClock,
              clockingDayNum: clockingDayNum,
              userId: userId,
              startTime: startTime,
              calendarInformation: calendarInformation
            });
          case 20:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[6, 15]]);
    }))();
  },
  /**
   * 授权弹窗开启
   */
  showDialog: function showDialog() {
    this.setData({
      dialogTitle: '此功能只能微信授权后使用哦~',
      dialogStitle: '微信授权后解锁全部功能',
      dialog: true
    });
  },
  /**
   * 弹窗关闭
   */
  closeDialog: function closeDialog() {
    this.setData({
      makeUpToastShow: false,
      dialog: false
    });
  },
  /**
   * 跳转到登录页
   */
  toLoginPage: function toLoginPage() {
    var userId = this.data.userId;
    if (userId) {
      wx.openSetting(); // 拉起权限设置页
      this.closeDialog();
      return;
    }
    wx.navigateTo({
      url: '/pages/login/loginPage/login'
    });
    this.closeDialog();
  },
  /**
   * 返回上一页
   */
  back: function back() {
    wx.navigateBack();
  },
  /**
   * 获取用户权限状态
   */
  getAuthorizationStatus: function getAuthorizationStatus() {
    var _this17 = this;
    var isAuthorization = false;
    var isFuzzyLocation = this.data.isFuzzyLocation;
    wx.getSetting({
      success: function success(res) {
        var authSetting = res.authSetting;
        // 校验是否获取了地理位置
        if (authSetting["scope.userFuzzyLocation"]) {
          isAuthorization = true;
          var userSetting = {
            "scope.userFuzzyLocation": true
          };
          if (!isFuzzyLocation.length) {
            _this17.getFuzzyLocation();
          }
          wx.setStorageSync('userSetting', userSetting);
          _this17.setData({
            userSetting: userSetting,
            isAuthorization: isAuthorization
          });
        }
      }
    });
  },
  /**
   * 打卡排行卡片
   */
  checkCard: function checkCard(obj) {
    var cycleName = obj.cycleName,
      status = obj.status,
      noticeTime = obj.noticeTime;
    var pngUrlList = this.data.pngUrlList;
    var currentCycle = cycleName;
    var currentCycleState = status;
    var startDate = noticeTime;
    var rightTopTips = '';
    var leftTopTips = '';
    var bottomTips = '';
    var mapMan = '';
    var _startDate$split = startDate.split(' '),
      _startDate$split2 = _slicedToArray2(_startDate$split, 2),
      date = _startDate$split2[0],
      time = _startDate$split2[1];
    var _date$split = date.split('-'),
      _date$split2 = _slicedToArray2(_date$split, 3),
      year = _date$split2[0],
      month = _date$split2[1],
      day = _date$split2[2];
    var _time$split = time.split(':'),
      _time$split2 = _slicedToArray2(_time$split, 2),
      hour = _time$split2[0],
      minutes = _time$split2[1];
    var publishTime = "".concat(parseInt(month), "\u6708").concat(parseInt(day), "\u65E5").concat(hour, ":").concat(minutes, "\u63ED\u699C~");
    if (cycleName !== '第一期' && status == 'clock') {
      rightTopTips = '查看往期榜单';
      leftTopTips = publishTime;
      bottomTips = '本期总打卡数榜首地点的支持者，会获得额外抽奖机会！';
      mapMan = pngUrlList.mapManHoldCup;
    } else if (cycleName == '第一期' && status == 'clock') {
      rightTopTips = '等待本期榜单结算ing';
      leftTopTips = publishTime;
      bottomTips = '本期总打卡数榜首地点的支持者，会获得额外抽奖机会！';
      mapMan = pngUrlList.mapManHoldCup;
    } else if (status == 'notice') {
      rightTopTips = '查看本期榜单';
      leftTopTips = '本期榜单已出炉~';
      bottomTips = '快来看看你的心选地点有没有上榜~';
      mapMan = pngUrlList.mapManRaiseCup;
    } else if (status == 'end') {
      rightTopTips = '查看历史榜单';
      leftTopTips = '活动榜单完结啦~';
      bottomTips = '快来看看你的心选地点有没有上榜~';
      mapMan = pngUrlList.mapManRaiseCup;
    } else if (status == 'inactive') {
      rightTopTips = '等待本期榜单结算ing';
      leftTopTips = publishTime;
      bottomTips = '本期总打卡数榜首地点的支持者，会获得额外抽奖机会！';
      mapMan = pngUrlList.mapManHoldCup;
    }
    bottomTips = bottomTips.replace(/榜首地点的支持者/g, '<span class="highlight">榜首地点的支持者</span>').replace(/额外抽奖机会！/g, '<span class="highlight">额外抽奖机会！</span>');
    this.setData({
      currentCycle: currentCycle,
      currentCycleState: currentCycleState,
      rightTopTips: rightTopTips,
      leftTopTips: leftTopTips,
      bottomTips: bottomTips,
      mapMan: mapMan
    });
  },
  /**
   * 跳转排行
   */
  jumpToRank: function jumpToRank() {
    var _this$data2 = this.data,
      currentCycle = _this$data2.currentCycle,
      currentCycleState = _this$data2.currentCycleState;
    if (currentCycle == '第一期' && currentCycleState == 'clock' || currentCycleState == 'inactive') return;
    wx.navigateTo({
      url: "../clockRank/clockRank?clcleName=".concat(currentCycle, "&status=").concat(currentCycleState)
    });
    // 打卡页面/排行榜卡片/点击
    wx.reportEvent("smp_clockin_ranking_tap", {
      "prompt_text": this.data.leftTopTips
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    // 获取屏幕宽度
    var width = wx.getSystemInfoSync().windowWidth;
    var rpx = 750 / width;
    this.setData({
      rpx: rpx
    });
  },
  /**
   * 监听用户是否转发成功
   */
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '首义地图打卡',
      path: '/miniprogram/pages/clock/check'
    };
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    var isAuthorization = this.data.isAuthorization;
    var userId = wx.getStorageSync('uid');
    var unionid = wx.getStorageSync('unionid');
    var uname = wx.getStorageSync('uname');
    var loginHead = wx.getStorageSync('loginHead');
    var check = wx.getStorageSync('check');
    this.getAuthorizationStatus();
    this.getPunchCalendar(userId);
    this.dateCheck();
    if (userId) {
      this.getClockHistory(userId);
      this.getClockReward(userId);
    }
    this.setData({
      check: check,
      unionid: unionid,
      isAuthorization: isAuthorization,
      loginHead: loginHead,
      userId: userId,
      uname: uname
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
  onReachBottom: function onReachBottom() {}
});