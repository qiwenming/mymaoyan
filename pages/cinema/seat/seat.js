// pages/cinema/seat/seat.js
var app = getApp();
Page({
  data:{
    showId:0,
    showDate:'',
    seatData:{},
    seats:[]
  },
  onLoad:function(options){
    var showId = options['showId'];
    var showDate = options['showDate'];
    this.setData({
      showId:showId,
      showDate:showDate
    })
     app.showLoading();
    this.requestSeat();
  },

  requestSeat:function(){
    var that =this;
    // var url = app.globalData.seatsUrl+"?showDate="+this.data.showDate+"&showId="+this.data.showId;
    // console.log(url);
    wx.showNavigationBarLoading();
    wx.request({
      // url:url,
      url:app.globalData.seatsUrl,
      data:{
        showId:that.data.showId,
        showDate:that.data.showDate
      },
      success:function(res){
        that.setData({
          seatData:res.data,
          seats:res.data.sections
        })
        wx.setNavigationBarTitle({
          title: res.data.showInfo.movieName
        })
      },
      complete:function(){
        wx.hideNavigationBarLoading();
        wx.hideToast();
      }
    })
  },
  selectSeat:function(e){
     var seat = e.currentTarget.dataset['seat'];
     if(seat.type=="N"){//可选的 那么已选
       seat.type="SELECTED";
     }else if(seat.type=="SELECTED"){//已选择的，改为可选
      seat.type="N";
     }else{return;}
     var seats = this.data.seats;
     seats[0].seatRows[seat.rowNum-1].seats[seat.columnNum] = seat;
     this.setData({
      seats:seats
     })
  }
})