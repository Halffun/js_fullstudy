const trendings = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{
      repo: '阿雷项目'
    }])
  },2000)
  // wx.request
})

const getRepo = () => new Promise((resolve, reject) => {
  const url = 'http://github-trending-api.new.sh/repositories'
  wx.request({
    url,
    data: {
      language: 'all'
    }
  })
})

module.exports = {
  trendings,
  getRepo
}