// pages/listTerm/listTerm.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 2、活动通知
    eventInfo: [
      {
        index: 8,
        icon: 'icon-party',
        department: '#文艺部通知#',
        title: '“音梦而声 心随乐动”校园歌手大赛……',
        publishDate: '2022-09-31',
        publishTime: '11:45',
        iconStatus: 0
      },
      {
        index: 7,
        icon: 'icon-huodong',
        department: '#志愿服务部通知#',
        title: '暑假“返家乡”社会实践活动……',
        publishDate: '2022-09-29',
        publishTime: '15:33',
        iconStatus: 0
      },
      {
        index: 6,
        icon: 'icon-banzuhuodong',
        department: '#勤工部通知#',
        title: '奖助评议小组评定……',
        publishDate: '2022-09-23',
        publishTime: '13:26',
        iconStatus: 1
      },
      {
        index: 5,
        icon: 'icon-huwaihuodong',
        department: '#志愿服务部通知#',
        title: '2022年迎新志愿者招募……',
        publishDate: '2022-09-23',
        publishTime: '9:56',
        iconStatus: 1
      },
      {
        index: 4,
        icon: 'icon-party',
        department: '#文艺部通知#',
        title: '“音梦而声 心随乐动”校园歌手大赛……',
        publishDate: '2022-09-31',
        publishTime: '11:45',
        iconStatus: 1
      },
      {
        index: 3,
        icon: 'icon-huodong',
        department: '#志愿服务部通知#',
        title: '暑假“返家乡”社会实践活动……',
        publishDate: '2022-09-29',
        publishTime: '15:33',
        iconStatus: 1
      },
      {
        index: 2,
        icon: 'icon-banzuhuodong',
        department: '#勤工部通知#',
        title: '奖助评议小组评定……',
        publishDate: '2022-09-23',
        publishTime: '13:26',
        iconStatus: 1
      },
      {
        index: 1,
        icon: 'icon-huwaihuodong',
        department: '#志愿服务部通知#',
        title: '2022年迎新志愿者招募……',
        publishDate: '2022-09-23',
        publishTime: '9:56',
        iconStatus: 1
      }
    ]
  },

  // 活动内容跳转
  eventJump() {
    wx.navigateTo({
      url: '/pages/eventMsg/eventMsg'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
})
