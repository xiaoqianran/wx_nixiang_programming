var e, t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
    a = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
    n = require("../../public/indexdata"),
    c = require("../../../../helper/page_helper"),
    i = getApp();

Page({
    data: {
        rootScenicId: 0,
        mapCmpt: [0]
    },
    onLoad: function(e) {
        var c = this;
        return a(t().mark((function a() {
            var r;
            return t().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (null != i.indexData) {
                            t.next = 3;
                            break;
                        }
                        return t.next = 3, (0, n.initIndexData)(c.data.rootScenicId, !0);
                    case 3:
                        e.rootScenicId ? (console.log("get rootScenicId value: " + e.rootScenicId), r = e.rootScenicId, c.setData({
                            rootScenicId: r
                        })) : c.setData({
                            rootScenicId: i.indexData.sid
                        });
                    case 4:
                    case "end":
                        return t.stop()
                }
            }), a)
        })))()
    },
    onShow: (e = a(t().mark((function e() {
        return t().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    i.globalData.changeRootScenic.samap && (i.globalData.changeRootScenic.samap = !1, console.log("samap: from ".concat(this.data.rootScenicId, " to ").concat(i.globalData.changeRootScenic.sid)), this.setData({
                        mapCmpt: [this.data.mapCmpt[0] + 1],
                        rootScenicId: i.globalData.changeRootScenic.sid
                    }));
                case 1:
                case "end":
                    return e.stop()
            }
        }), e, this)
    }))), function() {
        return e.apply(this, arguments)
    }),
    onReady: function() {},
    onUnload: function() {},
    changeScenic: function(e) {
        this.pageRouter.navigateTo({
            url: "/pages/index/index?rootScenicId=" + e.detail.scenicId + "&ntype=change"
        })
    },
    redirectScenic: function(e) {
        if ("" + this.data.rootScenicId != "" + e.detail.scenicId)
            if (i.indexData && "" + i.indexData.sid == "" + e.detail.scenicId) {
                var t = getCurrentPages();
                wx.navigateBack({
                    delta: t.length
                })
            } else {
                var a = this,
                    n = getCurrentPages();
                1 == n.length ? a.pageRouter.redirectTo({
                    url: c.getCurrentPageURL() + "?rootScenicId=" + e.detail.scenicId + "&ntype=change"
                }) : wx.navigateBack({
                    delta: n.length - 2,
                    success: function() {
                        a.pageRouter.redirectTo({
                            url: c.getCurrentPageURL() + "?rootScenicId=" + e.detail.scenicId + "&ntype=redirect"
                        })
                    }
                })
            }
    },
    updateBarTitle: function(e) {
        wx.setNavigationBarTitle({
            title: e.detail.scenicName
        }), this.data.scenicName = e.detail.scenicName
    },
    onShareAppMessage: function() {}
});