Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      //属性类型
      value: '' // 默认值
    },

    immersion: {
      // 是否为沉浸式
      type: Boolean,
      value: false
    },
    Threshold: {
      // 自动取消沉浸的阈值
      type: Number,
      value: 0.3
    },
    speed: {
      // 自动取消沉浸的速度
      type: Number,
      value: 1
    },
    bgColor: {
      // 非沉浸时的颜色
      type: String,
      value: '255,255,255'
    },
    rgba: {
      // 非沉浸时的颜色
      type: String,
      value: "1"
    },
    back: {
      // 是否有返回按钮
      type: Boolean,
      value: false
    },
    titleColor: {
      // title自定文字颜色
      type: String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    BackIcon: "/static/back.svg",
    rgba: "1",
    screenHeight: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 返回事件
     */
    returnPage: function returnPage() {
      wx.navigateBack();
    },
    /**
     * 滑动监听事件
     */
    scroll: function scroll(e) {
      var heighTop = e.detail.scrollTop;
      var rgba = this.data.rgba;
      var screenHeight = this.data.screenHeight;
      var myShow = parseInt(heighTop) / parseInt(screenHeight);
      // console.log(myShow)
      if (myShow > this.data.Threshold) {
        rgba = myShow * (2 * this.data.speed);
      } else {
        rgba = "0";
      }
      if (parseFloat(rgba) > 1) {
        rgba = "1";
      }
      this.setData({
        rgba: rgba
      });
    },
    /**
     * 自动获得当前手机信息(高度等)
     */
    getTarHeighgt: function getTarHeighgt() {
      // 获取胶囊的信息
      var menuButton = wx.getMenuButtonBoundingClientRect();
      var menuButtonHeight = menuButton.height;
      var menuButtonWidth = menuButton.width;
      var menuButtonTop = menuButton.top;
      // 获取设备的信息  
      var systemInfo = wx.getSystemInfoSync();
      // 获得屏幕高度
      var screenHeight = systemInfo['screenHeight'];
      // 获取信号区高度
      var statusBarHeight = systemInfo['statusBarHeight'];
      // 设置胶囊行的高度
      var capsuleBoxHeight = menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;
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
      this.setData({
        capsuleBoxHeight: capsuleBoxHeight,
        statusBarHeight: statusBarHeight,
        screenHeight: screenHeight,
        menuButtonWidth: menuButtonWidth
      });
    }
  },
  pageLifetimes: {
    /**
     * 生命周期函数
     */
    show: function show() {
      this.getTarHeighgt();
    }
  }
});