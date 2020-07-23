// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    totalPrice: 0,
    selectAllStatus: true,
  },

  selectAll() {
    // console.log('select')
    // 来回改变数据源中的selectAllStatus的值
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    // 把carts数组里面的每一条数据里面的selested改成false
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
    this.getTotalPrice()
  },

  selectList(e) {
    // console.log(e)
    // 让当前这条数据里面的selected值取反
    let index = e.currentTarget.dataset.index
    let selected = `carts[${index}].selected`// let selected = "carts[ " + index + "].selected"
    this.setData({
      [selected]: !this.data.carts[index].selected
    })
    this.getTotalPrice()
    // 但凡carts数组中存在一条数据里面的selected不为true，全选按钮就不能勾选
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].selected) {
        this.setData({
          selectAllStatus: false
        })
        break;// 代码优化
      } else {
        this.setData({
          selectAllStatus: true
        })
      }
    }
  },

  //计算总价格
  getTotalPrice() {
    // 拿到carts数组中的每一条selected为true的数据，用数量乘以单价
    let carts = this.data.carts
    let total = 0
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)// 保留2位小数    
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
    //setInterval()// 定了多少秒就每隔多少秒就执行这个函数的逻辑，循环执行
    setTimeout(() => {// 定了多少秒就在多少秒后执行这个函数的逻辑
      this.setData({
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      })
      this.getTotalPrice()
    }, 1000)  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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