// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   allMovies: [
    {
      title: "院线热映",
      url: "/v2/movie/in_theaters",
      movies: []
    },
    {
      title: "新片榜",
      url: "/v2/movie/new_movies",
      movies: []
    },
    {
      title: "口碑榜",
      url: "/v2/movie/weekly",
      movies: []
    },
    {
      title: "北美票房榜",
      url: "/v2/movie/us_box",
      movies: []
    },
    {
      title: "Top250",
      url: "/v2/movie/top250",
      movies: []
    },
   ]
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getCity((city) => {
      this.loadData(0, {
        city: city,
        apikey: '0df993c66c0c636e29ecbb5344252a4a'
      })
      this.loadData(1, { 
        apikey: '0df993c66c0c636e29ecbb5344252a4a'
      })
      this.loadData(2, { 
        apikey: '0df993c66c0c636e29ecbb5344252a4a'
      })
      this.loadData(3, { 
        apikey: '0df993c66c0c636e29ecbb5344252a4a'
      })
      this.loadData(4, { 
        apikey: '0df993c66c0c636e29ecbb5344252a4a'
      })
    })
  },

  loadData(idx, params) {
    let obj = this.data.allMovies[idx]
    let url = wx.db.url(obj.url)
    wx.request({
      url: url,
      data: params,
      header: {
        'content-type': 'json'
      },
      success: (res) => {
        console.log(res)
        let movies = res.data.subjects
        // let obj = this.data.allMovies[idx]
        obj.movies = []
        for (let index = 0; index < movies.length; index++) {
          let element = movies[index]
          let movie = element.subject || element
          // 格式化星星
          this.updataMovie(movie)
          obj.movies.push(movie)
        }
        this.setData(this.data)
      }
    })
  },
  updataMovie(movie) {
    if (!movie.rating.stars) {
      return
    }
    movie.numberStars = parseInt(movie.rating.stars)
  },

  getCity(succeed) {
    // 拿到当前所在的城市名称
    // 先拿到当前所在区域的经纬度（小程序自带api）
    wx.getLocation({
      success: (res) => {
        // console.log(res)
        // 将经纬度转换成具体的名称
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            ak: 'OTtC5TIeCORwCmBiHzLfwE53juclyi3n',
            output: 'json',
            coordtype: 'wgs84ll',
            location: `${res.latitude},${res.longitude}`
          },
          success: (res) => {
            // console.log(res)
            let city = res.data.result.addressComponent.city
            succeed && succeed(city)
          },
          fail: () => {
            console.log('获取城市失败')
          }
        })
      },
      fail: () => {}
    });
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