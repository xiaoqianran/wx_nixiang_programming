var app = getApp();Component({
  /**
   * 组件的属性列表
   */
  properties: {
    theme: {
      type: String,
      value: app.globalData.themeMode
    },
    // 一级标题
    headTitle: {
      type: String,
      value: "一级标题"
    },
    // 二级标题
    subTitle: {
      type: String,
      value: "二级标题二级标题二级标题二级标题二级标题"
    },
    // 一级标题是否显示
    isHead: {
      type: Boolean,
      value: true
    },
    // 二级标题是否显示
    isSub: {
      type: Boolean,
      value: true
    },
    // 是否展示
    showDialog: {
      type: Boolean,
      value: false
    },
    // 是否主题渐变
    gradient: {
      type: Boolean,
      value: true
    },
    layout: {
      type: String,
      value: "center"
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    animationName: "fadeInGrow",
    maskAnimationName: "fadeIn",
    showOut: false,
    theme: ""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    close: function close() {
      this.triggerEvent('tapBg');
      // this.setData({
      //   showOut:false,
      //   animationName:"fadeOutShrink",
      //   maskAnimationName:"fadeOut"
      // })
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
        that.setData({
          showOut: true,
          animationName: "fadeInGrow",
          maskAnimationName: "fadeIn"
        });
      } else if (!_showDialog && this.data.showOut) {
        that.setData({
          animationName: "fadeOutShrink",
          maskAnimationName: "fadeOut"
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
          animationName: "fadeOutShrink",
          maskAnimationName: "fadeOut"
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
  },
  // 启用插槽功能
  options: {
    multipleSlots: true
  }
});