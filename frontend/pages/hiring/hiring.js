// pages/hiring/hiring.js
const datepicker = require('../../utils/datepicker')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [], //piker的item项
    multiIndex: [], //当前选择列的下标
    year: '', //选择的年
    month: '', //选择的⽉
    day: '', //选择的⽇
    hour: '', //选择的时
    minute: '', //选择的分

    time: '请选择',
    location:'请选择',//地区
    imgArry: [],
    demand:'',
    Merchant:[],
    uploadImg:[]
  },
  getDemand(e){
   this.setData({
    demand:e.detail.value
   })
  }
  ,
  upphoto() {
    let that = this
    wx.chooseMedia({
      count: 4,
      mediaType: "image",
      sourceType: ['album', 'camera'],
      maxDuration: 10,
      camera: "back",
      success(res) {
        console.log(res);
        that.setData({
          imgArry: res.tempFiles
        })
        // let name=res.tempFiles[0].tempFilePath
        // name=name.split('/');
        // name=name[3]
        // wx.uploadFile({
        //   filePath: res.tempFiles[0],
        //   name: name,
        //   url: 'url',
        // })
      }

    })
  },
  deletePhoto(e) {

    let deleteIndex = e.currentTarget.dataset.index
    let arr = this.data.imgArry;
    arr.splice(deleteIndex, 1);
    this.setData({
      imgArry: arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let res=wx.getStorageSync('user');
    if(Object.keys(res).length > 0){
      this.setData({
        openid:res.openid
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
           wx.redirectTo({
             url: '/pages/hired/hired',
           })
          }
         
        }
      })
    }
    
    let that=this
    let userInfo = JSON.parse(decodeURIComponent(options.data))
    // console.log(userInfo.Merchant);
    that.setData({
      Merchant: userInfo.Merchant
     })
   
  },
  choseAddress(){
    wx.chooseLocation({
      latitude:"118.676000",
      longitude:"24.873600",
      success: (res) => {
        
      this.setData({
        location:res.address
      })
     }
    })

  },

  async  uploadAllImages(imgArry) {
    try {
      const uploadImg = []; // 用来存放上传后的图片文件名
  
      // 将上传每张图片的逻辑包装成 Promise
      const uploadPromises = imgArry.map(img => {
        return new Promise((resolve, reject) => {
          console.log(img.tempFilePath);
          wx.uploadFile({
            url: 'http://127.0.0.1:8080/api/upload',
            filePath: img.tempFilePath,
            name: 'file',
            header: {
              'Content-Type': 'multipart/form-data',
            },
            success(res) {
              console.log(res);
              try {
                const data = JSON.parse(res.data); // 解析返回的 JSON 数据
                uploadImg.push(data.fileName); // 添加文件名到数组
                resolve(); // 完成这个上传任务
              } catch (error) {
                reject('上传失败，响应数据解析错误');
              }
            },
            fail(err) {
              reject('上传失败');
            },
          });
        });
      });
  
      // 使用 await 等待所有图片上传完成
      await Promise.all(uploadPromises);
  
      // 返回上传的文件名数组
      return uploadImg;
  
    } catch (error) {
      console.error('图片上传失败：', error);
      throw error; // 抛出错误，供外部处理
    }
  },

  async zhaopin(){
    let that=this
    // time: '请选择',
    // location:'请选择',//地区
    // imgArry: [],
    // demand:"",
    // Merchant:[]
    let upState=1;
    let imgArry=this.data.imgArry;
    let uploadImg=[];
       // 调用 uploadAllImages 方法并等待其完成
       uploadImg = await this.uploadAllImages(imgArry);

    this.setData({
      uploadImg
    })
     if(!upState){
      wx.showToast({
        title: '上传失败！',
        icon: 'error',
      });
     } 

    let ordertime=new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0,8)
    let staffID=this.data.Merchant.staffID
    let manager=this.data.Merchant.manager
    let  starttime=this.data.time
    let  location=this.data.location
    let  demand=this.data.demand
    imgArry=uploadImg
 
   let kk= wx.getStorageSync('user');
   let openid=kk.openid;

