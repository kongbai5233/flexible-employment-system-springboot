// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
      theArticle: null,  // 文章内容
      isAdd: false,  // 是否已收藏

  },
  addFavorites: function () {
    let article = this.data.theArticle;
    let key = this.data.theArticle.id + "_love";  // 使用文章的 id 作为 key
    wx.setStorageSync(key, "1");  // 存储到本地缓存
    this.setData({
      isAdd: true  // 更新收藏状态
    });
  },

  // 取消收藏
  cancelFavorites: function () {
    let article = this.data.theArticle;
    let key = article.id + "_love";
    wx.removeStorageSync(key);  // 从本地缓存删除
    this.setData({
      isAdd: false  // 更新收藏状态
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options.id);
    wx.request({
      url: 'http://127.0.0.1:8080/article/getthisarticle?id=' + options.id,
      success: res => {
        // console.log(res); 
        if (res.data) {
       
          this.setData({
            theArticle: res.data 
          });
       
          let key = res.data.id + "_love";
          if (wx.getStorageSync(key)) {
            this.setData({
              isAdd: true  
            });
          }
        }
      },
      fail: err => {
        console.error('获取文章失败：', err);
      }
    });
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