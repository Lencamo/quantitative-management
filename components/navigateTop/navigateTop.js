// components/navigateTop.js
Component({
  pageLifetimes: {
    show: function () {
      this.getNavigationBarHeight()

      this.triggerEvent('getNavigationBarHeight', { value: this.properties.navigationBarHeight })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    navBarBackgroundColor: String,
    navigationBarHeight: String //总高度
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: '', //状态栏高度
    navBarHeight: '' //导航栏高度
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNavigationBarHeight() {
      // 获取状态栏高度
      const { statusBarHeight } = wx.getSystemInfoSync()

      // 得到右上角菜单的位置尺寸
      const menuButtonObject = wx.getMenuButtonBoundingClientRect()
      const { top, height } = menuButtonObject

      // 计算导航栏的高度
      // 此高度基于右上角菜单在导航栏位置垂直居中计算得到
      const navBarHeight = height + (top - statusBarHeight) * 2

      // 计算状态栏与导航栏的总高度
      const statusNavBarHeight = statusBarHeight + navBarHeight

      // 注意改变data的方式
      // this.navigationBarHeight = statusNavBarHeight + 'px' 错误
      this.setData({
        statusBarHeight: statusBarHeight + 'px',
        navBarHeight: navBarHeight + 'px',
        navigationBarHeight: statusNavBarHeight + 'px'
      })

      // console.log(statusBarHeight)
    }
  }
})
