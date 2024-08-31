var d = 1,
  v = 0;var P = [[1, 0], [0, 1]];var Q = [[0.08, 0],
// 位置预测噪声方差
[0, 1] // 速度预测噪声方差
];Page({
  /**
   * 页面的初始数据
   */
  data: {
    distance: 0,
    // 手指移动的距离
    scale: 1,
    // 缩放比例
    baseWidth: 0,
    // 图片实际宽度
    baseHeight: 0,
    // 图片实际高度
    initWidth: 0,
    // 图片默认显示宽度
    initHeight: 0,
    // 图片默认显示高度
    scaleWidth: 0,
    // 图片缩放后的宽度
    scaleHeight: 0,
    // 图片缩放后的高度
    width: 0,
    multiple: 0,
    kalman: function kalman() {}
  },
  kalmanFilter: function kalmanFilter(z, a, dt) {
    // 预测状态值公式： $x[t] = F * x[t-1] + B * u[t-1]  其中F为状态转换矩阵，B为控制矩阵
    // 预测协方差矩阵公式：$P[t] = F * P[t-1] * F(T) + Q 其中Q为预测模型本身存在的噪声的协方差矩阵
    // 观测状态值公式：z[t] = H * x[t] + v 其中 H为最优估计值到观测值间的关系矩阵，v为观测值噪声 v的协方差矩阵为R
    // 卡尔曼系数：K[t] = $P[t] * H(T) / ( H * $P[t] * H(T) + R ) // 其中R为观测观测值噪声协方差
    // 最优估计值公式：x[t] = $x[t] + K[t] * ( z[t] - H * $x[t] )
    // 更新状态噪声协方差矩阵：P[t] =  ( I - K[t]H) * $P[t]
    var R = 1; // 观测值的噪声是一维的(只接受一个传感器参数)所以直接取观测值噪声方差
    // Q和R需要手动进行超参数调整，调整到合适的数值
    // 预测
    var $d = d + v * dt + 0.5 * a * dt * dt; // a已经包含误差，所以不用在加预测噪声
    var $v = v + dt * a;
    var $P00 = P[0][0] + Q[0][0] + (P[0][1] + P[1][0]) * dt + dt * dt * P[1][1]; // dt * dt * P[1][1]通常该值太小可忽略
    var $P01 = P[0][1] + P[1][1] * dt;
    var $P10 = P[1][0] + P[1][1] * dt;
    var $P11 = P[1][1] + Q[1][1];
    var K0 = $P00 / ($P00 + R);
    var K1 = $P10 / ($P00 + R);

    // 最优估计值
    v = $v + K1 * ((z - d) / dt - $v);
    d = $d + K0 * (z - $d);
    P[0][0] = $P00 - K0 * $P00;
    P[0][1] = $P01 - K0 * $P01;
    P[1][0] = $P10 - K1 * $P00;
    P[1][1] = $P11 - K1 * $P01;
    return d;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    // 获取屏幕宽度
    var width = wx.getSystemInfoSync().windowWidth;
    this.setData({
      width: width
    });
  },
  /**
   * 监听图片加载成功时触发
   */
  imgload: function imgload(e) {
    var multiple = e.detail.width / this.data.width; // 计算原图和默认显示的倍数
    console.log(multiple);
    var height = multiple > 1 ? e.detail.height / multiple : e.detail.height; // 等比例计算出默认高度
    var width = multiple > 1 ? this.data.width : e.detail.width;
    this.setData({
      baseWidth: e.detail.width,
      // 获取图片实际宽度
      baseHeight: e.detail.height,
      // 获取图片实际高度
      initWidth: width,
      initHeight: height,
      scaleWidth: width,
      scaleHeight: height
    });
  },
  /**
   * 双手指触发开始 计算开始触发两个手指坐标的距离
   */
  touchstartCallback: function touchstartCallback(e) {
    // 单手指缩放开始，不做任何处理
    if (e.touches.length == 1) return;
    var distance = this.calcDistance(e.touches[0], e.touches[1]);
    this.setData({
      'distance': distance
    });
  },
  /**
   * 双手指移动   计算两个手指坐标和距离
   */
  touchmoveCallback: function touchmoveCallback(e) {
    var multiple = this.data.multiple;
    // 最大放大倍数
    var max = 3;
    // 单手指缩放不做任何操作
    if (e.touches.length == 1) return;
    var distance = this.calcDistance(e.touches[0], e.touches[1]);
    // 计算移动的过程中实际移动了多少的距离
    var distanceDiff = distance - this.data.distance;
    distanceDiff = this.kalmanFilter(distanceDiff, 0.1, 1);
    var newScale = this.data.scale + 0.005 * distanceDiff;
    if (newScale >= multiple && multiple > max) {
      // 原图比较大情况
      newScale = multiple;
    } else if (multiple < max && newScale >= max) {
      // 原图较小情况
      newScale = max; // 最大max倍
    }
    ;
    // 最小缩放到1
    if (newScale <= 1) {
      newScale = 1;
    }
    ;
    var initWidth = this.data.initWidth;
    var initHeight = this.data.initHeight;
    var scaleWidth = newScale * initWidth;
    var scaleHeight = newScale * initHeight;
    this.setData({
      distance: distance,
      scale: newScale,
      scaleWidth: scaleWidth,
      scaleHeight: scaleHeight,
      diff: distanceDiff
    });
  },
  /**
   * 计算两个手指距离
   */
  calcDistance: function calcDistance(pos0, pos1) {
    var xMove = pos1.clientX - pos0.clientX;
    var yMove = pos1.clientY - pos0.clientY;
    return Math.sqrt(xMove * xMove + yMove * yMove);
  }
});