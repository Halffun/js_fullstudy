'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {  // HomeController extends(继承) Controller 中的东西
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
