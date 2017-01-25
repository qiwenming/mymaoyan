// pages/login/login.js
Page({
  data:{
    tabIndex:1,
    threeLogins:[
      {text:'微信',url:'../../image/wechat.png'}
    ]
  },
  onLoad:function(options){
  },
  swithTab:function(e){
    var index = e.currentTarget.dataset['index'];
    this.setData({
      tabIndex:index
    })
  }
})