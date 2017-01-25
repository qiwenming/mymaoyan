//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    
    movieListUrl:'http://m.maoyan.com/movie/list.json',
    movieDetialUrl:'http://m.maoyan.com/movie/qwm.json',
    commentsUrl:'http://m.maoyan.com/comments.json',
    cinemaListUrl:'http://m.maoyan.com/cinemas.json',
    cinemaDetialUrl:'http://m.maoyan.com/showtime/wrap.json',
    seatsUrl:'http://m.maoyan.com/show/seats',

    tempMovieId:undefined

  },
  showLoading:function(){
    wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 10000
    })
  }
})