// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 1、轮播图
    imgUrls: [
      'https://www.nynu.edu.cn/__local/C/2E/59/CA60ADB8FE47BA9875D19A79EA2_706A6454_2A872.jpg',
      'https://www.nynu.edu.cn/__local/F/55/9A/8864CB08DE5921AEB74EFF4EF4B_579EDB69_28D14.jpg',
      'https://www.nynu.edu.cn/__local/F/68/85/6CF286B8F7E13F7F588D93D8868_97843FEA_1DFD0.jpg',
      'https://www.nynu.edu.cn/__local/0/B8/99/68C45658BDFEF213525B8917458_C3273DB0_1DD40.jpg'
    ],
    // 2、活动通知
    eventInfo: [
      {
        index: 4,
        icon: 'icon-party',
        department: '#文艺部通知#',
        title: '“音梦而声 心随乐动”校园歌手大赛……',
        publishDate: '2022-09-31',
        publishTime: '11:45',
        iconStatus: 0
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
    ],
    ///3、头部导航栏
    navBarBackgroundColor: '#f5f5f5',
    navigationBarHeight: '', // 存储状态栏和导航栏的总高度
    paddingTop: '',
    ///4、公告栏
    noticeMsg: '欢迎来到南阳师范学院量化查询小程序！！',
    schoolPic: '/images/badge.png',

    // 用户微信基本信息
    nickName: '',
    avatarUrl: ''
  },

  // 获取navigateTop子组件传来的数据
  getNavigationBarHeight(e) {
    this.setData({
      navigationBarHeight: e.detail.value
    })
  },

  loginFn() {
    // console.log(this)
    wx.getUserProfile({
      desc: '登录前获取用户信息',
      success: (res) => {
        // console.log(res.userInfo)
        this.setData({
          // 存储用户信息
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })

        wx.navigateTo({
          url: `/pages/login/login?nickName=${this.data.nickName}&avatarUrl=${this.data.avatarUrl}`
        })
      },
      fail: (res) => {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
      paddingTop: this.data.navigationBarHeight
    })
  },

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
