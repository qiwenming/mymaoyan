// pages/movie/cmt/cmt.js

var app = getApp();
Page({
  data:{
  	movieId:0,
  	hasNext:true,
  	loading:false,
  	hcmts:[],
  	offset:0,
  	limit:10,
  	total:0,
  	scrollHeight:0
  },
  onLoad:function(options){
     var movieId = options['movieId'];
      var that = this;
      app.showLoading();
     this.setData({
     	movieId:movieId
     });
     this.requestHTTP();
      wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight:res.windowHeight
        })
      }
    })
  },

   requestHTTP:function(){
  	var that = this;
  	that.setData({loading:true})
  	wx.showNavigationBarLoading();
    wx.request({
      url: app.globalData.commentsUrl,
      data: {
      	movieid:that.data.movieId,
        offset:that.data.offset,
        limit:that.data.limit
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        let hcmts = that.data.hcmts;
        hcmts = hcmts.concat(res.data.data.CommentResponseModel.cmts);
        that.setData({
        	hasNext:res.data.data.hasNext,
        	offset:that.data.offset+that.data.limit,
        	total:res.data.data.CommentResponseModel.total,
        	hcmts:hcmts
        })
      },
      complete: function() {
          that.setData({loading:false})
          wx.hideNavigationBarLoading();
          wx.hideToast();
      }
    })
},

  scrolltolower:function(){
    this.setData({loading:true});
  	if(this.data.hasNext){
  		this.requestHTTP();
  	}
  }
})