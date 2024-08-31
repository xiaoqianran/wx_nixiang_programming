var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../utils/request");var _link = require("../../utils/link");var dormitoryPicker = require('./pickerData');Page({
  /**
   * 页面的初始数据
   */
  data: {
    topbarTitle: "我的宿舍",
    scrollTop: 0,
    //监听页面滑动,
    inputDialog: false,
    // 输入框弹窗是否显示
    copyDialog: false,
    // 复制弹窗是否显示
    showSelector: false,
    // 选择picker
    pickerData: [],
    // 选择器picker数据
    screenHeight: 0,
    anotherPicker: false,
    //另一个选择器
    inquireFlag: 0,
    // 查询数据的次数，为0则不显示详细数据
    topbarHeight: 0,
    // topbar高度 用户自适应头部卡片高度
    baseIcon: "../../static/dormitory/",
    selectType: "",
    //选择器的类型
    campusLocation: "",
    // 武昌首义学院·嘉鱼校区
    dormitoryFloor: "",
    // 学生宿舍几号楼几层
    dormitoryNumber: "",
    // 寝室号 308 325
    geoLocation: "咸宁嘉鱼",
    // 地理位置 默认为咸宁嘉鱼
    bedStructureUrl: "https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/55bdcea3-Group%207.jpg",
    // 无水印床铺结构
    bedStructurePrintUrl: "https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/45629baf-image.jpg",
    // 有水印床铺结构
    // 查询宿舍信息数据
    inquireDormitoryData: {
      dormitoryFloor: "",
      // 学生宿舍几号楼几层
      dormitoryNumber: "",
      // 寝室号 308 325
      geoLocation: "咸宁嘉鱼" // 地理位置 默认为咸宁嘉鱼
    },

    // 宿舍信息
    essentialDataTitle: [{
      text: "使用面积",
      data: ""
    }, {
      text: "户型",
      data: ""
    }, {
      text: "朝向",
      data: ""
    }],
    detailDataBasic: {
      title: "宿舍数据",
      sub: [{
        icon: "gender",
        text: "宿舍谁住过？",
        data: ""
      }, {
        icon: "ruler",
        text: "床铺尺寸",
        data: ""
      }]
    },
    // 详细数据 宿舍数据部分
    detailDataEssential: {
      title: "首义特色",
      sub: [{
        icon: "bedroom",
        text: "卧室",
        data: ""
      }, {
        icon: "shower",
        text: "卫浴",
        data: ""
      }, {
        icon: "balcony",
        text: "阳台",
        data: ""
      }, {
        icon: "convenience",
        text: "便利",
        data: {}
      }, {
        icon: "scene",
        text: "风景",
        data: {}
      }, {
        icon: "cost",
        text: "消费",
        data: {}
      }]
    },
    // 详细数据 宿舍数据部分
    id: [0] // 选择器数据选中id
  },
  /**
  * 自动获得当前手机信息(高度等、单位px)
  * return json格式数据，
  * capsuleBoxHeight：胶囊行的高度 
  * statusBarHeight：状态栏高度
  * screenHeight：屏幕高度
  * rate：比率（rpx*rate=实际px）
  */
  getTarHeight: function getTarHeight() {
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
    this.setData({
      topbarHeight: statusBarHeight + capsuleBoxHeight,
      screenHeight: screenHeight
    });
    return {
      capsuleBoxHeight: capsuleBoxHeight,
      statusBarHeight: statusBarHeight,
      screenHeight: screenHeight,
      rate: rate
    };
  },
  // 唤醒半屏输入弹窗
  openInputDialog: function openInputDialog() {
    this.setData({
      inputDialog: true
    });
  },
  // 点击蒙版关闭弹窗
  closeBindDialog: function closeBindDialog() {
    this.setData({
      inputDialog: false,
      showSelector: false
    });
  },
  //匹配id
  matchingId: function matchingId(string, arr, ifTwo) {
    var a = [];
    if (ifTwo && string == "") {
      string = 101;
    }
    if (ifTwo) {
      a.push(parseInt(string / 100) - 1);
      arr = arr.myarr;
    }
    for (var i = 0; i < arr.length; i++) {
      if (string == arr[i]) {
        a.push(i);
        break;
      }
    }
    if (a.length == 0) {
      a.push(0);
    }
    return a;
  },
  /**
   * 处理选择器需要的数组
   * @param num 选择的楼层
   * @param arr 全部房间的数组
   * @returns {myarr 对应的数组
   *           arrs  楼层的数组}
   */
  dataGrouping: function dataGrouping(num, arr) {
    var arrs = [1, 2, 3, 4, 5, 6]; //楼层的数组
    var myarr = [];
    if (num == 0) {
      num = 1;
    }
    arr.forEach(function (data) {
      if (parseInt(data / 100) == num) {
        myarr.push(data);
      }
    });
    return {
      myarr: myarr,
      arrs: arrs
    };
  },
  // 选择寝室楼
  selectFloor: function selectFloor(e) {
    var floor = this.data.inquireDormitoryData.dormitoryFloor;
    var selectType = e.currentTarget.id; // 选择器类型
    var dormitoryFloorOrNumber = []; // 选择器内容
    var formData = this.data.inquireDormitoryData; // 表单数据
    var anotherPicker = false;
    var showSelector = true;
    var id = this.data.id;
    if (selectType == 'floor') {
      // 寝室楼选择器
      dormitoryFloorOrNumber = Object.keys(dormitoryPicker.dormitoryList);
      id = this.matchingId(formData.dormitoryFloor, dormitoryFloorOrNumber, false);
    } else {
      // 寝室号选择器
      if (formData.dormitoryFloor == "") {
        this.selectComponent("#toast").showToastAuto("请先选择寝室楼");
        showSelector = false;
        selectType = "";
      } else {
        anotherPicker = true;
        dormitoryFloorOrNumber = this.dataGrouping(parseInt(formData.dormitoryNumber / 100), dormitoryPicker.dormitoryList[floor]);
        id = this.matchingId(formData.dormitoryNumber, dormitoryFloorOrNumber, true);
      }
    }
    this.setData({
      showSelector: showSelector,
      pickerData: dormitoryFloorOrNumber,
      anotherPicker: anotherPicker,
      selectType: selectType,
      id: id
    });
  },
  // 选择器
  selectFloorPicker: function selectFloorPicker(e) {
    var anotherPicker = this.data.anotherPicker;
    var allDataArr = dormitoryPicker.dormitoryList[this.data.inquireDormitoryData.dormitoryFloor];
    var pickerData = this.data.pickerData;
    var id = this.data.id;
    var selectedId = e.detail.value;
    if (anotherPicker) {
      pickerData = this.dataGrouping(selectedId[0] + 1, allDataArr);
    }
    if (id[0] != e.detail.value[0] && anotherPicker) {
      selectedId[1] = 0;
    }
    this.setData({
      pickerData: pickerData,
      id: selectedId
    });
  },
  // 取消按钮
  cancel: function cancel() {
    var pickerShow = this.data.showSelector; // 选择器显示
    var pickerShowParam = false;
    var dialogShowParam = true;
    if (!pickerShow) {
      dialogShowParam = false;
    }
    this.setData({
      // 关闭逻辑赋值
      showSelector: pickerShowParam,
      inputDialog: dialogShowParam,
      selectType: "",
      id: [0]
    });
  },
  // 确认按钮
  confirm: function confirm() {
    var formData = this.data.inquireDormitoryData; // 表单
    var showSelector = this.data.showSelector; // 选择器
    var pickerData = this.data.pickerData; // 选择器数据
    var selectedId = this.data.id; // 选择数据的id
    var inputDialog = this.data.inputDialog; // 控制弹窗
    var selectType = this.data.selectType; //选择器的类型
    if (showSelector) {
      if (selectType == 'floor') {
        if (formData.dormitoryFloor != pickerData[selectedId[0]]) {
          formData.dormitoryNumber = "";
        }
        formData.dormitoryFloor = pickerData[selectedId[0]];
      }
      if (selectType == 'number') {
        formData.dormitoryNumber = pickerData.myarr[selectedId[1]];
      }
    } else {
      this.submitForm(formData);
    }
    selectType = "";
    this.setData({
      showSelector: false,
      inquireDormitoryData: formData,
      inputDialog: inputDialog,
      selectType: selectType,
      id: [0]
    });
  },
  // 提交表单数据 查空校验
  submitForm: function submitForm(formData) {
    if (formData.dormitoryFloor == "" || formData.dormitoryNumber == "") {
      this.selectComponent("#toast").showToastAuto("请完善当前信息", "error");
    } else {
      this.inquireDetail(formData);
    }
  },
  inquireDetail: function inquireDetail(formData) {
    var _this = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var copyDialog, inquireFlag, essentialDataTitle, detailDataBasic, detailDataEssential, campusLocation, dormitoryNumber, dormitoryFloor, inputDialog, _yield$post, res, data, formDatas;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            copyDialog = false; // 查询错误的赋值弹窗
            inquireFlag = 0; // 查询成功的标志
            essentialDataTitle = _this.data.essentialDataTitle;
            detailDataBasic = _this.data.detailDataBasic;
            detailDataEssential = _this.data.detailDataEssential;
            campusLocation = _this.data.campusLocation;
            dormitoryNumber = _this.data.dormitoryNumber;
            dormitoryFloor = _this.data.dormitoryFloor;
            inputDialog = false;
            _context.prev = 9;
            _context.next = 12;
            return (0, _request.post)(_link.getDormitoryInfo, formData);
          case 12:
            _yield$post = _context.sent;
            res = _yield$post.data;
            if (res.code == 20000) {
              data = res.data[0]; // 赋值操作
              essentialDataTitle[0].data = data.area.slice(0, 3) + "㎡";
              essentialDataTitle[1].data = data.type;
              essentialDataTitle[2].data = data.orientation;
              detailDataBasic.sub[0].data = data.history;
              detailDataBasic.sub[1].data = data.bedSize;
              detailDataEssential.sub[0].data = data.bedRoom.split(",");
              detailDataEssential.sub[1].data = data.shower.split(",");
              detailDataEssential.sub[2].data = data.balconyCommon.split(",");
              detailDataEssential.sub[3].data = _this.cutFullStop(JSON.parse(data.convenience));
              detailDataEssential.sub[4].data = _this.cutFullStop([{
                name: "风景",
                value: data.view
              }]);
              detailDataEssential.sub[5].data = _this.cutFullStop(JSON.parse(data.expenditure));
              detailDataEssential.sub[2].data.push(data.balconyPrivate);
              campusLocation = data.campusLocation;
              dormitoryNumber = data.dormitoryNumber;
              dormitoryFloor = data.dormitoryFloor + "·" + dormitoryNumber.slice(0, 1) + "层";
              formDatas = {
                essentialDataTitle: essentialDataTitle,
                detailDataBasic: detailDataBasic,
                detailDataEssential: detailDataEssential,
                campusLocation: campusLocation,
                dormitoryNumber: dormitoryNumber,
                dormitoryFloor: dormitoryFloor,
                formData: formData
              };
              wx.setStorageSync("dormitoryRecord", formDatas);
              // 搜索成功后清空表单数据 可以选择重新查询 该数据为1时，搜索框变为重新搜索
              inquireFlag = 1;
            } else {
              copyDialog = true; // 打开查询错误的复制弹窗
            }
            _context.next = 23;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](9);
            console.log(_context.t0);
            wx.setStorageSync("dormitoryRecord", "");
            copyDialog = true; // 打开查询错误的复制弹窗
            inputDialog = true;
          case 23:
            _this.setData({
              copyDialog: copyDialog,
              inquireFlag: inquireFlag,
              essentialDataTitle: essentialDataTitle,
              detailDataBasic: detailDataBasic,
              detailDataEssential: detailDataEssential,
              campusLocation: campusLocation,
              dormitoryNumber: dormitoryNumber,
              dormitoryFloor: dormitoryFloor,
              inputDialog: inputDialog
            });
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[9, 17]]);
    }))();
  },
  /**
   * 根据句号切割
   * @param data 接口返回后三个的数据
   * @returns data 根据句号切割之后的数据
   */
  cutFullStop: function cutFullStop(data) {
    data.forEach(function (arr) {
      var myarr = [];
      myarr = Array.from(arr.value.split("。"));
      if (myarr.length > 3) {
        var myArr = [];
        for (var i = 0; i < myarr.length; i++) {
          myarr[i] = myarr[i] + "。";
          if (i != myarr.length - 1) myArr.push(myarr[i]);
        }
        arr.value = myArr;
      } else arr.value = [arr.value];
    });
    return data;
  },
  // 查询失败后copy南南
  copyNanNan: function copyNanNan() {
    // 复制
    wx.setClipboardData({
      data: 'nanlilu22'
    });
    // 关闭查询错误的弹窗 picker选择器 dialog弹窗不关闭
    this.setData({
      copyDialog: false,
      showSelector: false
    });
  },
  //点击返回主页的按钮
  returnHome: function returnHome() {
    this.setData({
      copyDialog: false,
      showSelector: false
    });
  },
  // 预览水印大图
  previewImage: function previewImage() {
    //埋点
    wx.reportEvent("smp_dormitory_thumbnail_picture_click", {
      "bedroom_query_thumbnail_click": 0
    });
    var bedStructureUrl = this.data.bedStructureUrl;
    var bedStructurePrintUrl = this.data.bedStructurePrintUrl;
    wx.previewImage({
      current: bedStructureUrl,
      urls: [bedStructurePrintUrl]
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    var _this2 = this;
    var data = wx.getStorageSync("dormitoryRecord");
    this.getTarHeight();
    if (data == "") {
      setTimeout(function () {
        _this2.openInputDialog();
      }, 300);
    } else {
      var inquireDormitoryData = this.data.inquireDormitoryData;
      inquireDormitoryData.dormitoryFloor = data.formData.dormitoryFloor, inquireDormitoryData.dormitoryNumber = data.formData.dormitoryNumber, this.setData({
        inquireFlag: 1,
        campusLocation: data.campusLocation,
        detailDataBasic: data.detailDataBasic,
        detailDataEssential: data.detailDataEssential,
        dormitoryFloor: data.dormitoryFloor,
        dormitoryNumber: data.dormitoryNumber,
        essentialDataTitle: data.essentialDataTitle,
        inquireDormitoryData: inquireDormitoryData
      });
    }
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