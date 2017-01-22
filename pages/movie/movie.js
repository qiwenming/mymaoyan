// pages/movie/movie.js
var app = getApp();
Page({
  data:{
    movies:[],
    offset: 0,
    limit: 10,
    loading: false,
    scrollHeight:0
  },
  onLoad:function(options){
    console.log(app.globalData.movieListUrl);
    this.loadMovie();
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight:res.windowHeight
        })
      }
    })
  },
  loadMovie:function(){
    var that =this;
    this.setData({loading:true})
    wx.showNavigationBarLoading();
    wx.request({
      url: app.globalData.movieListUrl,
      data: {
        type:'movies',
        offset:that.data.offset,
        limit:that.data.limit
      },
      method: 'GET',
      success: function(res){
        console.log(res);
        let movies = that.data.movies;
        movies = movies.concat(res.data.data.movies);
        that.setData({
          movies:movies,
          offset:that.data.offset+that.data.limit
        })
      },
      complete: function() {
          that.setData({loading:false})
          wx.hideNavigationBarLoading();
      }
    })
  },
  is2dImax:function(str){
    str = str.toLowerCase();
    return (str.indexOf('2d') && str.indexOf('imax') );
  },
  //上拉加载
  scrolltolower:function(){
    this.setData({loading:true});
    this.loadMovie();
  }
})