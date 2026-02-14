// pages/hired/hired.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //   town:[
  //       {
  //         "townName":"后龙镇",
  //       "img0":"../images/hired/hou0.png",
  //       "img1":"../images/hired/hou1.png",
  //       "area":["全部","后龙村","坑仔底村","许厝村","后田村","上西村","东山村","峰前村"],
  //       "Merchant":[{
  //           head:"../images/hired/3.png",
  //           name:"孙浩",
  //           sex:"../images/hired/sex.png",
  //           age:"32岁",
  //           manager:"月嫂",
  //           money:"60元/小时",
  //           xing:"../images/hired/xing2.png",
  //           asess:"3.0"
  //         }]
  // ]
    town:[],
    area:[],
    Merchant:[],
    selectTown:0,
    selectVillage:0,

  },
  returnback(){
  wx.switchTab({
    url: '/pages/index/index'
  })

  },
  toHired(data){
   
    let dt=data.currentTarget.dataset.item;
    dt={"Merchant":dt}
    wx.navigateTo({
      url: '/pages/hiring/hiring?data='+encodeURIComponent(JSON.stringify(dt)),
    })
  },
  changeTown(e){
    let nowTownid=e.currentTarget.dataset.index
    if(this.data.selectTown==nowTownid)return;
    this.setData({
      selectTown:nowTownid
    })
    let nowTown=this.data.town[nowTownid].townName
    this.getarea(nowTown);
    
  },
  changeVillage(e){
    let nowVillageId=e.currentTarget.dataset.index
    if(this.data.selectVillage==nowVillageId)return;
    
    this.setData({
      selectVillage:nowVillageId
    })
    let nowTown=this.data.town[this.data.selectTown].townName
    let nowVillage=this.data.area[nowVillageId]
    this.getMerchant(nowTown,nowVillage)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */

   getarea(nowtown){
     let that=this
    wx.request({
      url: 'http://127.0.0.1:8080/hired/village?town='+nowtown,
      success:res=>{
        // console.log(res)
       this.setData({
        area:res.data
       })
       that.getMerchant(nowtown,res.data[0])
      }
    })

   },
   getMerchant(nowtown,nowarea){
    wx.request({
      url: 'http://127.0.0.1:8080/hired/Merchant?town='+nowtown+"&area="+nowarea,
      success:res=>{
        // console.log(res)
       this.setData({
        Merchant:res.data
       })
      }
    })

   },
  onLoad(options) {
    let that=this
    wx.request({
      url: 'http://127.0.0.1:8080/hired/town',
      success:res=>{
        // console.log(res)
       this.setData({
         town:res.data
       })
       that.getarea(res.data[0].townName)
      }
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