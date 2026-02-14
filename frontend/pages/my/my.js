// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg: "",
    username: "",
    list: [{
      text: "订单",
      src: "../images/my/订单.png"
    }, {
      text: "退出",
      src: "../images/my/退出.png"
    }]
  },
  getfunction: function (e) {
    let op = e.mark.now;
    if (op == 0) {

      wx.switchTab({
        url: '/pages/orders/orders',
      })
    }else if(op==1){
     wx.clearStorage("user");
     this.setData({
      userImg:""
     })
    }
    },
  userQuery(code){
    let that=this
    wx.request({
      url: 'http://127.0.0.1:8080/userQuery?openid='+code,
      success(res){
        // console.log(res);
        res.data.userImg="http://127.0.0.1:8080/upload/"+res.data.userImg
        wx.setStorage({
          key:"user",
          data:res.data
        })
        that.setData({
          userImg:res.data.userImg,
          username:res.data.username
        })
      }
    })
  },
  wxLogin(){

    let that=this
    wx.login({
      success (res) {
        if (res.code) {
          // console.log(res);
          wx.request({
            url: 'http://127.0.0.1:8080/wxLogin?code='+res.code,
            success(result){
              // console.log(result);
              let state=result.data.state
              if(state=="unregistered"){
                wx.navigateTo({
                  url: '/pages/register/register?openid='+result.data.openid,
                })
              }else if(state=="false"){
                wx.showToast({
                  title: '服务器出错！请稍后再试',
                })
              }else{//存在账户进行查询登录
                that.userQuery(result.data.openid);
              }
            }
          })
        } 
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let res=wx.getStorageSync('user');
    if(Object.keys(res).length > 0){
      this.setData({
        userImg:res.userImg,
        username:res.username
      })
    }
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