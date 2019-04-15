Page({
  /** * 页面的初始数据 */ 
  data: { 
    list: '',
    word: '', 
    message: '' 
    }, 
  houduanButton1: function () {
    var that = this; 
    wx.request({ 
      //需要勾选开发工具-详情-不校验合法域名... 勾选框
      url: 'http://127.0.0.1:8095/logInfo/getUser', 
      method: 'GET', 
      header: { 
        'content-type': 'application/json' // 默认值 
      }, success: function (res) { 
       console.log(res.data)//打印到控制台 
       var list = res.data.list; 
       if (list == null) { 
         var toastText = '数据获取失败'; 
         wx.showToast({ 
           title: toastText, 
           icon: '', 
           duration: 2000 
           }); } 
         else { 
           that.setData({ 
             list: list 
             })
        }
      }
    })
  },
  //获取输入框的内容 
houduanTab_input: function (e) { 
  this.setData({ word: e.detail.value 
  }) }, 
  // houduanButton2的网络请求 
  houduanButton2: function () { 
    var that = this; 
    wx.request({
      url: 'http://127.0.0.1:8095/logInfo/getWord', 
      data:{ word: that.data.word }, 
      method: 'GET', 
      header: { 'content-type': 'application/json' // 默认值 
    }, success: function (res) { 
      console.log(res.data)//打印到控制台 
      var message = res.data.message; 
      if (message == null) { 
        var toastText = '数据获取失败'; 
        wx.showToast({ 
          title: toastText, 
          icon: '', 
          duration: 2000 
          }); 
      } else { 
            that.setData({ message: message }) 
      } 
    } 
    }) 
    }
})