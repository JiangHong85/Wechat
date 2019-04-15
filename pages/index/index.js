//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hi,',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  goDynamic: function () {
    wx.navigateTo({
      url: '../dynamic/dynamic'
    })
  },
  goTest: function () {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  goMap: function () {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  goDiscount: function () {
    wx.navigateTo({
      url: '../discount/discount'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //个人类型与海外类型的小程序暂不支持使用web-view组件。
  goH5() {
    wx.navigateTo({
      url: '../outer/outer'
    })
  },
  // 点击“扫码”的按钮，触发tapScan回调

  tapScan: function () {
    var _this = this;
    wx.scanCode({
      success: function (res) {
        var scanType = res.scanType; // 扫码类型
        var result = res.result; // 扫码结果
        var path = res.path; //路径
        var charSet = res.charSet;//字符集
        var errMsg = 
        _this.setData({
          result: result,
          scanType: scanType,
          charSet: charSet,
          //path: path
        });

        console.log("scanType:"+scanType);
        console.log("result:"+result);
        console.log("path:"+path);
        console.log("charSet:" + charSet);
      }

    })

  },
  showContent() {
    wx.showToast({

    title: '功能暂未开放',

    icon: 'none',

    duration: 1000//持续的时间

  })
  }

})