console.log({
  staffID,
  imgArry,
  starttime,
  ordertime,
  location,
  demand,
  manager
});
console.log(imgArry);
   wx.request({
     url: 'http://127.0.0.1:8080/order/postOrder',
     method:"POST",
     header: {
    'Content-Type': 'application/json'  // 确保内容类型是 JSON
  },
  data: {
    staffID,
    imgArry,
    starttime,
    ordertime,
    location,
    demand,
    openid,
    manager
  },
     success: function(res) {
       console.log(res);
      if(res.data.state=="true"){
          wx.showToast({
            title: '订单生成成功！',
          })
         wx.switchTab({
      url: '/pages/orders/orders',
    })
      }else{
        wx.showToast({
          title: '订单生成失败！',
        })
      }
    }
   })

    // wx.switchTab({
    //   url: '/pages/orders/orders',
    // })
  }
  ,                                                        
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    //获取 datepicker ⼯具下的⽅法
    var loadPickerData = datepicker.loadPickerData()
    var getCurrentDate = datepicker.getCurrentDate()
    var GetMultiIndex = datepicker.GetMultiIndex()
    //这⾥写的是为了记录当前时间
    let year = parseInt(getCurrentDate.substring(0, 4));
    let month = parseInt(getCurrentDate.substring(5, 7));
    let day = parseInt(getCurrentDate.substring(8, 10));
    let hour = parseInt(getCurrentDate.substring(11, 13));
    let minute = parseInt(getCurrentDate.substring(14, 16));

    this.setData({
      multiArray: loadPickerData, //picker数组赋值，格式 [years, months, days, hours, minutes]
      multiIndex: GetMultiIndex, //设置pickerIndex，[0,0,0,0,0]
      // time: getCurrentDate, //设置当前时间 ，currentYears+'-'+mm+''+dd+' '+hh+':'+min
      year: year, //记录选择的年
      month: month, //记录选择的⽉
      day: day, //记录选择的⽇
      hour: hour, //记录选择的时
      minute: minute, //记录选择的分 
    })
  },
// 时间日期 picker 选择改变后，点击确定
bindMultiPickerChange: function (e) { 
  console.log('picker发送选择改变，携带值为', e.detail.value);
  
  // 更新 multiIndex
  this.setData({
    multiIndex: e.detail.value
  });

  // 获取当前选择的年、月、日、时、分
  const index = this.data.multiIndex; // 当前选择列的下标
  const year = this.data.multiArray[0][index[0]];
  const month = this.data.multiArray[1][index[1]];
  const day = this.data.multiArray[2][index[2]];
  const hour = this.data.multiArray[3][index[3]];
  const minute = this.data.multiArray[4][index[4]];

  // 格式化时间日期字符串
  this.setData({
    time: `${year.replace('年', '-')}${month.replace('月', '-')}${day.replace('日', '')} ${hour.replace('时', '')}:${minute.replace('分', '')}`,
    year: year, // 记录选择的年
    month: month, // 记录选择的月
    day: day, // 记录选择的日
    hour: hour, // 记录选择的时
    minute: minute // 记录选择的分
  });

  // 打印更新后的时间日期
  // console.log(this.data.time); 
},

