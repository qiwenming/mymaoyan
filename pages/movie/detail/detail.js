// pages/movie/detail/detail.js
var app = getApp();
Page({
  data:{
    movieId:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var movieId = options['movieId'];
    this.setData({
      movieId:movieId
    })
    this.loadDetail(movieId);
  },
  loadDetail:function(movieId){
    wx.request({
      url: app.globalData.movieDetialUrl.replace('qwm',movieId),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        console.log(res);
      }
    })
  }
})