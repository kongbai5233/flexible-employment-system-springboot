// pages/register/register.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    avatarName:"",
    openid:""
  },
  onChooseAvatar(e) {
    // console.log(e);
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  }
  ,
  getUserName(e){
    // console.log(e.detail.value);
    this.setData({
      avatarName:e.detail.value
    })
  },
  register(){
    let that=this
    // console.log(this.data.avatarName);
    if(this.data.avatarName==""){
      wx.showToast({
        title: '名称不能为空！',
      })
    }else{
      
      wx.uploadFile({
        url: 'http://127.0.0.1:8080/api/upload', 
        filePath: that.data.avatarUrl, 
        name: 'file', 
        header: {
          'Content-Type': 'multipart/form-data', 
        },
        success(ress) {
          const parsedData = JSON.parse(ress.data);
            if(parsedData.state=="200"){
              wx.request({
                url: 'http://127.0.0.1:8080/register?name='+that.data.avatarName+"&img="+parsedData.fileName+"&openid="+that.data.openid,
                success(res){
                  console.log(res);
                  if(res.data!=""){
                    let date=res.data;
                    date.userImg="http://127.0.0.1:8080/upload/"+ date.userImg;
                    wx.setStorage({
                      key:"user",
                      data:res.data
                    })
                    wx.showToast({
                      title: '注册成功！！',
                    })
                    wx.switchTab({
                      url:"/pages/my/my"
                    })
                  }else{
                    wx.showToast({
                      title: '注册失败！！',
                    })
                  }
                }
              })
            }
        }
      });
    
      

    }
   
    
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options);
    this.setData({
      openid:options.openid
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