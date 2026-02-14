// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:[],
    isLogin:0
  },
  check(e){
    // console.log(e);
    let orderid=e.currentTarget.dataset.orderid
    let staffid=e.currentTarget.dataset.staffid
    wx.navigateTo({
      url: '/pages/alerthiring/alerthiring?alert=0&orderId='+orderid+"&staffid="+staffid,
    })
  },
  alertOrder(e){
    // console.log(e);
    let orderid=e.currentTarget.dataset.orderid
    let staffid=e.currentTarget.dataset.staffid
    wx.navigateTo({
      url: '/pages/alerthiring/alerthiring?alert=1&orderId='+orderid+"&staffid="+staffid,
    })
  }
  ,
  deleteOrder(e){
    let that=this
  // console.log(e);
  let orderid=e.currentTarget.dataset.orderid
  let openid=this.data.openid
console.log('http://127.0.0.1:8080/order/deleteOrder?orderId='+orderid);
  wx.request({
    url: 'http://127.0.0.1:8080/order/deleteOrder?orderId='+orderid,
    success(res){
      console.log(res);
      if(res.data.state=="true"){
        wx.showToast({
          title: '删除成功',
          duration:"2000"
        })
        setTimeout(() => {
          that.onShow();
        }, 2000);
      }
    }
  })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let that=this
    let kk=wx.getStorageSync('user');
    if(Object.keys(kk).length > 0){
      this.setData({
        openid:kk.openid,
        isLogin:1
      })
 wx.request({
  url: 'http://127.0.0.1:8080/order/getorders?openid='+this.data.openid,
  success:res=>{
   //  console.log(res);
  this.setData({
   orders:res.data
  })
  }
    })
    }else{
  
      wx.showModal({
        title: '请先登录！！',
        success(res){  
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/my/my',
            })
          } else if (res.cancel) {

            that.setData({
              orders: [],  // 清空订单数据
              isLogin: 0   // 确保未登录
            });
        }
      }
      })
    
    }

   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})