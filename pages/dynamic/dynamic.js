Page({
  data: {
    date: '2019-04-08',
    hasInfo:false
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  queryContent() {
    this.setData({
      hasinfo: true
    })
  },
  clearContent() {
    this.setData({
      hasinfo: false
    })
  }
})