// pages/modifyPwd/modifyPwd.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 密码输入框显示
    eyOpen: false,
    focus: false,
    eyeClass: 'icon-yincangbukejian'
  },

  // 密码的显示与隐藏
  switch() {
    if (this.data.eyOpen) {
      this.setData({
        eyeClass: 'icon-yincangbukejian'
      })
    } else {
      this.setData({
        eyeClass: 'icon-xianshikejian'
      })
    }
    this.setData({
      eyOpen: !this.data.eyOpen
    })
  },
  pwdInputFocusFn() {
    this.setData({
      focus: true
    })
  },
  pwdInputBlurFn() {
    this.setData({
      focus: false
    })
  },

  modifyJump() {
    wx.navigateTo({
      url: '/pages/home/home'
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
