// pages/mine/mine.js
Page({
  data:{
    items:[
      [
        {title:'我的订单'},
        {title:'优惠券'},
        {title:'影院会员卡'}
      ],
      [
         {title:'想看的电影'},
         {title:'看过的电影'}
      ]
    ],
    height:0
  },
  onLoad:function(options){
    var that = this;
      wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height:res.windowHeight
        })
      }
    })
  },
  callPhone:function(e){
    var phone = e.currentTarget.dataset['phone'];
    wx.makePhoneCall({
      phoneNumber:phone
    })
  },
  smallItemClick:function(e){
    var item = e.currentTarget.dataset['item'];
    wx.navigateTo({
      url:'../login/login'
    })
  }
})