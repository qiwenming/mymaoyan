// pages/cinema/cinema.js
var app = getApp();
Page({
  data:{
    requestObj:{
      cityId:10,
      limit:10,
      offset:0
    },
    cinemaData:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadCinema();
  },
  loadCinema:function(){
    var that = this;
    wx.request({
      url: app.globalData.cinemaListUrl,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT // 设置请求的 header
      success: function(res){
        console.log(res);
        var keys = that.matchZcItem(res);
        for(var i=0;i<keys.length;i++){
          var key = keys[i];
          key = key.replace(/[\"|(:\[)]/g,"");
          //获取对应的值值
          var itemObj = {area:key,data:res.data.data[key]};
          that.globalData.tempCinemas.push(itemObj);
        }
        that.setData({
          cinemaData:that.globalData.tempCinemas
        })
      }
    })
  },
  //获取中文的键
  matchZcItem:function(resData){
    var regex = /\"[\u4e00-\u9fa5]+":\[/g;
    resData = JSON.stringify(resData);  
    return resData.match(regex);
  },
   globalData:{
    tempCinemas:[]
  }
})