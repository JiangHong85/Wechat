Page({
data: {
  list: [
    {
      id: 'form',
      name: '国内',
      open: false,
      pages: ['成都出发', '北京出发', '上海出发']
    }, {
      id: 'form2',
      name: '国际',
      open: false,
      pages: ['成都出发', '北京出发', '上海出发']
    }]
},
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
