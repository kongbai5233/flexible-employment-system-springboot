// pages/spaces/spaces.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:0,
    imgbg:"../images/spaces/spacebg.png"
  },
  gotoLogin(){
    wx.switchTab({
      url: '/pages/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 
    wx.request({
      url: 'http://127.0.0.1:8080/article/getArticle',
      success:res=>{
        this.setData({
          article:res.data
        })
      }
    })

  },
  ChangeBg(){
    wx.chooseMedia({
      count: 1,
      mediaType:['image'],
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: result => {
        console.log(result);
      
        let res=result.tempFiles[0].tempFilePath;
        this.setData({
          imgbg:res
        })
      }
    })
  },
  goTodetail(e){

    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.dataset.id,
    })
  },
  goToWrite(){
    wx.showToast({
      title: '懒，不想搞了！',
      icon:"loading"
    })
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
    let kk=wx.getStorageSync('user');
    if(Object.keys(kk).length > 0){
      this.setData({
        openid:kk.openid,
        isLogin:1,
        userImg:kk.userImg
      })
    }else{
      this.setData({
        isLogin:0,
      })
    }
    console.log(this.data);
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