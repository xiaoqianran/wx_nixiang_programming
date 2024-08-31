var _regeneratorRuntime2 = require("../../@babel/runtime/helpers/regeneratorRuntime");var _asyncToGenerator2 = require("../../@babel/runtime/helpers/asyncToGenerator");var _request = require("../../utils/request");var _link = require("../../utils/link");Page({
  data: {
    place: "",
    // 地点
    iconListUrl: {
      mapPendantIconUrl: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-al7zdf.png",
      // 地图挂件
      doubleQuotationIconUrl: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-8b6h54.png",
      //双引号
      featuredStoryIconUrl: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-3ufn4y.png",
      // 精选故事
      planeIconUrl: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-omskps.png" // 小飞机
    },

    insetListUrl: {
      mapPendantUrl: "http://introduce.mcdd.top/sp-web-imageBank-202407120007-qi1qzb.png",
      // 地图挂件
      nanNanLetGoUrl: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-5b2dim.png",
      // 南南放手
      naNnanRubHands: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-36caoy.png" // 南南搓手
    },

    bannerList: [],
    // 轮播图
    bannerListUrl: {
      // 北门
      northGate: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-rxfb96.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-2bdaia.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-rgtjbo.png"
      }],
      // 天鹅湖
      swanLake: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-6lnnro.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-4jahhu.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407100007-qz2k00.png"
      }],
      // 操场
      playground: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-35m440.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-6cgld5.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-6cgld5.png"
      }],
      // 行政中心
      adminCenter: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-i85t3i.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-pxw3r4.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-3666fs.png"
      }],
      // 实验楼
      laboratoryBuilding: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-zfa3fq.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-ezckmz.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-7gugv5.png"
      }],
      // 首义礼堂
      shouyiAuditorium: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-zlwth0.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-9f30xi.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-zbzrxr.png"
      }],
      // 东门
      eastGate: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-tzkex9.png"
      }],
      // 鸽子屋
      pigeonHouse: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-a1wujr.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-rsax4z.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-j6hseo.png"
      }],
      // 快递点
      expressPoint: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-fox0fp.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-20f1mr.png"
      }],
      // 图书馆
      library: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-yatx2k.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-wzcbff.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-e2sbks.png"
      }],
      // 教学楼
      teachBuild: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-34ktno.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-0s97wx.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-a19rnt.png"
      }],
      // 3-8号宿舍楼
      dormitoryThreeToEight: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-chm5vf.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-9ftei6.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-yqoqac.png"
      }],
      // 食堂
      canteen: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-4i6s54.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092107-ei1n3m.png"
      }],
      // 篮球场
      basketballCourt: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-dtg83z.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-3ii8wo.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-ivf6br.png"
      }],
      // 商业街
      commercialStreet: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-r6jy18.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-6qsh91.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-om3fok.png"
      }],
      // 1、2号宿舍楼
      dormitoryOneToTwo: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-ejbwbs.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-6dsyel.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-j0b6nm.png"
      }],
      // 球类运动场
      sportsField: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-3xsb1x.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-bu4bfp.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-hcslip.png"
      }],
      // 南门
      southGate: [{
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-khbw0b.png"
      }, {
        img: "http://introduce.mcdd.top/sp-web-imageBank-202407092207-6qv26u.png"
      }]
    },
    storyIntro: "",
    // 故事简介
    introDetail: "",
    // 储存简介
    // 故事简介列表
    storyIntroList: {},
    // 故事记录
    storyListPath: [{
      icon: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-smj9x5.png",
      text: "人看过"
    }, {
      icon: "http://introduce.mcdd.top/sp-web-imageBank-202407092007-w2c1gh.png",
      text: "个故事"
    }],
    // 评论区
    commentList: [],
    tweetId: '',
    // 推文id
    featuredReviews: 0,
    // 精选评论数量
    locationId: '',
    // 位置id
    showBlank: true,
    //
    showIntro: false,
    // 是否展开详情
    tweetUrl: '' // 推文链接
  },
  /**
   * 计算导航栏高度
   */
  getNavBarHeitht: function getNavBarHeitht() {
    var systemInfo = wx.getSystemInfoSync();
    var statusBarHeight = systemInfo.statusBarHeight;
    var menuButton = wx.getMenuButtonBoundingClientRect();
    var navBarHeight = statusBarHeight + menuButton.height + (menuButton.top - statusBarHeight) * 2;
    this.setData({
      navBarHeight: navBarHeight
    });
  },
  /**
   * 初始化页面信息
   */
  initStoryInfo: function initStoryInfo() {
    var _this = this;
    var _this$data = this.data,
      place = _this$data.place,
      bannerList = _this$data.bannerList,
      bannerListUrl = _this$data.bannerListUrl,
      storyIntro = _this$data.storyIntro,
      storyIntroList = _this$data.storyIntroList;
    switch (place) {
      case '北门':
        bannerList = bannerListUrl.northGate;
        storyIntro = storyIntroList.northGate;
        break;
      case '南门':
        bannerList = bannerListUrl.southGate;
        storyIntro = storyIntroList.southGate;
        break;
      case '天鹅湖':
        bannerList = bannerListUrl.swanLake;
        storyIntro = storyIntroList.swanLake;
        break;
      case '操场':
        bannerList = bannerListUrl.playground;
        storyIntro = storyIntroList.playground;
        break;
      case '行政中心':
        bannerList = bannerListUrl.adminCenter;
        storyIntro = storyIntroList.adminCenter;
        break;
      case '实验楼':
        bannerList = bannerListUrl.laboratoryBuilding;
        storyIntro = storyIntroList.laboratoryBuilding;
        break;
      case '礼堂':
        bannerList = bannerListUrl.shouyiAuditorium;
        storyIntro = storyIntroList.shouyiAuditorium;
        break;
      case '东门':
        bannerList = bannerListUrl.eastGate;
        storyIntro = storyIntroList.eastGate;
        break;
      case '鸽子屋':
        bannerList = bannerListUrl.pigeonHouse;
        storyIntro = storyIntroList.pigeonHouse;
        break;
      case '快递点':
        bannerList = bannerListUrl.expressPoint;
        storyIntro = storyIntroList.expressPoint;
        break;
      case '图书馆':
        bannerList = bannerListUrl.library;
        storyIntro = storyIntroList.library;
        break;
      case '教学楼':
        bannerList = bannerListUrl.teachBuild;
        storyIntro = storyIntroList.teachBuild;
        break;
      case '1-2宿舍楼':
        bannerList = bannerListUrl.dormitoryOneToTwo;
        storyIntro = storyIntroList.dormitoryOneToTwo;
        break;
      case '3-8宿舍楼':
        bannerList = bannerListUrl.dormitoryThreeToEight;
        storyIntro = storyIntroList.dormitoryThreeToEight;
        break;
      case '食堂':
        bannerList = bannerListUrl.canteen;
        storyIntro = storyIntroList.canteen;
        break;
      case '篮球场':
        bannerList = bannerListUrl.basketballCourt;
        storyIntro = storyIntroList.basketballCourt;
        break;
      case '商业街':
        bannerList = bannerListUrl.commercialStreet;
        storyIntro = storyIntroList.commercialStreet;
        break;
      case '球类运动场':
        bannerList = bannerListUrl.sportsField;
        storyIntro = storyIntroList.sportsField;
        break;
      default:
        console.warn('未知位置:', place);
        bannerList = [];
        break;
    }
    this.setData({
      bannerList: bannerList,
      storyIntro: storyIntro
    }, function () {
      _this.initUnfold();
    });
  },
  /**
   * 获取所有地图点位
   */
  getAllMapPoint: function getAllMapPoint() {
    var _this2 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee() {
      var _this2$data, locationId, tweetId, tweetUrl, _yield$get, res, result;
      return _regeneratorRuntime2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this2$data = _this2.data, locationId = _this2$data.locationId, tweetId = _this2$data.tweetId, tweetUrl = _this2$data.tweetUrl;
            _context.prev = 1;
            _context.next = 4;
            return (0, _request.get)(_link.getAllMapPoint, '');
          case 4:
            _yield$get = _context.sent;
            res = _yield$get.data;
            if (res.code == 20000) {
              result = res.data.find(function (item) {
                return item.locationId === locationId;
              });
              if (result) {
                tweetId = result.tweetId;
                tweetUrl = result.tweetLink;
                wx.setStorageSync("src", tweetUrl);
              }
            } else {
              console.error("请求错误！");
            }
            _this2.setData({
              tweetId: tweetId,
              tweetUrl: tweetUrl
            }, function () {
              _this2.getStoryRecords();
            });
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 10]]);
    }))();
  },
  /**
   * 获取评论
   */
  getStoryRecords: function getStoryRecords() {
    var _this3 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee2() {
      var _this3$data, tweetId, showBlank, commentList, featuredReviews, commentResErr, commentId, _yield$get2, res;
      return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this3$data = _this3.data, tweetId = _this3$data.tweetId, showBlank = _this3$data.showBlank, commentList = _this3$data.commentList, featuredReviews = _this3$data.featuredReviews;
            commentResErr = false;
            commentId = 'commentId=' + tweetId;
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _request.get)(_link.getUsersComment, commentId);
          case 6:
            _yield$get2 = _context2.sent;
            res = _yield$get2.data;
            if (res.code == 20000) {
              commentList = res.data.commentList;
              featuredReviews = res.data.totalElectedCount;
              showBlank = false;
            } else if (res.code = 30003) {
              console.warn('暂未开启故事~');
              commentResErr = true;
            } else {
              console.error('请求失败！');
              commentResErr = true;
            }
            _this3.setData({
              commentList: commentList,
              featuredReviews: featuredReviews,
              showBlank: showBlank,
              commentResErr: commentResErr
            });
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            console.error("异常：" + _context2.t0);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 12]]);
    }))();
  },
  /**
   * 获取浏览记录
   */
  getBrowsingHistory: function getBrowsingHistory() {
    var _this4 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee3() {
      var _this4$data, storyListPath, locationId, _yield$get3, res, browsingHistory, totalComment;
      return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _this4$data = _this4.data, storyListPath = _this4$data.storyListPath, locationId = _this4$data.locationId;
            _context3.prev = 1;
            locationId = 'locationId=' + locationId;
            _context3.next = 5;
            return (0, _request.get)(_link.getBrowsingHistory, locationId);
          case 5:
            _yield$get3 = _context3.sent;
            res = _yield$get3.data;
            if (res.code == 20000) {
              browsingHistory = res.data.lookNum + '人看过';
              totalComment = res.data.syncStoryNum + '个故事';
              storyListPath.forEach(function (item, index) {
                item.text = index == 0 ? "".concat(browsingHistory) : "".concat(totalComment);
              });
              _this4.setData({
                storyListPath: storyListPath
              });
            }
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.error('异常' + _context3.t0);
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 10]]);
    }))();
  },
  /**
   * 初始化简介
   */
  initUnfold: function initUnfold() {
    var _this$data2 = this.data,
      storyIntro = _this$data2.storyIntro,
      introDetail = _this$data2.introDetail,
      showIntro = _this$data2.showIntro;
    introDetail = storyIntro;
    if (storyIntro.length < 54) showIntro = true;else storyIntro = storyIntro.slice(0, 54) + "...";
    this.setData({
      storyIntro: storyIntro,
      introDetail: introDetail,
      showIntro: showIntro
    });
  },
  /**
   * 展开视图
   */
  unfoldView: function unfoldView() {
    var storyIntro = this.data.introDetail;
    var showIntro = true;
    this.setData({
      storyIntro: storyIntro,
      showIntro: showIntro
    });
  },
  /**
   * 跳转推文(添加浏览记录)
   */
  jumpTweet: function jumpTweet() {
    if (!this.data.tweetUrl) return;
    // 埋点
    wx.reportEvent("smp_story_tweetcard_tap", {});
    wx.navigateTo({
      url: "/pages/webtweet/webtweet"
    });
  },
  /**
   * 添加浏览记录
   */
  getAddBrowsing: function getAddBrowsing() {
    var _this5 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee4() {
      var locationId, _yield$get4, res;
      return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            locationId = 'locationId=' + _this5.data.locationId;
            _context4.prev = 1;
            _context4.next = 4;
            return (0, _request.get)(_link.getAddBrowsingNum, locationId);
          case 4:
            _yield$get4 = _context4.sent;
            res = _yield$get4.data;
            if (res.code !== 20000) console.error("添加浏览记录失败！");
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.error('异常' + _context4.t0);
          case 12:
            _this5.getBrowsingHistory();
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 9]]);
    }))();
  },
  /** 
   * 获取手机系统
   * 输出iOS和Android
   */
  getSystem: function getSystem() {
    var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      system = _wx$getSystemInfoSync.system;
    var isSystem = system.split(" ")[0];
    this.setData({
      isSystem: isSystem
    });
  },
  getEnableInterface: function getEnableInterface() {
    var _this6 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee5() {
      var _yield$get5, res;
      return _regeneratorRuntime2().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _request.get)(_link.enableInterface);
          case 3:
            _yield$get5 = _context5.sent;
            res = _yield$get5.data;
            if (res.data) {
              _this6.setData({
                storyIntroList: {
                  // 北门
                  northGate: "北门是嘉鱼校区的正大门，北门的对面就是公交车站。新生开学季，同学们一般都会从北门进入学校。为了便于同学们的出行，每周末和节假日都会有嘉鱼客运站的大巴车在大门门口以供大家乘坐。",
                  // 天鹅湖
                  swanLake: "碧波荡漾的湖面上有许许多多优雅的天鹅，湖周围环绕有一条小道，非常适合夜晚与三五好友结伴散步；小道周围包有一圈树木，四周都充满了大自然的味道。沿着湖边散步，你能拍到很多好看的照片， 特别是晚上，路灯亮起，灯光在湖面上显现倒影，水面波光粼粼，蓝调时分，静谧的蓝与活力的黄结合，带来色彩冲击。",
                  // 操场
                  playground: "嘉鱼校区操场宽阔平坦，设施完备，拥有标准田径跑道和足球场。操场跑道是晚间keep跑步打卡地，操场中央是足球场，跑道旁连接着天鹅湖，运动累了便可以在湖边散散步休息，看看天鹅，欣赏夜色。这里不仅是学生们挥洒汗水、释放活力的舞台，还是举办各类体育赛事的重要场所。操场周边绿树成荫，环境宜人，为师生们提供了优质的体育活动环境。",
                  // 行政中心
                  adminCenter: "这栋楼就是学校的办事中心，在这里可以处理各种事务。辅导员办公室、校医务室都在这里。补办校园卡、请假、看病、借教室、执勤等等，各种事务都可以在这里解决。 行政中心可谓是麻雀虽小，五脏俱全。教务处、学工部、财务处等与首义er们息息相关的部门都集中在这栋大楼之中。想要办理各样事务，来行政中心的次数少不了~",
                  // 实验楼
                  laboratoryBuilding: "实验楼是学校实践教学的重要场所。该实验楼总面积广阔，拥有先进的实验设备和仪器，能够满足不同学科的教学和科研需求。实验楼内设有多个实验室，涵盖了工学、文学、法学、经济学、管理学和艺术学等多个学科领域，为学生提供了丰富的实践机会。同时，实验楼还与华为、腾讯、中软国际、华中数控等行业龙头企业共建了多个实践平台，实现了校企“共建共管，共融共赢”的协同育人模式，为首义er们提供了更广阔的实践和发展空间。",
                  // 礼堂
                  shouyiAuditorium: "首义礼堂是学校重要的文化设施之一。礼堂占地面积广，可容纳学生及教职工数千人。内部设施完善，音响、灯光设备先进，为各类文艺演出、学术报告、典礼活动提供高质量的场地支持。首义礼堂设计典雅，既体现了学校的文化底蕴，又展示了现代建筑的魅力。",
                  // 东门
                  eastGate: "东门位于嘉鱼校区菜鸟驿站的旁边。新生开学季时，为了方便新生们入学，东门会开放，日常情况下东门一般不会开放。",
                  // 鸽子屋
                  pigeonHouse: "鸽子屋是首义er们值得打卡的宝藏景点。古色古香的小木屋雕刻着镂空的花纹，上面有一排排整齐的鸽子小巢，灵巧可爱的白鸽会在此歇息。偶尔还会在教学楼和图书馆看到鸽鸽们的上演一出鸽の爱恋，向学弟学妹们撒一把狗粮~",
                  // 快递点
                  expressPoint: "此处的快递点为菜鸟驿站，是距离宿舍楼和教学楼最远的一个快递点。嘉鱼校区共有三个快递站，分别是兔喜快递、顺丰速运和菜鸟驿站。兔喜快递和顺丰速运在商业街上，距离相对较近。",
                  // 图书馆
                  library: "嘉鱼校区图书馆建筑面积1.7万平方米，阅览座位数百个，藏书量达数十万册，涵盖多个学科领域。设有电子阅览区、休闲阅览区、个人学习区等，提供图书外借、归还、续借、期刊报纸杂志等服务，还有创客空间、小组学习室、咖啡吧等特色区。书籍借阅在自助借阅机上扫码登记即可，非常方便快捷。嘉鱼图书馆致力于为学生提供丰富的学术资源和舒适的学习环境，是学生学习和研究的理想场所。",
                  // 教学楼
                  teachBuild: "教学楼，作为学校的核心教学设施，坐落于校园中心地带。该楼为综合性大楼，1栋5层，共163间教室，每一层、每一间教室门口都有清晰的指示牌，教学楼内配有电梯，可根据指示找到自己上课的教室，如大阶梯教室、小阶梯教室等，满足不同课程需求。楼内还设有教师休息室、监控室等功能区域，确保教学秩序井然。每间教室都配备有空调，风扇、时钟等。教学楼采用现代化设计理念，配备先进的教学设备，为师生提供优良的教学环境。",
                  // 宿舍楼A
                  dormitoryOneToTwo: "这两栋宿舍楼全部是由男生居住，1、2宿舍楼离商业街很近，在商业街的末尾，离球类运动场很近，在球类运动场的前方。离教学楼较远，中间要穿过篮球场还有宿舍群。但1、2宿舍楼的硬件设施与其他宿舍楼的是完全一样的。",
                  // 食堂
                  canteen: "坐落于嘉鱼校区的食堂，虽然仅有一层楼的空间，但这里的各式各样的美食和超市服务一应俱全。食堂内有15家各具特色的店铺，分为单点类、自选类和其他特色类别，可以满足首义er们不同的口味需求！",
                  // 篮球场
                  basketballCourt: "我们学校的篮球场设施完善，条件优越。球场地面采用了高质量的塑胶材料，确保了比赛的舒适性和安全性。篮球架坚固耐用，篮筐标准，满足了日常使用和比赛的需求。篮球场离男生宿舍楼和女生宿舍楼都很近，同学们到篮球场去运动都很方便，每天晚上都有很多的男生相约打球。",
                  // 商业街
                  commercialStreet: "商业街位于校园内，自教学楼门口起到男生寝室楼下都为商业街范围，距离宿舍近方便快捷。店铺种类丰富，包括超市、奶茶店、理发店、美甲店、水果店等多种业态，满足学生日常购物和休闲需求。尤其是美食，商业街除了含有各大连锁门店如蜜雪冰城，瑞幸咖啡、绝味鸭脖、塔斯汀等店铺外，还含有襄阳牛肉面、武汉热干面、荆州锅盔、广东肠粉、柳州螺蛳粉等系列地方特色美食~深受首义er们喜爱。",
                  // 宿舍楼B
                  dormitoryThreeToEight: "我们学校的宿舍楼大多集中在这一块区域，前三栋宿舍楼是由女生居住，后几栋宿舍楼由男生居住。宿舍楼风格统一，配套设施完善，四人寝，有独立卫浴。宿舍楼离教学楼、篮球场，商业街都很近，日常生活都很方便，楼下还有共享电动车，出行也很方便。",
                  // 球类运动场
                  sportsField: "喜欢打羽毛球、乒乓球的同学可以到球类运动场来，球类运动场露天而建、空间很大、器械很多，能够同时满足大多数人的需求。它建立在1、2栋男生公寓的前方，紧挨篮球场，离女生宿舍楼较远。",
                  // 南门
                  southGate: "南门是一个很偏僻的大门，门的对面是武汉东湖学院，因为位置很偏，平常没有人会到这里去，所以南门的使用率较低，平常只有中小学生到我们学校研学会从南门进学校。"
                }
              });
            }
            _context5.next = 11;
            break;
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.error("接口出现问题");
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 8]]);
    }))();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(option) {
    var place = option.place,
      locationId = option.locationId;
    place = place == '宿舍楼A' ? '3-8宿舍楼' : place == '宿舍楼B' ? '1-2宿舍楼' : place;
    this.setData({
      place: place,
      locationId: locationId
    });
    this.getNavBarHeitht();
    this.getAllMapPoint();
    this.getAddBrowsing();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    var _this7 = this;
    return _asyncToGenerator2( /*#__PURE__*/_regeneratorRuntime2().mark(function _callee6() {
      return _regeneratorRuntime2().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _this7.getEnableInterface();
          case 2:
            _this7.initStoryInfo();
            _this7.getSystem();
          case 4:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
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