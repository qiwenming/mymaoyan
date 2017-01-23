// pages/movie/detail/detail.js
var app = getApp();
Page({
  data:{
    movieId:0,
    isPreSale:true,
    movieDetail:{},
    hideText:true,
    btnClass:'btnDown',
    hcmts:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var movieId = options['movieId'];
    var isPreSale = options['isPreSale'];
    this.setData({
      movieId:movieId,
      isPreSale:isPreSale
    })
    this.loadDetail(movieId);
  },
  loadDetail:function(movieId){
    var that = this;
    wx.request({
      url: app.globalData.movieDetialUrl.replace('qwm',movieId),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        console.log(res);
        var dra = res.data.data.MovieDetailModel.dra;
        res.data.data.MovieDetailModel.dra = dra.replace('<p>','').replace('</p>','')
        that.setData({
          movieDetail:res.data.data.MovieDetailModel,
          hcmts:res.data.data.CommentResponseModel.hcmts
        })
      }
    })
  },
  hiddeBtn:function(){
    var hidClass = this.data.btnClass=='btnDown'?'btnUp':'btnDown';
    var hidText = !this.data.hideText;
    this.setData({
      btnClass:hidClass,
      hideText:hidText
    })
  }
})