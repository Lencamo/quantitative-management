// components/noticeBar/noticeBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    schoolPic: String,
    noticeMsg: String,

    textSize: {
      type: Number,
      value: 12 // 单位 rpx
    },
    marqueePace: {
      // 滚动速度
      type: Number,
      value: 1
    },
    marqueeMargin: {
      //滚动条每次出现时距离左边位置，默认屏幕宽度
      type: Number,
      value: 100
    },
    swiperWidth: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    marqueeDistance: 50, //初始滚动距离
    timer: '' // 定时器
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      const { noticeMsg, textSize } = this.data
      const textLength = noticeMsg.length * textSize
      // const { windowWidth }  = wx.getSystemInfoSync()
      // this.setData({ textLength, windowWidth });
      this.setData({ textLength })
      this.scrollTxt()
    },
    scrollTxt() {
      let { textLength, swiperWidth, timer, marqueeMargin, marqueePace } = this.data
      if (textLength > swiperWidth) {
        timer = setInterval(() => {
          const maxScrollWidth = textLength + marqueeMargin
          const left = this.data.marqueeDistance
          if (left < maxScrollWidth) {
            this.setData({ marqueeDistance: left + marqueePace })
          } else {
            this.setData({ marqueeDistance: 0 })
            clearInterval(timer)
            this.scrollTxt()
          }
        }, 20)
      } else {
        this.setData({ marqueeMargin: '1000' })
      }
      this.setData({ timer })
    }
  },
  pageLifetimes: {
    show() {
      this.init()
    },
    hide() {
      clearInterval(this.data.timer)
    }
  }
})
