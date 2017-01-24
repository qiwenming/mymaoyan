// pages/cinema/detail/detail.js
var app = getApp();
Page({
  data:{
    cinemaData:{},
    movieId:0,
    cinemaId:0,
    curDate:{},
    curCcs:[]
  },
  onLoad:function(options){
    var movieId = options['movieId'];
    var cinemaId = options['cinemaId'];
    this.setData({
      movieId:movieId,
      cinemaId:cinemaId
    })
    this.requestCinema();
  },
  requestCinema:function(){
    var that = this;
    var url = app.globalData.cinemaDetialUrl;
    if(this.data.movieId!=='undefined'){
      url+="?movieid="+this.data.movieId;
    }
    wx.showNavigationBarLoading();
    wx.request({
      url:url,
      data:{
        cinemaid:that.data.cinemaId,
      },
      method:'GET',
      success:function(res){
        that.setData({
          cinemaData:res.data.data
        });
        if(res.data.data.Dates.length>0){
           that.setData({
             curDate:res.data.data.Dates[0].slug,
             curCcs:res.data.data.DateShow[res.data.data.Dates[0].slug]
          })
        }
        console.log(res);
      },
      complete:function(){
        wx.hideNavigationBarLoading();
      }
    })
  },
  clickDate:function(e){
    console.log(e);
    var that = this;
    var date = e.currentTarget.dataset['date'];
    this.setData({
      curDate:date.slug,
      curCcs:that.data.cinemaData.DateShow[date.slug]
    })
  }
})