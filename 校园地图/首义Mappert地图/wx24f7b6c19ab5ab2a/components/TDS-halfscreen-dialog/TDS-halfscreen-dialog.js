var app = getApp();Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 主题mode
    theme: {
      type: String,
      value: app.globalData.themeMode
    },
    // 是否展示label
    showLabel: {
      type: Boolean,
      value: true
    },
    // label
    label: {
      type: String,
      value: "申请获得以下权限"
    },
    // 是否展示hint
    showHint: {
      type: Boolean,
      value: true
    },
    // hint
    hint: {
      type: String,
      value: "获取你的公开信息（昵称、头像等）"
    },
    showDialog: {
      type: Boolean,
      value: false
    },
    // 对齐方式
    layout: {
      type: String,
      value: "center"
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
      // this.setData({
      //   showOut:false,
      //   animationName:"fadeIn"
      // })
    },
    // 用于防止像父组件冒泡事件
    catch: function _catch() {},
    // 用于防止页面滑动
    true: function _true() {}
  },
  // 启用插槽功能
  options: {
    multipleSlots: true
  },
  observers: {
    'showDialog': function showDialog(_showDialog) {
      var that = this;
      if (_showDialog) {
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
    ready: function ready() {},
    attached: function attached() {
      this.setData({
        theme: app.globalData.themeMode
      });
    }
  }
});