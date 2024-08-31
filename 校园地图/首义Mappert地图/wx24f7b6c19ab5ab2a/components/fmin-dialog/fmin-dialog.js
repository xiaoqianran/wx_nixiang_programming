Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 大标题
    title: {
      type: String,
      value: ""
    },
    // 小标题
    stitle: {
      type: String,
      value: ""
    },
    // 是否有右侧小图标
    showSchoolBuiltSrc: {
      type: Boolean,
      value: true
    },
    // 弹窗右侧的小图标
    schoolBuiltSrc: {
      type: String,
      value: ""
    },
    // 是否展示
    showDialog: {
      type: Boolean,
      value: false
    },
    // 类型：normal（普通弹窗） half-screen（半屏弹窗）
    type: {
      type: String,
      value: "normal"
    },
    // 特殊弹窗阴影和渐进色
    unusual: {
      type: String,
      value: ''
    },
    // 大标题特殊字体样式
    font: {
      type: String,
      value: ''
    },
    // 小标题特殊字体样式
    sfont: {
      type: String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    animationName: "fadeIn",
    showOut: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    close: function close() {
      this.triggerEvent('tapBg');
    },
    // 用于防止像父组件冒泡事件
    catch: function _catch() {},
    // 用于防止页面滑动
    true: function _true() {}
  },
  observers: {
    'showDialog': function showDialog(_showDialog) {
      var that = this;
      if (_showDialog) {
        // TDS中部弹窗上报出现的次数  
        wx.reportEvent("tds_dialog", {
          "dialog_title": this.properties.title
        });
        that.setData({
          showOut: true,
          animationName: "fadeIn"
        });
      } else if (!_showDialog && this.data.showOut) {
        that.setData({
          animationName: "fadeOut"
        }, function () {
          setTimeout(function () {
            that.setData({
              showOut: false
            });
          }, 0.1 * 1000);
        });
      } else {
        that.setData({
          showOut: false,
          animationName: "fadeIn"
        });
      }
    }
  },
  lifetimes: {
    // 生命周期函数
    ready: function ready() {}
  }
});