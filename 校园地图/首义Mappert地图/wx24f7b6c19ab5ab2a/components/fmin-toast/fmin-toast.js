Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      //属性类型
      value: '...' // 默认值
    },

    image: {
      type: String,
      value: 'error'
    },
    showToast: {
      type: Boolean,
      value: false
    },
    duration: {
      type: Number,
      value: 3
    },
    backgroundColorType: {
      type: String,
      value: '' // normol 纯白
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationName: "fadeIn"
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 关闭弹窗
     */
    hiddenToast: function hiddenToast() {
      var that = this;
      this.setData({
        animationName: "fadeOut"
      });
      setTimeout(function () {
        that.setData({
          showToast: false
        });
      }, 0.2 * 1000);
    },
    /**
     * 打开弹窗
     */
    showToast: function showToast(title, image) {
      if (title) {
        this.setData({
          title: title,
          image: image,
          animationName: "fadeIn",
          showToast: true
        });
      } else {
        console.log("title is must not bu null!");
      }
    },
    /**
     * 打开弹窗（自动关闭，第三个参数为自动关闭的时间，单位为s,最后一个为回调函数）
     */
    showToastAuto: function showToastAuto(title, image, duration, seccess) {
      if (title) {
        var that = this;
        if (!duration) {
          duration = 2;
        }
        this.setData({
          title: title,
          image: image,
          animationName: "fadeIn",
          showToast: true
        }, function () {
          setTimeout(function () {
            that.hiddenToast();
            if (seccess != undefined && seccess != null) {
              seccess();
            }
          }, duration * 1000);
        });
      } else {
        console.log("title is must not bu null!");
      }
    }
  },
  observers: {
    // 'showToast': function() {
    //   const { showToast, duration } = this.data;
    //   if(showToast) {
    //     setTimeout(()=>{
    //       this.setData({
    //         showToast: false
    //       })
    //     }, duration*1000)
    //   } 
    // },
  }
});