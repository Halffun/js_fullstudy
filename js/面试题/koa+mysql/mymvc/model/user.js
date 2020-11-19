// 创建数据库模型
const { STRING } = require('sequelize')
module.exports = {
  schema: {
    name: STRING(30)
  },
  options: {
    timestamps: false
  }
}