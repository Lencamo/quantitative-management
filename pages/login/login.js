// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 用户基本信息（页面跳转而来）
    avatarUrl: '',
    nickName: '南阳师范学院',

    // 密码输入框显示
    eyOpen: false,
    focus: false,
    eyeClass: 'icon-xianshikejian'
  },

  // 密码的显示与隐藏
  switch() {
    if (this.data.eyOpen) {
      this.setData({
        eyeClass: 'icon-xianshikejian'
      })
    } else {
      this.setData({
        eyeClass: 'icon-yincangbukejian'
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options)
    // 存储获取用户的基本信息
    this.setData({
      avatarUrl: options.avatarUrl,
      nickName: options.nickName
    })
  },

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
