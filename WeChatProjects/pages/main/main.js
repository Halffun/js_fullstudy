// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLeft: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true,
    imgUrls:[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594983926333&di=1c66fdc514ac9b508cee7dbed890da8b&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201408%2F24%2F150506tvs8u3iwomt3m4db.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2322586521,1424670867&fm=26&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594983926332&di=e219c7f31723dcce1cc437da57c16d75&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1920h1080%2F20180130%2Fbabe-fyrcsrv8730487.jpg'
    ],
    movieList: [
      {
        isShow: 0,
        name: "第一次的离别",
        imgUrl: "https://p1.meituan.net/moviemachine/4ea68a0de8949d99fd7ff426b84d3c381761878.jpg@1l_1e_1c_128w_180h",
        actor: "艾萨·亚森,凯丽比努尔·热合米图力,艾力乃孜·热合米图力",
        time: "2020-07-20",
        wantSee: '9745'
      },
      {
        isShow: 1,
        name: "璀璨薪火3D",
        imgUrl: "https://p0.meituan.net/moviemachine/1b6ca45db703c6df1c1ad8412ad0639a633073.jpg@1l_1e_1c_128w_180h",
        actor: "",
        time: "2020-07-20",
        wantSee: '1248'
      }
    ]
  },

  tabChangeHot() {
    this.setData({
      isLeft: true
    })
  },
  tabChangeWaiting() {
    // console.log('点击了即将上映')
    // this.data.isLeft = false  (没有用)
    this.setData({
      isLeft: false
    })
  }, // function tabChangeWaiting() {}

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})