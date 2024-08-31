var _createForOfIteratorHelper2 = require("../../../@babel/runtime/helpers/createForOfIteratorHelper");var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../../utils/request");var _link = require("../../../utils/link");Page({
  /**
   * 页面的初始数据
   */
  data: {
    box: false,
    showArr: [],
    //展示的数组
    scrollTop: 0,
    //监听页面滑动
    newmapTitle: "选择打卡地点",
    rgba: 1,
    //控制首标题的深浅度
    num: 0,
    //当前点击的按钮的编号
    ifOne: false,
    userPullDown: false,
    //判断用户是否在下拉刷新
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
      "3-8宿舍楼": ["首义嘉鱼校区宿舍楼", "Dormitory Of WSYU Jiayu Campus"],
      "1-2宿舍楼": ["首义嘉鱼校区宿舍楼", "Dormitory Of WSYU Jiayu Campus"]
    },
    // 地区弹窗对应中文和英文集合
    place: '',
    // 弹窗地点名称
    showDialog: false,
    // 控制确定打卡弹窗
    type: '',
    // 类型
    makeUpData: '',
    // 补签时间
    placeShow: '' // 弹窗地点名称，方便宿舍楼
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
    var _this = this;
    this.setData({
      box: false,
      ifOne: false,
      place: ''
    });
    setTimeout(function () {
      _this.setData({
        placeShow: ''
      });
    }, 200);
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
  /**
   * clockInPlace 在当前位置打卡
   * 传回数据,在check页面请求api
   */
  clockInPlace: function clockInPlace() {
    var makeUpData = this.data.makeUpData;
    var placeShow = this.data.placeShow;
    var pages = getCurrentPages();
    var type = this.data.type;
    var prevPage = pages[pages.length - 2]; //获取A页面
    wx.navigateBack({
      delta: 1,
      success: function success() {
        // 成功的回调
        if (prevPage == undefined || prevPage == null) return;
        prevPage.clockPlace(placeShow, type, makeUpData); // 调用A页面的方法, 并将值传过去
      }
    });
  },
  /**
   * closeDialog 关闭弹窗 （蒙版/取消）
   */
  closeDialog: function closeDialog() {
    this.setData({
      showDialog: false,
      place: '',
      placeShow: ''
    });
  },
  /**
   * 计算按钮的位置
   */
  buttonHandling: function buttonHandling(e) {
    var _this2 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var num, place, placeShow;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            num = e.currentTarget.dataset.id;
            place = e.currentTarget.id;
            placeShow = place;
            if (place == '宿舍楼A') {
              place = '3-8宿舍楼';
            } else if (place == '宿舍楼B') {
              place = '1-2宿舍楼';
            }
            _this2.setData({
              placeShow: placeShow,
              showDialog: true,
              place: place,
              num: num
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 获取信息并处理
   * @returns allArr 可以使用的数组
   */
  getPointPosition: function getPointPosition(num) {
    var _this3 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
      var userPullDown, _yield$get, arrs, arr, _iterator, _step, point, allNum;
      return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            userPullDown = _this3.data.userPullDown;
            if (!userPullDown) {
              _this3.selectComponent("#toast").showToastAuto("加载中", "lodding", 5);
            }
            _context2.next = 4;
            return (0, _request.get)(_link.getAllPointPosition, '');
          case 4:
            _yield$get = _context2.sent;
            arrs = _yield$get.data;
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
              _this3.selectComponent("#toast").showToastAuto("刷新成功", "success", 0.5);
            } else {
              _this3.selectComponent("#toast").showToastAuto("加载成功", "success", 0.5);
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(e) {
    var _this4 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
      var type, makeUpData, phone, arr;
      return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            type = e.type;
            makeUpData = e.makeUpData;
            phone = _this4.getTarHeighgt();
            _context3.next = 5;
            return _this4.getPointPosition((phone.statusBarHeight + phone.capsuleBoxHeight) * 2);
          case 5:
            arr = _context3.sent;
            _this4.setData({
              makeUpData: makeUpData,
              type: type,
              renderArr: arr,
              userPullDown: false,
              phoneBox: (phone.statusBarHeight + (phone.capsuleBoxHeight - 30) / 2) * 2
            });
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
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