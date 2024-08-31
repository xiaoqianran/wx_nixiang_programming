var _createForOfIteratorHelper2 = require("../../@babel/runtime/helpers/createForOfIteratorHelper");var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../utils/request");var _link = require("../../utils/link");Page({
  /**
   * 页面的初始数据
   */
  data: {
    box: false,
    showArr: [],
    //展示的数组
    scrollTop: 0,
    //监听页面滑动
    newmapTitle: "首义地图",
    rgba: 1,
    //控制首标题的深浅度
    renderArr: [],
    //储存全部信息的数组
    num: 0,
    //当前点击的按钮的编号
    ifOne: false,
    userPullDown: false,
    //判断用户是否在下拉刷新
    consultDialog: false,
    // consult弹窗控制
    consultTweetLink: 'http://mp.weixin.qq.com/s/l0ZR0cfzWtlfAAerTgWpiw',
    // consult推文链接
    consultTweetWord: '',
    // 咨询条标题
    tweetArr: [],
    enableInterface: false,
    placeEnglishList: {
      "北门": ["Northgate", "Northgate.svg"],
      "操场": ["playground", "playground.svg"],
      "天鹅湖": ["swan lake", "swan lake.svg"],
      "行政中心": ["Administrative Building", "Administrative Building.svg"],
      "实验楼": ["laboratory building", "laboratory building.svg"],
      "礼堂": ["auditorium", "auditorium.svg"],
      "东门": ["east gate", "east gate.svg"],
      "鸽子屋": ["Taubenhaus", "library-1.svg"],
      "快递点": ["delivery outlets", "Dove House.svg"],
      "图书馆": ["library", "library.svg"],
      "教学楼": ["teaching building", "teaching building.svg"],
      "食堂": ["canteen", "canteen.svg"],
      "商业街": ["business street", "business street.svg"],
      "篮球场": ["basketball court", "basketball court.svg"],
      "球类运动场": ["Ball Sports Ground", "Ball Sports Ground.svg"],
      "南门": ["South Gate", "South Gate.svg"]
    },
    placeFunctionList: [{
      icon: 'http://introduce.mcdd.top/VR-green-line.svg',
      functionName: 'VR实景'
    }, {
      icon: 'http://introduce.mcdd.top/flag-green-line.svg',
      functionName: '打卡'
    }, {
      icon: 'http://introduce.mcdd.top/camera-green-line.svg',
      functionName: '故事'
    }],
    // 功能区
    placeTitleList: {
      "北门": ["首义嘉鱼校区北门", "North Gate Of WSYU Jiayu Campus"],
      "操场": ["首义嘉鱼校区操场", "PlayGround Of WSYU Jiayu Campus"],
      "天鹅湖": ["首义嘉鱼校区天鹅湖", "Swan Lake Of WSYU Jiayu Campus"],
      "行政中心": ["首义嘉鱼校区行政中心", "Administrative Of WSYU Jiayu Campus"],
      "实验楼": ["首义嘉鱼校区实验楼", "laboratory Of WSYU Jiayu Campus"],
      "礼堂": ["首义嘉鱼校区礼堂", "auditorium Of WSYU Jiayu Campus"],
      "东门": ["首义嘉鱼校区东门", "east gate Of WSYU Jiayu Campus"],
      "鸽子屋": ["首义嘉鱼校区鸽子屋", "Taubenhaus Of WSYU Jiayu Campus"],
      "快递点": ["首义嘉鱼校区快递点", "Delivery Outlets Of WSYU Jiayu Campus"],
      "图书馆": ["首义嘉鱼校区图书馆", "library Of WSYU Jiayu Campus"],
      "教学楼": ["首义嘉鱼校区教学楼", "teaching building Of WSYU Jiayu Campus"],
      "食堂": ["首义嘉鱼校区食堂", "canteen Of WSYU Jiayu Campus"],
      "商业街": ["首义嘉鱼校区商业街", "business street Of WSYU Jiayu Campus"],
      "篮球场": ["首义嘉鱼校区篮球场", "basketball court Of WSYU Jiayu Campus"],
      "球类运动场": ["首义嘉鱼校区球类运动场", "Ball Sports Ground Of WSYU Jiayu Campus"],
      "南门": ["首义嘉鱼校区南门", "South Gate Of WSYU Jiayu Campus"],
      "宿舍楼A": ["首义嘉鱼校区宿舍楼", "Dormitory Of WSYU Jiayu Campus"],
      "宿舍楼B": ["首义嘉鱼校区宿舍楼", "Dormitory Of WSYU Jiayu Campus"]
    },
    // 地区弹窗对应中文和英文集合
    pictureList: {
      superMapManUrl: 'http://introduce.mcdd.top/Super-Map-Man.png',
      // 地图玩偶图片
      placeRedIconUrl: 'http://introduce.mcdd.top/place-red-line.svg',
      // 红色地标Icon 
      readBookUrl: 'http://introduce.mcdd.top/readBook-green-line.svg',
      // 绿色书本Icon
      giftWhiteIconUrl: '../../static/gift_box_white_face.svg' // 白色礼盒Icon
    },

    place: '',
    // 弹窗地点名称
    VRUrl: '',
    // 弹窗地点对应VR图片
    ifTweet: false,
    locationId: '' //地点id
  },
  /**
  * 自动获得当前手机信息(高度等、单位px)
  * return json格式数据，
  * capsuleBoxHeight：胶囊行的高度 
  * statusBarHeight：状态栏高度
  * screenHeight：屏幕高度
  * rate：比率（rpx*rate=实际px）
  */
  getTarHeighgt: function getTarHeighgt() {
    // 获取胶囊的信息
    var menuButton = wx.getMenuButtonBoundingClientRect();
    var menuButtonHeight = menuButton.height;
    var menuButtonTop = menuButton.top;
    // 获取设备的信息  
    var systemInfo = wx.getSystemInfoSync();
    // 获取信号区高度
    var statusBarHeight = systemInfo['statusBarHeight'];
    // 设置胶囊行的高度
    var capsuleBoxHeight = menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;
    // 获得屏幕高度
    var screenHeight = systemInfo['screenHeight'];
    /* 
    根据我的测验，实际的信号区高度在真机上表现与于实际的不服，所以我们这里还需要根据不同的设备进行调整
    开发工具 = 获取的高度
    安卓真机 = 获取的高度 + 1
    苹果真机 = 获取的高度 - 1
    我本人这里也只测试了iPhonex 华为和小米手机，
    如果有出入根据实际情况进行调整就行了
    */
    if (systemInfo.model === 'andorid') {
      statusBarHeight = statusBarHeight + 1;
    } else if (systemInfo.platform === 'ios') {
      statusBarHeight = statusBarHeight - 2;
    } else {
      statusBarHeight = statusBarHeight;
    }
    var rate = systemInfo['windowWidth'] / 750;
    return {
      capsuleBoxHeight: capsuleBoxHeight,
      statusBarHeight: statusBarHeight,
      screenHeight: screenHeight,
      rate: rate
    };
  },
  //页面触摸事件
  touchStart: function touchStart() {
    this.setData({
      box: false,
      place: "",
      ifOne: false
    });
  },
  //监听页面滑动
  onPageScroll: function onPageScroll(e) {
    var num = parseInt(e.scrollTop);
    var rgba;
    if (num > 10) {
      rgba = 0;
    } else {
      rgba = (1 - num / 10).toFixed(1);
    }
    this.setData({
      rgba: rgba
    });
  },
  //计算按钮的位置
  buttonHandling: function buttonHandling(e) {
    var _this = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var num, point, locationId, place, VRUrl, scrollTop, box, arr, renderArr, _yield$get, arrs, myarrs;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            num = e.currentTarget.dataset.id;
            point = _this.data.renderArr[num];
            locationId = "locationId=" + point.locationId;
            place = e.currentTarget.id;
            VRUrl = point.panorama;
            scrollTop = parseInt(e.detail.y);
            box = _this.data.box;
            arr = [];
            renderArr = [];
            _this.setData({
              box: false,
              locationId: locationId
            });
            _context.prev = 10;
            _context.next = 13;
            return (0, _request.get)(_link.getTweets, locationId);
          case 13:
            _yield$get = _context.sent;
            arrs = _yield$get.data;
            myarrs = arrs.data; //将null转换为空数组
            if (!myarrs) {
              myarrs = [];
            }
            //判断该推文是否删除
            myarrs.forEach(function (myArr) {
              if (!myArr.isDelete) {
                renderArr.push(myArr);
              }
            });
            //埋点
            wx.reportEvent("smp_main_location_button_click", {
              "location_name": place
            });
            _context.next = 25;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](10);
            _this.selectComponent("#toast").showToastAuto("加载失败！", "error");
            return _context.abrupt("return");
          case 25:
            if (renderArr.length == 1) {
              arr.push(renderArr[0]);
            } else if (renderArr.length > 1) {
              arr.push(renderArr[0]);
              arr.push(renderArr[1]);
            }
            if (box) {
              wx.pageScrollTo({
                scrollTop: scrollTop - 280,
                duration: 300
              });
            } else {
              wx.pageScrollTo({
                scrollTop: scrollTop - 300,
                duration: 300
              });
            }
            _this.setData({
              showArr: arr,
              scrollTop: scrollTop,
              place: place,
              num: num,
              ifOne: true,
              tweetArr: renderArr,
              VRUrl: VRUrl
            });
            setTimeout(function () {
              wx.pageScrollTo({
                scrollTop: scrollTop - 280,
                duration: 300
              });
              _this.setData({
                box: true
              });
            }, 500);
          case 29:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[10, 21]]);
    }))();
  },
  //卡片的点击事件
  cardBind: function cardBind(e) {
    var _this2 = this;
    var showArr = this.data.showArr;
    var num = e.currentTarget.id;
    var ifTweet = this.data.ifTweet;
    if (showArr && showArr.length && !ifTweet) {
      var data = showArr[num];
      this.setData({
        ifTweet: true
      });
      //埋点
      wx.reportEvent("smp_main_details_article_click", {
        "article_title": data.tweetTitle
      });
      setTimeout(function () {
        wx.setStorageSync("src", data.src);
        wx.navigateTo({
          url: '/pages/webtweet/webtweet'
        });
      }, 200);
    }
    this.setData({
      bindNum: num
    });
    setTimeout(function () {
      _this2.setData({
        bindNum: -1
      });
    }, 1000);
  },
  //点击弹窗数据数据改变
  changeArr: function changeArr() {
    var arr = this.data.tweetArr;
    var scrollTop = this.data.scrollTop;
    var subtraction = 280;
    if (arr && arr.length != 0) {
      if (arr.length >= 3) {
        subtraction = 210;
      }
    }
    wx.pageScrollTo({
      scrollTop: scrollTop - subtraction,
      duration: 300
    });
    this.setData({
      showArr: arr,
      ifOne: false
    });
  },
  /**
  * 获取信息并处理
  * @returns allArr 可以使用的数组
  */
  getPointPosition: function getPointPosition(num) {
    var _this3 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
      var userPullDown, _yield$get2, arrs, arr, _iterator, _step, point, allNum;
      return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            userPullDown = _this3.data.userPullDown;
            if (!userPullDown) {
              _this3.selectComponent("#toast").showToastAuto("加载中", "lodding", 100);
            }
            _context2.next = 4;
            return (0, _request.get)(_link.getAllPointPosition, '');
          case 4:
            _yield$get2 = _context2.sent;
            arrs = _yield$get2.data;
            arr = arrs.data;
            _iterator = _createForOfIteratorHelper2(arr);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                point = _step.value;
                allNum = parseInt(point.locationY) + num;
                point.locationY = allNum;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (userPullDown) {
              _this3.selectComponent("#toast").showToastAuto("刷新成功", "success");
            } else {
              _this3.selectComponent("#toast").showToastAuto("加载成功", "success");
            }
            return _context2.abrupt("return", arr);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   * 搜索寝室跳转页面
   */
  jumpToDormitory: function jumpToDormitory() {
    this.setData({
      dormitoryRecord: true
    });
    //埋点
    wx.reportEvent("smp_main_search_article_click", {
      "bedroom_button_click": 0
    });
    wx.navigateTo({
      url: '/pages/dormitoryRecord/dormitoryRecord'
    });
  },
  /**
   * 获取新生特辑推文链接
   */
  getConsultTweet: function getConsultTweet() {
    var _this4 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
      var consultTweetLink, consultTweetWord, _yield$get3, arrs;
      return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            consultTweetLink = _this4.data.consultTweetLink;
            consultTweetWord = _this4.data.consultTweetWord;
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _request.get)(_link.getConsultTweet, '');
          case 5:
            _yield$get3 = _context3.sent;
            arrs = _yield$get3.data;
            if (arrs.code == 20000) {
              consultTweetLink = arrs.data.consultTweetLink;
              consultTweetWord = arrs.data.consultTweetWord;
            } else {
              consultTweetWord = '萌新不迷茫！新生入学必知的N个问答！';
            }
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            console.error("网络错误", _context3.t0);
            consultTweetWord = '萌新不迷茫！新生入学必知的N个问答！';
          case 14:
            _this4.setData({
              consultTweetLink: consultTweetLink,
              consultTweetWord: consultTweetWord
            });
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 10]]);
    }))();
  },
  /**
   * 前往推文
   */
  goToConsultTweet: function goToConsultTweet() {
    var consultTweetLink = this.data.consultTweetLink;
    if (consultTweetLink) {
      setTimeout(function () {
        wx.setStorageSync("src", consultTweetLink);
        wx.navigateTo({
          url: '/pages/webtweet/webtweet'
        });
      }, 200);
    } else {
      this.selectComponent("#toast").showToastAuto("没有对应推文", "error");
    }
    this.setData({
      consultDialog: false
    });
  },
  /**
   * 打开consult弹窗
   */
  openConsultDialog: function openConsultDialog() {
    this.setData({
      consultDialog: true
    });
  },
  /**
   * 关闭consultDialog
   */
  closeConsultDialog: function closeConsultDialog() {
    this.setData({
      consultDialog: false
    });
  },
  /**
   * 触发功能区域
   */
  triggerFuntion: function triggerFuntion(e) {
    var functionName = e.currentTarget.dataset.name;
    var _this$data = this.data,
      place = _this$data.place,
      VRUrl = _this$data.VRUrl,
      locationId = _this$data.locationId;
    place = '首义嘉鱼校区' + place;
    if (functionName == 'VR实景') {
      wx.navigateTo({
        url: '/pages/VRPicture/VRPicture?place=' + place + '&VRUrl=' + VRUrl + '&place=' + place
      });
      // 埋点
      wx.reportEvent("smp_mainpage_popup_vrbutton_tap", {});
    } else if (functionName == '打卡') {
      wx.navigateTo({
        url: "/pages/clock/check/check"
      });
      // 埋点
      wx.reportEvent("smp_mainpage_popup_clockbutton_tap", {});
    } else if (functionName == '故事') {
      if (this.data.enableInterface) {
        place = place.slice(6);
        wx.navigateTo({
          url: "/pages/story/story?place=".concat(place, "&").concat(locationId)
        });
        // 埋点
        wx.reportEvent("smp_mainpage_popup_storybutton_tap", {});
      } else {
        this.selectComponent("#toast").showToastAuto("加载中!!!", "lodding", 20);
      }
    }
  },
  getEnableInterface: function getEnableInterface() {
    var _this5 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
      var _yield$get4, res;
      return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _request.get)(_link.enableInterface);
          case 3:
            _yield$get4 = _context4.sent;
            res = _yield$get4.data;
            _this5.setData({
              enableInterface: res.data
            });
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.error("接口出现问题");
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }))();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    var _this6 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee5() {
      var phone, arr;
      return _regeneratorRuntime2().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            phone = _this6.getTarHeighgt();
            _context5.next = 3;
            return _this6.getPointPosition((phone.statusBarHeight + phone.capsuleBoxHeight) * 2);
          case 3:
            arr = _context5.sent;
            _this6.getEnableInterface();
            _this6.setData({
              renderArr: arr,
              userPullDown: false,
              phoneBox: (phone.statusBarHeight + (phone.capsuleBoxHeight - 30) / 2) * 2
            });
            _this6.getConsultTweet();
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    this.setData({
      ifTweet: false,
      dormitoryRecord: false
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
  onPullDownRefresh: function onPullDownRefresh() {
    this.setData({
      userPullDown: true
    });
    this.onLoad();
    wx.stopPullDownRefresh();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {}
});