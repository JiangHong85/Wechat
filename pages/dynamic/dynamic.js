Page({
  data: {
    date: '2019-04-01'
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
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