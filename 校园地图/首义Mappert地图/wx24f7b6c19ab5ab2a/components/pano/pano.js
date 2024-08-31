var Exports;var app;var THREE;var libwxPano;var initEnv = {
  _Lib:{ //存放库

  },
  _Node:{ //存放组件
    WebGLCanvas:null, //主画布组件
    PanoVideo:null, //视频播放组件
    Canvas2d:null //绘图组件
  },
  status:{ //存放各种状态
    inited: false, //画布是否已初始化
    visible: true, //画布是否显示
    isDEVICEORIENTATION : false,
    initedDEVICEORIENTATION : false,
    touchEnabled : true,
    isCheckObjectsIntersect : true,
    isTouchStarted:false,
    isTouchMoved:false,
    TouchMovedCount:0,
    isTouchAndObjects:false,
    loadingIntervalId:null
  },
  data:{ //存放全景图、画布参数等数据
    width: 320,
    height: 640,
    pixelRatio: 1.0,
    panolist: [],
    canvasWidth: 320 * 1.0,
    canvasHeight: 640 * 1.0,
    canvasStyleWidth: 320,
    canvasStyleHeight: 640,
    accountInfo: {},
    entryid: 0,
    entryname: "",
    key: "", 
    debug:false, //是否开启调试模式
    useCanvas2d:false, //是否使用绘图组件
    usePanoVideo:false, //是否使用视频播放组件
    currentorientation:0,
    LabelList:[],
    system:wx.getSystemInfoSync().system
  },
  wxEnv:{}, //存放微信环境
};var PanoEnv = initEnv;Component({
  options: {
    multipleSlots: false
  },
  properties: {
    panolist: {
      type: Array,
      value: []
    },
    entryid: {
      type: Number,
      value: 0
    },
    entryname: {
      type: String,
      value: ""
    },
    debug: {
      type: Boolean,
      value: false
    },
    width: {
      type: Number,
      value: null
    },
    height: {
      type: Number,
      value: null
    },
    key: {
      type: String,
      value: ""
    },
    autoinit: {
      type: Boolean,
      value: true
    }
  },
  data: {
    useCanvas2d:false,
    usePanoVideo:false
  }, 
  pageLifetimes: {
    show: function () {
      if (PanoEnv.status.inited) {
        PanoEnv.wxEnv.play();
      }
    },
    hide: function () {
      if (PanoEnv.status.inited) {
        PanoEnv.wxEnv.stop();
      }
    }
  },
  attached: function () {
    Exports = require("../../index.js");
    app = require("../../app.js");
    THREE = {};
    libwxPano=app.libwxPano;
    console.log("wxPano 小程序全景展示插件 V2.1.4\nwxPano Plugin V2.1.4");
    PanoEnv.wxEnv = this;
    var data = this.data;
    if (data.autoinit) {
      this.initdata();
    } else {
      Exports.config = this.config;
    }
  }, 
  detached: function () {
    PanoEnv._Viewer.destroy();
    PanoEnv = initEnv;
    Exports = undefined;
    app = undefined;
    THREE = undefined;
    libwxPano = undefined;
  },
  error:function(err){
    console.log(err);
  },
  methods: {
    config: function (obj) {//配置变量及环境
      var data = obj;
      var VideoInfo=data.VideoInfo;
      var panolist = data.panolist;
      if (typeof panolist != "object") {
        console.warn("无全景信息载入。\npanolist does not input.");
        return false;
      }
      var width = data.width > 0 ? data.width : app.SystemInfo.windowWidth;
      var height = data.height > 0 ? data.height : app.SystemInfo.windowHeight;
      var entryid = data.entryid || 0;
      var entryname = data.entryname || "";
      var key = data.key || "";
      var debug = data.debug || false;
      var pixelRatio = app.SystemInfo.pixelRatio;
      var accountInfo = wx.getAccountInfoSync();
      if(data.loader=="JPLoader"){
        PanoEnv.data.loader="JPLoader";
      }else{
        PanoEnv.data.loader="GLLoader";
        if(data.loader!="GLLoader"&&(data.loader!=""||data.loader!=undefined)){
          console.warn("无"+data.loader+"图像加载器，默认使用GLLoader\nNo "+data.loader+", default use GLLoader.");
        }
      }
      if(typeof data.request == "function"){
        PanoEnv._Lib.request=data.request;
      }else{
        PanoEnv._Lib.request=wx.request;
      }
      var SDKVersion=app.SystemInfo.SDKVersion;
      var useCanvas2d=false;
      var usePanoVideo=false;
      if(app.compareVersion(SDKVersion,"2.7.4")>=0){
        if(app.compareVersion(SDKVersion,"2.9.0")>=0){
          useCanvas2d=true;
          if(app.compareVersion(SDKVersion,"2.10.0")>=0){
            usePanoVideo=true;
          }else{
            console.warn("当前基础库版本低于2.10.0，无法使用视频功能\nSDKVersion is lower than 2.10.0, Cannot use the Video function.");
          }
        }else{
          console.warn("当前基础库版本低于2.9.0，无法使用标签功能\nSDKVersion is lower than 2.9.0, Cannot use the Label function.");
        }
      }else{
        console.warn("当前基础库版本低于2.7.4，无法正常使用此插件\nSDKVersion is lower than 2.7.4, Cannot use this plugin.");
        return false;
      }
      var sys = {
        width: width,
        height: height,
        pixelRatio: pixelRatio,
        panolist: panolist,
        canvasWidth: width * pixelRatio,
        canvasHeight: height * pixelRatio,
        canvasStyleWidth: width,
        canvasStyleHeight: height,
        accountInfo: accountInfo,
        entryid: entryid,
        entryname: entryname,
        key: key, 
        debug:debug,
        useCanvas2d:useCanvas2d,
        usePanoVideo:usePanoVideo,
        loader:PanoEnv.data.loader
      };
      if(typeof VideoInfo == "object"){
        sys.VideoInfo=VideoInfo;
      }
      PanoEnv.wxEnv.setData(sys, PanoEnv.wxEnv.initdata);
    },
    initdata: function () {
      var data = PanoEnv.wxEnv.data||this.data;
      var width = data.width > 0 ? data.width : app.SystemInfo.windowWidth;
      var height = data.height > 0 ? data.height : app.SystemInfo.windowHeight;
      var pixelRatio = app.SystemInfo.pixelRatio;
      var accountInfo = wx.getAccountInfoSync();
      var sys = {
        width: width,
        height: height,
        pixelRatio: pixelRatio,
        canvasWidth: width * pixelRatio,
        canvasHeight: height * pixelRatio,
        canvasStyleWidth: width,
        canvasStyleHeight: height,
        accountInfo: accountInfo
      };
      this.setData(sys, this.initpano);
    },
    getwebglNode:function(callback){
      var self = this;
      var webglQuery = wx.createSelectorQuery().in(this);
      webglQuery.select('#webgl').node().exec((webglres) => {
        self.webglres=webglres;
        if(self.data.useCanvas2d){
          self.getCanvas2dNode.bind(self)(callback);
        }else{
          callback.bind(self)();
        }
      });
    },
    getCanvas2dNode:function(callback){
      var self = this;
      var canvas2dQuery = wx.createSelectorQuery().in(this);
      canvas2dQuery.select('#canvas2d').node().exec((canvasres) => {
        self.canvasres=canvasres;
        if(self.data.usePanoVideo){
          self.getPanoVideoNode.bind(self)(callback);
        }else{
          callback.bind(self)();
        }
      });
    },
    getPanoVideoNode:function(callback){
      var self = this;
      var PanoVideoQuery = wx.createSelectorQuery().in(this);
      PanoVideoQuery.select('#PanoVideo').context().exec((PanoVideores) => {
        self.PanoVideores=PanoVideores;
        callback.bind(self)();
      });
    },
    initcanvas:function(canvas){
      var self=this;
      var cdata = self.data;
      canvas.pixelRatio = app.SystemInfo.pixelRatio;
      canvas.width = cdata.canvasWidth;
      canvas.height = cdata.canvasHeight;
      canvas.clientWidth = cdata.canvasStyleWidth;
      canvas.clientHeight = cdata.canvasStyleHeight;
      canvas.style = {};
      canvas.style.width = canvas.width;
      canvas.style.height = canvas.height;
      canvas.icon = {};
      canvas.icon.sizeRatio = canvas.clientWidth / 320;
      canvas.EventListenerList = {};
      canvas.addEventListener = function (type, func, useCapture) {
        canvas.EventListenerList[type] = canvas.EventListenerList[type] || [];
        canvas.EventListenerList[type].push(func)
        return canvas.EventListenerList[type].length - 1;
      }
      canvas.removeEventListener = function (type, ID) {
        canvas.EventListenerList[type][ID] = function () { }
      }
      return canvas;
    },
    initpano: function () {
      var self = this;
      PanoEnv.wxEnv=self;
      PanoEnv._Lib=libwxPano;
      PanoEnv.data = self.data;
      PanoEnv.data.LabelList=[];
      PanoEnv.data.system=wx.getSystemInfoSync().system;
      var panolist = PanoEnv.data.panolist;
      for (var i in panolist) {
        panolist[i].panoId = parseInt(i);
        panolist[i].preloaded = false;
      }
      var callback=function(){
        var WebGLCanvas = this.webglres[0].node;
        if(PanoEnv.data.useCanvas2d){
          var Canvas2d=this.canvasres[0].node;
          Canvas2d.width=2048;
          Canvas2d.height=1024;
        }else{
          var Canvas2d=null;
        }
        if(PanoEnv.data.usePanoVideo){
          var PanoVideo = this.PanoVideores[0].context;
        }else{
          var PanoVideo=null;
        }
        WebGLCanvas=self.initcanvas(WebGLCanvas);
        PanoEnv._Node={};
        PanoEnv._Node.WebGLCanvas=WebGLCanvas;
        PanoEnv._Node.PanoVideo=PanoVideo;
        PanoEnv._Node.Canvas2d=Canvas2d;
        PanoEnv = new libwxPano.init(PanoEnv, function () {
          THREE = PanoEnv._Lib.THREE;
          PanoEnv._Viewer = new PanoEnv._Lib.Viewer({ container: PanoEnv._Node.WebGLCanvas, PanoEnv:PanoEnv});
          PanoEnv._Camera=PanoEnv._Viewer.getCamera();
          PanoEnv._Viewer.add(PanoEnv._Camera);
          PanoEnv.data.lastWidth = PanoEnv.wxEnv.getCanvasWidth();
          PanoEnv.data.lastHeight = PanoEnv.wxEnv.getCanvasHeight();
          PanoEnv.data.controlPoint = new PanoEnv._Lib.Infospot(PanoEnv, 0.25, PanoEnv._Lib.DataImage.Ring);
          PanoEnv.data.controlPoint.center.set(0,0);
          PanoEnv.data.controlPoint.position.set(-0.125, -0.15,-9.5);
          PanoEnv.data.controlPoint.material.opacity = 0.75;
          PanoEnv.data.currentPanoInfo = PanoEnv.wxEnv.loadPanoInfo();
          PanoEnv.wxEnv.loadPanorama(PanoEnv.data.currentPanoInfo, "normal", true);
          PanoEnv.wxEnv.loadInfospot(PanoEnv.data.currentPanoInfo.infospots);
          PanoEnv._Raycaster = new THREE.Raycaster();
          self.exportsFunction();
          PanoEnv.wxEnv.setCanvasWidth(PanoEnv.wxEnv.getCanvasWidth());
          PanoEnv.wxEnv.setCanvasHeight(PanoEnv.wxEnv.getCanvasHeight());
          var loadingIntervalId=setInterval(function(){
            if (PanoEnv.data.currentPanorama.loaded) {
              clearInterval(loadingIntervalId);
              //PanoEnv.status.inited=true;
              console.log("全景展示平台加载完成！\nPlugin Is Ready!");
              if (typeof Exports.onReady == "function") {
                Exports.onReady();
              }
            }
          },25);
        });
      }
      self.getwebglNode(callback);
    },
    exportsFunction:function(){
      Exports.JPEGDecode = THREE.JPEGDecode;
      Exports.PNGDecode = THREE.PNGDecode;
      Exports.getAllPanoInfo = PanoEnv.wxEnv.getAllPanoInfo;
      Exports.getPanoInfo = PanoEnv.wxEnv.getPanoInfo;
      Exports.getInfospots = PanoEnv.wxEnv.getInfospots;
      Exports.addPano = PanoEnv.wxEnv.addPano;
      Exports.delPano = PanoEnv.wxEnv.delPano;
      Exports.addInfoSpot = PanoEnv.wxEnv.addInfoSpot;
      Exports.delInfoSpot = PanoEnv.wxEnv.delInfoSpot;
      Exports.addLabel = PanoEnv.wxEnv.addLabel;
      Exports.delLabel = PanoEnv.wxEnv.delLabel;
      Exports.setCameraFov = PanoEnv.wxEnv.setCameraFov;
      Exports.getCameraFov = PanoEnv.wxEnv.getCameraFov;
      Exports.setCameraLookAt = PanoEnv.wxEnv.setCameraLookAt;
      Exports.getCameraLookAt = PanoEnv.wxEnv.getCameraLookAt;
      Exports.navigateMethod = PanoEnv.wxEnv.navigateMethod;
      Exports.enableTouch = PanoEnv.wxEnv.enableTouch;
      Exports.disableTouch = PanoEnv.wxEnv.disableTouch;
      Exports.getPluginSecret = PanoEnv.wxEnv.getPluginSecret;
      Exports.setCanvasWidth = PanoEnv.wxEnv.setCanvasWidth;
      Exports.setCanvasHeight = PanoEnv.wxEnv.setCanvasHeight;
      Exports.getCanvasWidth = PanoEnv.wxEnv.getCanvasWidth;
      Exports.getCanvasHeight = PanoEnv.wxEnv.getCanvasHeight;
      Exports.hideCanvas = PanoEnv.wxEnv.hideCanvas;
      Exports.showCanvas = PanoEnv.wxEnv.showCanvas;
      Exports.enableCheckObjectsIntersect=PanoEnv.wxEnv.enableCheckObjectsIntersect;
      Exports.disableCheckObjectsIntersect=PanoEnv.wxEnv.disableCheckObjectsIntersect;
      Exports.enableAutoRotation=PanoEnv.wxEnv.enableAutoRotation;
      Exports.disableAutoRotation=PanoEnv.wxEnv.disableAutoRotation;
      Exports.modes=PanoEnv._Viewer.modes;
      if (PanoEnv.wxEnv.checkVip()) {
        Exports.initDeviceOrientation = PanoEnv.wxEnv.initDeviceOrientation;
        Exports.destroyDeviceOrientation = PanoEnv.wxEnv.destroyDeviceOrientation;
        Exports.enableEffect=PanoEnv.wxEnv.enableEffect;
        Exports.disableEffect=PanoEnv.wxEnv.disableEffect;
      } else {
        console.log("插件授权码：\nPlugin Secret:\n", PanoEnv.wxEnv.getPluginSecret());
      }

    },
    enableCheckObjectsIntersect:function(){
      PanoEnv.status.isCheckObjectsIntersect = true;
    },
    disableCheckObjectsIntersect:function(){
      PanoEnv.status.isCheckObjectsIntersect = false;
    },
    stop: function () {
      if (PanoEnv.status.inited) {
        PanoEnv._Viewer.destroy();
      }
    },
    play: function () {
      if (PanoEnv.status.inited) {
        PanoEnv._Viewer.animate();
      }
    },
    enableEffect:function(modes){
      PanoEnv._Viewer.enableEffect(modes);
    },
    disableEffect:function(){
      PanoEnv._Viewer.disableEffect();
    },
    enableAutoRotation:function(Speed){
      PanoEnv._Viewer.enableAutoRate(Speed);
    },
    disableAutoRotation:function(){
      PanoEnv._Viewer.disableAutoRate();
    },
    addLabel:function(params){
      var str=params.str;
      var callback=params.callback;
      var Canvas2d=PanoEnv._Node.Canvas2d;
      var ctx=Canvas2d.getContext("2d");
      ctx.clearRect(0, 0, Canvas2d.width, Canvas2d.height);
      if(typeof callback == "function"){
        var ImageData=callback(str,ctx);
      }else{
        ctx.fillStyle = "#000000";
        ctx.font = '50px sans-serif';
        ctx.fillText(str, 0, 50);
        var textwidth=ctx.measureText(str).width;
        var ImageData=ctx.getImageData(0, 0, textwidth, 60);
      }
      var point=PanoEnv.wxEnv.getCameraLookAt();
      var uuid=PanoEnv.wxEnv.addInfoSpot({icon: ImageData,position: { x: point._x, y: point._y,z:point._z },size:0.75});
      PanoEnv.data.LabelList.push(uuid);
      return uuid;
    },
    delLabel:function(uuid){
      PanoEnv.wxEnv.delInfoSpot(uuid);
      for(var i in PanoEnv.data.LabelList){
        var label=PanoEnv.data.LabelList[i];
        if(uuid==label){
          PanoEnv.data.LabelList.splice(i, 1);
          break;
        }
      }
    },
    hideCanvas:function(){
      if (PanoEnv.status.visible){
      PanoEnv.status.visible = false;
      PanoEnv.data.lastWidth = PanoEnv.wxEnv.getCanvasWidth();
      PanoEnv.data.lastHeight = PanoEnv.wxEnv.getCanvasHeight();
      PanoEnv.wxEnv.setCanvasWidth(1);
      PanoEnv.wxEnv.setCanvasHeight(1);
      PanoEnv.wxEnv.stop();
      }
    },
    showCanvas: function () {
      if (!PanoEnv.status.visible) {
        PanoEnv.status.visible = true;
        PanoEnv.wxEnv.setCanvasWidth(PanoEnv.data.lastWidth);
        PanoEnv.wxEnv.setCanvasHeight(PanoEnv.data.lastHeight);
        PanoEnv.wxEnv.play();
      }
    },
    getCanvasWidth: function () {
      return PanoEnv.wxEnv.data.width;
    },
    getCanvasHeight: function () {
      return PanoEnv.wxEnv.data.height;
    },
    setCanvasWidth:function(px){
      var width = px;
      PanoEnv._Viewer.renderer.setSize(width,PanoEnv.wxEnv.data.height,false);
      PanoEnv.wxEnv.setData({
        width: width,
        canvasWidth: width * PanoEnv.wxEnv.data.pixelRatio,
        canvasStyleWidth: width
      });
    },
    setCanvasHeight: function (px) {
      var height = px;
      PanoEnv._Viewer.renderer.setSize(PanoEnv.wxEnv.data.width,height,false);
      PanoEnv.wxEnv.setData({
        height: height,
        canvasHeight: height * PanoEnv.wxEnv.data.pixelRatio,
        canvasStyleHeight: height
      })
    },
    getAllPanoInfo: function () {
      var tmp = PanoEnv.data.panolist;
      var res = [];
      var idx = 0;
      for (var i in tmp) {
        res[idx] = {};
        res[idx].infospots = tmp[i].infospots;
        res[idx].name = tmp[i].name;
        res[idx].panoId = tmp[i].panoId;
        res[idx].src = tmp[i].src;
        idx++;
      }
      return res;
    },
    getPanoInfo: function () {
      var tmp = PanoEnv.data.currentPanoInfo || {};
      var res = {};
      res.infospots = PanoEnv.data.currentInfospots;
      res.name = tmp.name;
      res.panoId = tmp.panoId;
      res.src = tmp.src;
      return res;
    },
    getInfospots: function () {
      return PanoEnv.wxEnv.getPanoInfo().infospots;
    },
    delPano: function (PanoId) {
      var self = PanoEnv;
      var data = self.data;
      var panolist = data.panolist;
      for (var i in panolist) {
        if (panolist[i].panoId == PanoId||panolist[i].name == PanoId) {
          panolist.splice(i, 1);
          return true;
        }
      }
      console.warn("无法删除，无此PanoId或name对应的全景。\nCannot delete，PanoList does not have this PanoId or name.");
      return false;
    },
    addPano: function (PanoInfo) {
      var self = PanoEnv;
      var data = self.data;
      var panolist = data.panolist;
      var panoId = panolist.length;
      for (var i in panolist) {
        if (panolist[i].src == PanoInfo.src) {
          console.warn("已有包含此图片路径的全景。图片路径："+PanoInfo.src+"\nPanoList already has this src.");
          //return panolist[i].panoId;
        }
        if (panolist[i].name == PanoInfo.name) {
          console.warn("已有包含此名称的全景。名称："+PanoInfo.name+"\nPanoList already has this name.");
          return panolist[i].panoId;
        }
      }
      PanoInfo.preloaded = false;
      if ((PanoEnv.data.currentPanorama.loaded) && (Math.abs(PanoEnv.data.currentPanoInfo.panoId - panoId) == 1)) {
        PanoEnv.data.prePanorama.load(PanoInfo.src);
        PanoInfo.preloaded = true;
      }
      PanoInfo.panoId = panoId;
      if (typeof PanoInfo.lookat == "undefined") {
        PanoInfo.lookat = { x: 0.5, y: 0.5 };
      }
      if (typeof PanoInfo.infospots == "undefined") {
        PanoInfo.infospots = [];
      }
      panolist.push(PanoInfo);
      return panoId;
    },
    setCameraFov: function (val) {
      PanoEnv._Viewer.setCameraFov(val);
    },
    getCameraFov: function (val) {
      return PanoEnv._Camera.fov;
    },
    setCameraLookAt: function (obj) {
      if(typeof obj.z == "undefined"){
        var xyz = PanoEnv._Lib.px2xyz(obj.x, obj.y, 10);
      }else{
        var xyz = obj;
      }
      PanoEnv._Viewer.tweenControlCenter(new THREE.Vector3(xyz.x, xyz.y, xyz.z), typeof obj.duration != "undefined"?obj.duration:1000);
    },
    getCameraLookAt: function () {
      var mouse=new THREE.Vector2();
      mouse.x=mouse.y=0;
      return PanoEnv.wxEnv.checkObjectIntersect(mouse);
    },
    getPluginSecret: function () {
      var accountInfo = PanoEnv.data.accountInfo;
      var appId = accountInfo.miniProgram.appId;
      return { appId: appId, appSecret: app.md5(appId + "@TimeCont") };
    },
    enableTouch: function () {
      PanoEnv.status.touchEnabled = true;
    },
    disableTouch: function () {
      PanoEnv.status.touchEnabled = false;
    },
    checkVip: function () {
      var key = this.data.key;
      if (key != "") {
        var accountInfo = PanoEnv.data.accountInfo;
        var appId = accountInfo.miniProgram.appId;
        app.TCSCrypt.pwd = app.md5(appId + "@TimeCont");
        var cryptKey = app.TCSCrypt.encode(appId);
        if (cryptKey == key) {
          return true;
        }
      }
      return false;
    },
    initDeviceOrientation: function (wx) {
      var self = this;
      PanoEnv._Viewer.disableControl();
      PanoEnv._Viewer.enableControl(PanoEnv._Lib.CONTROLS.DEVICEORIENTATION);
      if (!PanoEnv.status.initedDEVICEORIENTATION) {
        PanoEnv.status.initedDEVICEORIENTATION = true;
        wx.startDeviceMotionListening({
          interval: "game",
          success() {
            PanoEnv.status.isDEVICEORIENTATION = true;
            wx.onDeviceMotionChange(PanoEnv.wxEnv.onDeviceOrientation);
            if(PanoEnv.status.isCheckObjectsIntersect){
              PanoEnv._Camera.add(PanoEnv.data.controlPoint);
            }
          }
        })
      } else {
        PanoEnv.status.isDEVICEORIENTATION = true;
      }
    },
    destroyDeviceOrientation: function (wx, callback = function () { }) {
      var self = this;
      PanoEnv.status.initedDEVICEORIENTATION = false;
      PanoEnv.status.isDEVICEORIENTATION = false;
      var point=PanoEnv.wxEnv.getCameraLookAt();
      PanoEnv._Viewer.disableControl();
      PanoEnv._Viewer.enableControl(PanoEnv._Lib.CONTROLS.ORBIT);
      typeof callback == "function" ? callback() : "";
      if(typeof wx.offDeviceMotionChange == "function"){
        wx.offDeviceMotionChange();
      }
      wx.stopDeviceMotionListening({
        success() {
          PanoEnv.wxEnv.setCameraLookAt({x:point._x,y:point._y,z:point._z,duration:0});
          PanoEnv._Camera.remove(PanoEnv.data.controlPoint);
          PanoEnv.status.isDEVICEORIENTATION = false;
          typeof callback == "function" ? callback() : "";
        }
      })
    },
    onDeviceOrientation: function (event) {
      var self = this;
      if(PanoEnv.data.system.indexOf("iOS")>=0){
        event.alpha = -event.alpha;
        event.beta = -event.beta;
      }
      if (PanoEnv.data.currentorientation == 0) {
        //event.alpha = -event.alpha;
        
      } else if (PanoEnv.data.currentorientation == 90) {
        PanoEnv.wxEnv.destroyDeviceOrientation(wx, function () { });
      }
      if(PanoEnv.status.isCheckObjectsIntersect){
        PanoEnv.wxEnv.checkObjectsIntersect();
      }
      if (PanoEnv.status.isDEVICEORIENTATION && PanoEnv._Viewer.control.id =="device-orientation") {
        for (var i in PanoEnv._Viewer.container.EventListenerList["deviceorientation"]) {
          PanoEnv._Viewer.container.EventListenerList["deviceorientation"][i](event);
        }
      }
    },
    loadPanoInfo: function (entryobj) {
      var entryobj = entryobj || {};
      var self = this;
      var data = PanoEnv.data;
      var currentPanoId = PanoEnv.wxEnv.getPanoInfo().panoId;
      var panolist = data.panolist;
      var entryname = entryobj.entryname || data.entryname;
      var entryid = entryobj.entryid || data.entryid;
      var panoInfo = null;
      if (entryname != "") {
        for (var i in panolist) {
          if (panolist[i].name == entryname) {
            if (panolist[i].panoId == currentPanoId) {
              return panolist[i];
            }
            panoInfo = panolist[i];
          }
        }
      } else {
        if (entryid == currentPanoId) {
          return PanoEnv.wxEnv.getPanoInfo();
        }
        for (var i in panolist) {
          if (panolist[i].panoId == entryid) {
            panoInfo = panolist[i];
            break;
          }
        }
      }
      if (panoInfo == null) {
        console.warn("无此全景信息。\nPanoList does not have this PanoInfo.");
        return false;
      }
      return panoInfo;
    },
    loadPanorama: function (panoInfo, type, firstload) {
      if (firstload) {
        PanoEnv.data.prePanorama = new PanoEnv._Lib.ImagePanorama(PanoEnv);
        PanoEnv.data.current2Panorama = new PanoEnv._Lib.ImagePanorama(PanoEnv);
        PanoEnv.data.current2Panorama.enabled = false;
        PanoEnv.data.current2Panorama.animationDuration = 1000;
        PanoEnv._Viewer.add(PanoEnv.data.current2Panorama);
        PanoEnv.data.currentPanorama = new PanoEnv._Lib.ImagePanorama(PanoEnv);
        PanoEnv.data.currentPanorama.enabled = true;
        PanoEnv.data.currentPanorama.animationDuration = 1000;
        PanoEnv._Viewer.add(PanoEnv.data.currentPanorama);
        PanoEnv.data.currentPanorama.load({src:panoInfo.src,type:panoInfo.type||'jpg'});
        PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId].preloaded = true;
        if (PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1] && PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].preloaded != true) {
          PanoEnv.data.prePanorama.load({src:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].src,type:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].type||'jpg'});
          PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].preloaded = true;
        }
        if (PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1] && PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].preloaded != true) {
          PanoEnv.data.prePanorama.load({src:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].src,type:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].type||'jpg'});
          PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].preloaded = true;
        }
        if (PanoEnv.data.currentPanoInfo.panoId == 0 && PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].preloaded != true) {
          PanoEnv.data.prePanorama.load({src:PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].src,type:PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].type||'jpg'});
          PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].preloaded = true;
        }
      }
      switch (type) {
        case "littleplanet":
          if (PanoEnv.data.currentPanorama instanceof PanoEnv._Lib.ImageLittlePlanet) {
            PanoEnv.data.currentPanorama.load({src:panoInfo.src,type:panoInfo.type||'jpg'});
          } else {
            PanoEnv._Viewer.remove(PanoEnv.data.currentPanorama);
            PanoEnv.data.currentPanorama = new PanoEnv._Lib.ImageLittlePlanet(PanoEnv);
            PanoEnv.data.currentPanorama.load({src:panoInfo.src,type:panoInfo.type||'jpg'});
            PanoEnv._Viewer.add(PanoEnv.data.currentPanorama);
          }
          break;
        case "normal":
        default:
          if (!(PanoEnv.data.currentPanorama instanceof PanoEnv._Lib.LittlePlanet)) {
            if (!firstload) {
              if (PanoEnv.data.currentPanorama.enabled) {
                PanoEnv.data.current2Panorama.load({src:panoInfo.src,type:panoInfo.type||'jpg'});
                PanoEnv.data.currentPanorama.onLeave();
                PanoEnv.data.currentPanorama.enabled = false;
                PanoEnv.data.currentPanorama.visible = false;
                PanoEnv.data.current2Panorama.enabled = true;
                PanoEnv.data.current2Panorama.onEnter();
              } else {
                PanoEnv.data.currentPanorama.load({src:panoInfo.src,type:panoInfo.type||'jpg'});
                PanoEnv.data.current2Panorama.onLeave();
                PanoEnv.data.current2Panorama.enabled = false;
                PanoEnv.data.current2Panorama.visible = false;
                PanoEnv.data.currentPanorama.enabled = true;
                PanoEnv.data.currentPanorama.onEnter();
              }
              if (PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1] && PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].preloaded != true) {
                PanoEnv.data.prePanorama.load({src:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].src,type:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].type||'jpg'});
                PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId + 1].preloaded = true;
              }
              if (PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1] && PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].preloaded != true) {
                PanoEnv.data.prePanorama.load({src:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].src,type:PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].type||'jpg'});
                PanoEnv.data.panolist[PanoEnv.data.currentPanoInfo.panoId - 1].preloaded = true;
              }
              if (PanoEnv.data.currentPanoInfo.panoId == 0 && PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].preloaded != true) {
                PanoEnv.data.prePanorama.load({src:PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].src,type:PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].type||'jpg'});
                PanoEnv.data.panolist[PanoEnv.data.panolist.length - 1].preloaded = true;
              }
            }
          } else {
            PanoEnv.data.currentPanorama.unregisterMouseEvents();
            PanoEnv._Viewer.remove(PanoEnv.data.currentPanorama)
            PanoEnv.data.currentPanorama = new PanoEnv._Lib.ImagePanorama(PanoEnv);
            PanoEnv.data.currentPanorama.load({src:panoInfo.src,type:panoInfo.type||'jpg'});
            PanoEnv._Viewer.add(PanoEnv.data.currentPanorama);
          }
          break;
      }
      if (typeof PanoEnv.data.currentPanoInfo.lookat == "object") {
        PanoEnv.wxEnv.setCameraLookAt(PanoEnv.data.currentPanoInfo.lookat);
      } else {
        PanoEnv.data.currentPanoInfo.lookat = { x: 0.5, y: 0.5 };
        PanoEnv.wxEnv.setCameraLookAt(PanoEnv.data.currentPanoInfo.lookat);
      }
      /*if(firstload){
        PanoEnv.status.loadingIntervalId=setInterval(function(){
        if (PanoEnv.data.currentPanorama.loaded) {
          clearInterval(PanoEnv.status.loadingIntervalId);
          PanoEnv.status.inited=true;
          console.log("全景展示平台加载完成！\nPlugin Is Ready!");
          if (typeof Exports.onReady == "function") {
            Exports.onReady();
          }
        }
      },25);
      }*/
    },
    loadInfospot: function (infospots) {
      var self = this; 
      if (!PanoEnv.data.Infospotsgroup){
        PanoEnv.data.Infospotsgroup = new THREE.Group();
        PanoEnv.data.cameraInfospotsgroup = new THREE.Group();
      }
      if (PanoEnv.data.currentInfospots && PanoEnv.data.currentInfospots.length > 0) {
        PanoEnv._Viewer.remove(PanoEnv.data.Infospotsgroup);
        for (var i in PanoEnv.data.currentInfospots) {
          PanoEnv._Viewer.remove(PanoEnv.data.currentInfospots[i]);
          PanoEnv.data.Infospotsgroup.remove(PanoEnv.data.currentInfospots[i]);
        }
        PanoEnv.data.currentInfospots=[];
      }
      if (PanoEnv.data.cameraInfospots && PanoEnv.data.cameraInfospots.length > 0) {
        PanoEnv._Camera.remove(PanoEnv.data.cameraInfospotsgroup);
        for (var i in PanoEnv.data.cameraInfospots) {
          PanoEnv.data.cameraInfospotsgroup.remove(PanoEnv.data.cameraInfospots[i]);
        }
        PanoEnv.data.cameraInfospots = [];
      }
      for (var i in infospots) {
        self.addInfoSpot(infospots[i]);
      }
      PanoEnv.data.Infospotsgroup.opacity=1;
      PanoEnv._Viewer.add(PanoEnv.data.Infospotsgroup);
      PanoEnv._Camera.add(PanoEnv.data.cameraInfospotsgroup);
    },
    addInfoSpot:function(infospot){
      var uuid=THREE.Math.generateUUID();
      infospot.enabled=true;
      switch (infospot.icon) {
        case "arrow":
          var icon = PanoEnv._Lib.DataImage.Arrow;
          break;
        case "ReticleIdle":
          var icon = PanoEnv._Lib.DataImage.ReticleIdle;
        case "info":
        case "":
          var icon = PanoEnv._Lib.DataImage.Info;
          break;
        default:
          var icon = infospot.icon;
          break;
      }
      var resinfospot = new PanoEnv._Lib.Infospot(PanoEnv, (infospot.size||1) * PanoEnv._Node.WebGLCanvas.icon.sizeRatio, icon);
      resinfospot.uuid=uuid;
      if(typeof infospot.position.z == "undefined"){
        var xyz = PanoEnv._Lib.px2xyz(infospot.position.x, infospot.position.y, 10);
      }else{
        var xyz = infospot.position;
      }
      resinfospot.position.copy(new THREE.Vector3(xyz.x, xyz.y, xyz.z));
      resinfospot.material.opacity = (typeof infospot.opacity != "undefined" ? infospot.opacity:1);
      resinfospot.material.initedopacity = resinfospot.material.opacity;
      resinfospot.infospot = infospot;
      resinfospot.infospotId = PanoEnv.data.currentInfospots.length;
      PanoEnv.data.Infospotsgroup.add(resinfospot);
      PanoEnv.data.currentInfospots.push(resinfospot);
      if (infospot.bindcamera){
        if(!infospot.bindicon){
          var bindicon=icon;
        }else{
          switch (infospot.bindicon) {
            case "arrow":
              var bindicon = PanoEnv._Lib.DataImage.Arrow;
              break;
            case "ReticleIdle":
              var bindicon = PanoEnv._Lib.DataImage.ReticleIdle;
            case "info":
            case "":
              var bindicon = PanoEnv._Lib.DataImage.Info;
              break;
            default:
              var bindicon = infospot.bindicon;
              break;
          }
        }
        var camerainfospot = new PanoEnv._Lib.Infospot(PanoEnv, (infospot.bindsize||infospot.size) * PanoEnv._Node.WebGLCanvas.icon.sizeRatio, bindicon);
        camerainfospot.uuid=uuid;
        camerainfospot.center.set(0,0);
        camerainfospot.position.set(-6 + infospot.bindposition.x*11, 9.05 - infospot.bindposition.y*19.1,-10);//up9,down-10,left-7,right5
        camerainfospot.material.opacity = infospot.bindopacity || 1;
        camerainfospot.material.initedopacity = camerainfospot.material.opacity;
        camerainfospot.infospot = resinfospot;
        camerainfospot.infospotId = PanoEnv.data.cameraInfospots.length;
        camerainfospot.bindinfospotId = resinfospot.infospotId;
        PanoEnv.data.cameraInfospotsgroup.add(camerainfospot);
        PanoEnv.data.cameraInfospots.push(camerainfospot);
      }
      return uuid;
    },
    delInfoSpot:function(uuid){
      for(var i in PanoEnv.data.Infospotsgroup.children){
        var infospot=PanoEnv.data.Infospotsgroup.children[i];
        if(uuid==infospot.uuid){
          PanoEnv.data.Infospotsgroup.remove(infospot);
          PanoEnv.data.currentInfospots.splice(i, 1);
          break;
        }
      }
      for(var i in PanoEnv.data.cameraInfospotsgroup.children){
        var infospot=PanoEnv.data.cameraInfospotsgroup.children[i];
        if(uuid==infospot.uuid){
          PanoEnv.data.cameraInfospotsgroup.remove(infospot);
          PanoEnv.data.cameraInfospots.splice(i, 1);
          break;
        }
      }
    },
    checkTouchAndObjects: function (event) {
      var self = this;
      var mouse = new THREE.Vector2();
      var ex = event.touches[0].x || event.touches[0].clientX;
      var ey = event.touches[0].y || event.touches[0].clientY;
      mouse.x = (ex / self.data.canvasStyleWidth) * 2 - 1;
      mouse.y = - (ey / self.data.canvasStyleHeight) * 2 + 1;
      PanoEnv._Raycaster.setFromCamera(mouse, PanoEnv._Camera);
      var intersects = PanoEnv._Raycaster.intersectObjects(PanoEnv.data.currentInfospots);
      if (intersects.length > 0) {
        PanoEnv.status.isTouchAndObjects=true;
        var infospot = intersects[0].object.infospot;
        this.navigateMethod(infospot);
      }
      var intersects = PanoEnv._Raycaster.intersectObjects(PanoEnv.data.cameraInfospots);
      if (intersects.length > 0) {
        PanoEnv.status.isTouchAndObjects=true;
        var infospot = intersects[0].object.infospot;
        PanoEnv.wxEnv.setCameraLookAt({x:infospot.infospot.position.x,y:infospot.infospot.position.y});
      }
    },
    getTouchPosition: function (event) {
      var self = this;
      var mouse = new THREE.Vector2();
      var ex = event.touches[0].x || event.touches[0].clientX;
      var ey = event.touches[0].y || event.touches[0].clientY;
      mouse.x = (ex / self.data.canvasStyleWidth) * 2 - 1;
      mouse.y = - (ey / self.data.canvasStyleHeight) * 2 + 1;
      return this.checkObjectIntersect(mouse);
    },
    checkObjectIntersect: function (mouse) {
      PanoEnv._Raycaster.setFromCamera(mouse, PanoEnv._Camera);
      if(PanoEnv.data.current2Panorama.visible){
        var intersects = PanoEnv._Raycaster.intersectObject(PanoEnv.data.current2Panorama);
      }else{
        var intersects = PanoEnv._Raycaster.intersectObject(PanoEnv.data.currentPanorama);
      }
      var point3=intersects[0].point;
      var point2=PanoEnv._Lib.xyz2px(point3.x,point3.y,point3.z);
      return {_x:point3.x,_y:point3.y,_z:point3.z,x:point2.x,y:point2.y};
    },
    checkObjectsIntersect: function () {
      var self = this;
      PanoEnv._Raycaster.setFromCamera({ x: 0, y: 0 }, PanoEnv._Camera);
      var intersects = PanoEnv._Raycaster.intersectObjects(PanoEnv.data.currentInfospots);
      if (intersects.length > 0) {
        if(!PanoEnv.data.controlPoint.isscale){
          PanoEnv.data.controlPoint.scale.set(0.375,0.375, 1);
          PanoEnv.data.controlPoint.material.opacity = 1;
          PanoEnv.data.controlPoint.isscale=true;
        }
        var infospot = PanoEnv.data.currentInfospots[intersects[0].object.infospotId];
        if(infospot.hoverID==null){
          infospot.hoverID=setTimeout(function(){PanoEnv.wxEnv.prenavigateMethod(infospot.infospot)},1000);
        }
      }else{
        if(PanoEnv.data.controlPoint.isscale){
          PanoEnv.data.controlPoint.scale.set(0.25,0.25, 1);
          PanoEnv.data.controlPoint.material.opacity = 0.75;
          PanoEnv.data.controlPoint.isscale=false;
        }
        for(var i in PanoEnv.data.currentInfospots){
          if(PanoEnv.data.currentInfospots[i].hoverID!=null){
            clearTimeout(PanoEnv.data.currentInfospots[i].hoverID);
            PanoEnv.data.currentInfospots[i].hoverID=null;
          }
        }
      }
    },
    prenavigateMethod:function(infospot){
      clearTimeout(infospot.hoverID);
      infospot.hoverID=null;
      PanoEnv.wxEnv.navigateMethod(infospot);
    },
    navigateMethod: function (infospot) {
      var self = this;
      if(typeof infospot.enabled!="undefined"&&!infospot.enabled){return false;}
      switch (infospot.type) {
        case "pano":
          var entryInfo = {};
          if (infospot.entryname) {
            entryInfo.entryname = infospot.entryname;
          }
          if (infospot.entryid) {
            entryInfo.entryid = infospot.entryid;
          }
          var tmpPanoInfo = PanoEnv.wxEnv.loadPanoInfo(entryInfo);
          if (tmpPanoInfo == true) { break; }
          if (tmpPanoInfo == false) { break; }
          PanoEnv.data.currentPanoInfo = tmpPanoInfo;
          if (typeof Exports.onPanoLoading == "function") {
            Exports.onPanoLoading(PanoEnv.data.currentPanoInfo);
          } else {
            wx.showLoading({
              title: '全景加载中',
            })
          }
          PanoEnv.wxEnv.loadPanorama(PanoEnv.data.currentPanoInfo);
          PanoEnv.wxEnv.loadInfospot(PanoEnv.data.currentPanoInfo.infospots);
          if (typeof Exports.onPanoChange == "function") {
            Exports.onPanoChange(PanoEnv.data.currentPanoInfo);
          }
          break;
        case "page":
          wx.showLoading({
            title: '页面加载中',
          })
          infospot.page();
          break;
        case "toast":
          wx.showToast(infospot.toast)
          break;
        case "modal":
          wx.showModal(infospot.modal)
          break;
      }
      return true;
    },
    supplementTouchEvent: function (event){
      var touches=event.touches.length!=0?event.touches:event.changedTouches;
      for (var i in touches) {
        if (!touches[i].pageX) {
          touches[i].pageX = touches[i].x;
        }
        if (!touches[i].pageY) {
          touches[i].pageY = touches[i].y;
        }
        if (!touches[i].clientX) {
          touches[i].clientX = touches[i].x;
        }
        if (!touches[i].clientY) {
          touches[i].clientY = touches[i].y;
        }
      }
      event.touches=touches;
      event.changedTouches=touches;
      return event;
    },
    getEventListener:function(){
      return PanoEnv._Viewer.container.EventListenerList;
    },
    onTouchStart: function (event) {
      if (!PanoEnv.status.touchEnabled) { return false; }
      event = PanoEnv.wxEnv.supplementTouchEvent(event);
      PanoEnv.status.isTouchStarted=true;
      if (event.touches.length < 2) {
        this.checkTouchAndObjects(event);
        var point=this.getTouchPosition(event);
      }
      for (var i in PanoEnv._Viewer.container.EventListenerList["touchstart"]) {
        PanoEnv._Viewer.container.EventListenerList["touchstart"][i](event);
      }
    },
    onTouchMove: function (event) {
      if (!PanoEnv.status.touchEnabled) { return false; }
      event = PanoEnv.wxEnv.supplementTouchEvent(event);
      PanoEnv.status.isTouchMoved=true;
      PanoEnv.status.TouchMovedCount+=1;
      for (var i in PanoEnv._Viewer.container.EventListenerList["touchmove"]) {
        typeof PanoEnv._Viewer.container.EventListenerList["touchmove"][i] == "function" ? PanoEnv._Viewer.container.EventListenerList["touchmove"][i](event) : "";
      }
    },
    onTouchEnd: function (event) {
      if (!PanoEnv.status.touchEnabled) { return false; }
      event = PanoEnv.wxEnv.supplementTouchEvent(event);
      var self = this;
      if(!PanoEnv.status.isTouchAndObjects&&(!PanoEnv.status.isTouchMoved||PanoEnv.status.TouchMovedCount<5)){
        var startopacity=(PanoEnv.data.Infospotsgroup.opacity==1)?1:0;
        var endopacity=(PanoEnv.data.Infospotsgroup.opacity==1)?0:1;
        new PanoEnv._Lib.TWEEN.Tween({opacity:startopacity})
          .to({opacity:endopacity
          }, 500)
          .easing(PanoEnv._Lib.TWEEN.Easing.Exponential.Out)
          .onUpdate(function (evt) {
            for (var i in PanoEnv.data.Infospotsgroup.children) {
              if (evt.opacity>PanoEnv.data.Infospotsgroup.children[i].material.initedopacity){
                PanoEnv.data.Infospotsgroup.children[i].material.opacity=PanoEnv.data.Infospotsgroup.children[i].material.initedopacity;
              }else{
                PanoEnv.data.Infospotsgroup.children[i].material.opacity = evt.opacity;
              }
            }
            for(var i in PanoEnv.data.cameraInfospotsgroup.children){
              if (evt.opacity>PanoEnv.data.Infospotsgroup.children[i].material.initedopacity){
                PanoEnv.data.cameraInfospotsgroup.children[i].material.opacity=PanoEnv.data.cameraInfospotsgroup.children[i].material.initedopacity;
              }else{
                PanoEnv.data.cameraInfospotsgroup.children[i].material.opacity = evt.opacity;
              }
            }
            if (evt.opacity == 0 || evt.opacity==1){
              PanoEnv.data.Infospotsgroup.opacity = evt.opacity;
              PanoEnv.data.cameraInfospotsgroup.opacity = evt.opacity;
              for(var i in PanoEnv.data.Infospotsgroup.children){
                PanoEnv.data.Infospotsgroup.children[i].infospot.enabled = !!evt.opacity;
              }
              for(var i in PanoEnv.data.cameraInfospotsgroup.children){
                PanoEnv.data.cameraInfospotsgroup.children[i].infospot.enabled = !!evt.opacity;
              }
            }
          })
          .start();
      }
      for (var i in PanoEnv._Viewer.container.EventListenerList["touchend"]) {
        PanoEnv._Viewer.container.EventListenerList["touchend"][i](event);
      }
      PanoEnv.status.isTouchStarted=false;
      PanoEnv.status.isTouchMoved=false;
      PanoEnv.status.TouchMovedCount=0;
      PanoEnv.status.isTouchAndObjects=false;
      wx.nextTick(() => {
        var tmpcam = PanoEnv._Viewer.getCamera();
        var rescam = { position: {}, rotation: {}, fov: tmpcam.fov };
        for (var i in tmpcam.position) {
          rescam.position[i] = parseFloat(tmpcam.position[i]).toFixed(2);
        }
        for (var i in tmpcam.rotation) {
          rescam.rotation[i] = parseFloat(tmpcam.rotation[i]).toFixed(2);
        }
        self.setData({ camera: rescam });
      });
    },
    onResize(event) {
      var self = this;
      for (var i in PanoEnv._Viewer.container.EventListenerList["resize"]) {
        PanoEnv._Viewer.container.EventListenerList["resize"][i](event);
      }
      switch (event.deviceOrientation) {
        case "landscape":
          PanoEnv._Viewer.enableControl(PanoEnv._Lib.CONTROLS.ORBIT);
          PanoEnv._Viewer.enableEffect(PanoEnv._Lib.Modes.CARDBOARD);
          PanoEnv.data.currentorientation = 90;
          self.destroyDeviceOrientation(wx);
          break;
        case "portrait":
          PanoEnv._Viewer.enableControl(PanoEnv._Lib.CONTROLS.DEVICEORIENTATION);
          PanoEnv._Viewer.disableEffect();
          PanoEnv.data.currentorientation = 0;
          self.initDeviceOrientation();
          break;
      }
      for (var i in PanoEnv._Viewer.container.EventListenerList["orientationchange"]) {
        PanoEnv._Viewer.container.EventListenerList["orientationchange"][i](PanoEnv.data.currentorientation);
      }
      this.setData({
        canvasWidth: PanoEnv._Viewer.container._width * app.SystemInfo.pixelRatio,
        canvasHeight: PanoEnv._Viewer.container._height * app.SystemInfo.pixelRatio,
        canvasStyleWidth: PanoEnv._Viewer.container._width + "px",
        canvasStyleHeight: PanoEnv._Viewer.container._height + "px",
        currentorientation: PanoEnv.data.currentorientation
      });
    }
  }
})