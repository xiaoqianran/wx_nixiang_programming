var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../../utils/request");var _link = require("../../../utils/link");var qiniuUpload = require('../../../utils/qiniuUploader');Page({
  data: {
    loginHead: "",
    name: "",
    sex: "",
    selectedSexIndex: 0,
    // 当前选中的性别在性别数组中的索引
    sexList: ["男", "女", "其他"],
    showSelectDialog: false // 默认不显示选择器
  },
  /**
   * 用户更换头像
   */
  changeHead: function changeHead(e) {
    wx.setStorageSync('loginHead', e.detail.avatarUrl);
    this.setData({
      loginHead: wx.getStorageSync('loginHead')
    });
  },
  /**
   * 昵称输入
   */
  inputUname: function inputUname(e) {
    var name = this.truncateString(e.detail.value, 10).str;
    this.setData({
      name: name
    });
  },
  /**
   * 对传递进来的字符串（一个英文当做半个汉字）进行截取
   * @param str 需要判断的字符串
   * @param length 指定的长度
   * @returns str 若超过指定长度则截取的长度
   */
  truncateString: function truncateString(str, length) {
    // 将英文字符视为半个中文字符
    var pattern = /[a-zA-Z]/;
    var count = 0;
    var endIndex = 0;
    for (var i = 0; i < str.length; i++) {
      // 如果当前字符为英文字符，则 count 加 0.5，否则加 1
      count += pattern.test(str[i]) ? 0.5 : 1;
      // 如果当前字符是最后一个中文字符且总长度超过给定长度，则记录 endIndex
      if (count > length) {
        endIndex = i;
        break;
      }
    }
    // 如果 endIndex 不为 0，则根据 endIndex 对字符串进行截取
    if (endIndex !== 0) {
      str = str.slice(0, endIndex);
    }
    return {
      str: str,
      count: count
    };
  },
  /**
   * 弹出性别选择器
   */
  showSelect: function showSelect() {
    var showSelectDialog = true;
    this.setData({
      showSelectDialog: showSelectDialog
    });
  },
  /**
   * 选择性别
   */
  bindSexChange: function bindSexChange(e) {
    var selectedSexIndex = e.detail.value;
    this.setData({
      selectedSexIndex: selectedSexIndex
    });
  },
  /**
   * 年份选择器提交事件
   */
  selectConfirm: function selectConfirm() {
    var sexList = this.data.sexList;
    var selectedSexIndex = this.data.selectedSexIndex;
    var sex = sexList[selectedSexIndex];
    var showSelectDialog = false;
    this.setData({
      sex: sex,
      showSelectDialog: showSelectDialog
    });
  },
  /**
  * 年份选择器取消事件
  */
  selectCancel: function selectCancel() {
    var showSelectDialog = false;
    this.setData({
      showSelectDialog: showSelectDialog
    });
  },
  /**
   * 提交用户信息
   */
  userIfonSubmit: function userIfonSubmit() {
    var _this = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
      var name, sex, loginHead, uid;
      return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            name = _this.data.name;
            sex = _this.data.sex;
            loginHead = _this.data.loginHead;
            uid = wx.getStorageSync("uid");
            if (!name || !sex || !loginHead) {
              wx.showToast({
                title: "信息未完善",
                icon: "none"
              });
              setTimeout(function () {
                wx.hideToast();
              }, 2000);
            } else {
              // 网络请求：提交用户信息
              try {
                // 上传头像
                wx.uploadFile({
                  filePath: loginHead,
                  name: 'imgFile',
                  url: 'https://shouyi-cats.fmin-courses.com/upload/uploadImage',
                  header: {
                    'Content-Type': 'multipart/form-data'
                  },
                  success: function () {
                    var _success = _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee(resp) {
                      var userIfon, _yield$post, res;
                      return _regeneratorRuntime2().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            loginHead = "http://image.fmin-courses.com/".concat(resp.data);
                            wx.setStorageSync('loginHead', loginHead);
                            userIfon = {
                              "uid": uid,
                              "image": loginHead,
                              "username": name,
                              "gender": sex
                            };
                            _context.next = 5;
                            return (0, _request.post)(_link.postUserInfo, userIfon);
                          case 5:
                            _yield$post = _context.sent;
                            res = _yield$post.data;
                            if (res.code == 20000) {
                              wx.showToast({
                                title: "提交成功",
                                icon: "success"
                              });
                              wx.setStorageSync("uname", userIfon.username);
                              wx.navigateBack();
                            }
                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    function success(_x) {
                      return _success.apply(this, arguments);
                    }
                    return success;
                  }(),
                  fail: function fail(error) {
                    console.log(error);
                  }
                });
              } catch (error) {
                console.error('提交失败', error);
                wx.showToast({
                  title: "服务器中断",
                  icon: "error"
                });
              }
            }
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   * 初始化用户信息
   */
  initUser: function initUser() {
    var loginHead = wx.getStorageSync('loginHead');
    if (loginHead) {
      this.setData({
        loginHead: loginHead
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    this.initUser();
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