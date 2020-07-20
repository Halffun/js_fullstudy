//index.js
//获取应用实例
const app = getApp()
const cars = [];
Page({
  data: {
    articleList: [],
    isHidden: false,
    isLeft: true,
    markers: [{
      iconPath: "../../resources/car.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    },{
      iconPath: "../../resources/car.png",
      id: 0,
      latitude: 23.098100,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tabBike() {
    this.setData({
      isLeft: true
    })
  },
  tabBtabC_Bikeike() {
    this.setData({
      isLeft: false
    })
  },
  onLoad: function () {
    setTimeout( () => {
      this.setData( {
        articleList: [ {
          date: '6月27日',
          articles:[ {
            id: 0,
          title: 'aaa',
          pic: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1141259048,554497535&os=933218164,348838775&simid=3512635485,227490761&pn=3&rn=1&di=86790&ln=1677&fr=&fmq=1595235516433_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined',

        }, {
          id: 1,
          title: 'bbb',
          pic: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=137628589,3436980029&os=1774711515,1975955050&simid=3255550860,4125806939&pn=7&rn=1&di=160930&ln=1677&fr=&fmq=1595235516433_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fdmimg.5054399.com%2Fallimg%2Fpkm%2Fpk%2F13.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined',
          
          } ]  
        }, {
          date:'6月26日',
          articles:[{
            id:3,
            title:'ccc',
            pic:'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1906469856,4113625838&os=1062705421,520912533&simid=3285371631,209838447&pn=1&rn=1&di=2420&ln=1677&fr=&fmq=1595235516433_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined',
          },{
            id:4,
            title:'ccc',
            pic:'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1694681277,1453280371&os=1150514170,545738526&simid=3298317676,4259088537&pn=14&rn=1&di=102850&ln=1677&fr=&fmq=1595235516433_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined',
          }]
        }],
        isHidden: true
      })
    }, 2000)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