// 监听 picker 的每一列滚动事件
bindMultiPickerColumnChange: function (e) { 
  console.log('修改的列为', e.detail.column, '，值为', e.detail.value);

  let getCurrentDate = datepicker.getCurrentDate(); // 获取当前时间
  let currentYear = parseInt(getCurrentDate.substring(0, 4));
  let currentMonth = parseInt(getCurrentDate.substring(5, 7));
  let currentDay = parseInt(getCurrentDate.substring(8, 10));
  let currentHour = parseInt(getCurrentDate.substring(11, 13));
  let currentMinute = parseInt(getCurrentDate.substring(14, 16));

  // 修改年份列
  if (e.detail.column === 0) {
    let yearSelected = parseInt(this.data.multiArray[e.detail.column][e.detail.value]); // 当前选择的年份
    this.setData({
      multiIndex: [0, 0, 0, 0, 0], // 设置 pickerIndex
      year: yearSelected // 当前选择的年份
    });

    if (yearSelected === currentYear) { // 当前选择的年份 == 当前年份
      const loadPickerData = datepicker.loadPickerData();
      this.setData({
        multiArray: loadPickerData, // picker 数组赋值
        multiIndex: [0, 0, 0, 0, 0] // 设置 pickerIndex
      });
    } else { // 选择的年份 != 当前年份
      // 处理月份、日期、小时、分钟
      let monthArr = datepicker.loadMonths(1, 12);
      let dayArr = datepicker.loadDays(currentYear, currentMonth, 1);
      let hourArr = datepicker.loadHours(0, 24);
      let minuteArr = datepicker.loadMinutes(0, 60);
      this.setData({
        ['multiArray[1]']: monthArr,
        ['multiArray[2]']: dayArr,
        ['multiArray[3]']: hourArr,
        ['multiArray[4]']: minuteArr
      });
    }
  }

  // 修改月份列
  if (e.detail.column === 1) {
    let mon = parseInt(this.data.multiArray[e.detail.column][e.detail.value]); // 当前选择的月份
    this.setData({
      month: mon // 记录当前月份
    });

    if (mon === currentMonth) { // 选择的月份 == 当前月份
      if (this.data.year === currentYear) { // 当前选择的年份 == 当前年份
        // 处理日期、小时、分钟
        let dayArr = datepicker.loadDays(currentYear, mon, currentDay);
        let hourArr = datepicker.loadHours(currentHour, 24);
        let minuteArr = datepicker.loadMinutes(currentMinute, 60);
        this.setData({
          ['multiArray[2]']: dayArr,
          ['multiArray[3]']: hourArr,
          ['multiArray[4]']: minuteArr
        });
      }
    } else { // 选择的月份 != 当前月份
      // 处理日期、小时、分钟
      let dayArr = datepicker.loadDays(this.data.year, mon, 1);
      let hourArr = datepicker.loadHours(0, 24);
      let minuteArr = datepicker.loadMinutes(0, 60);
      this.setData({
        ['multiArray[2]']: dayArr,
        ['multiArray[3]']: hourArr,
        ['multiArray[4]']: minuteArr
      });
    }
  }

  // 修改日期列
  if (e.detail.column === 2) {
    let dd = parseInt(this.data.multiArray[e.detail.column][e.detail.value]); // 当前选择的日
    this.setData({
      day: dd // 记录当前日
    });

    // 处理小时、分钟
    let hourArr = datepicker.loadHours(0, 24);
    let minuteArr = datepicker.loadMinutes(0, 60);

    if (dd === currentDay) { // 选择的日 == 当前日
      if (this.data.year === currentYear && this.data.month === currentMonth) {
        hourArr = datepicker.loadHours(currentHour, 24);
        minuteArr = datepicker.loadMinutes(currentMinute, 60);
      }
    }

    this.setData({
      ['multiArray[3]']: hourArr,
      ['multiArray[4]']: minuteArr
    });
  }

  // 修改小时列
  if (e.detail.column === 3) {
    let hh = parseInt(this.data.multiArray[e.detail.column][e.detail.value]); // 当前选择的时
    this.setData({
      hour: hh // 记录当前小时
    });

    let minuteArr = datepicker.loadMinutes(0, 60);

    if (hh === currentHour) { // 选择的时 == 当前时
      if (this.data.year === currentYear && this.data.month === currentMonth && this.data.day === currentDay) {
        minuteArr = datepicker.loadMinutes(currentMinute, 60);
      }
    }

    this.setData({
      ['multiArray[4]']: minuteArr
    });
  }

  // 更新 picker 的值
  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };
  data.multiIndex[e.detail.column] = e.detail.value; // 将值赋回去
  this.setData(data); // 将值赋回去
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