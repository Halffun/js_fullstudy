const userCtrl = require('../controllers/userControllers')
var router = require('koa-router')();

router.prefix('/users');

router.post('/user_regist', userCtrl.user_regist)

module.exports = router;
