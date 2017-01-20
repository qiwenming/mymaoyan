// pages/movie/movie.js
var app = getApp();
Page({
  data:{
    movies:[],
    offset: 0,
    limit: 10,
    loading: false,
  },
  onLoad:function(options){
    console.log(app.globalData.movieListUrl);
    this.loadMovie();
  },
  loadMovie:function(){
    var that =this;
    this.setData({loading:true})
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
          this.setData({loading:false})
      }
    })
  },
  is2dImax:function(str){
    str = str.toLowerCase();
    return (str.indexOf('2d') && str.indexOf('imax') );
  }
})