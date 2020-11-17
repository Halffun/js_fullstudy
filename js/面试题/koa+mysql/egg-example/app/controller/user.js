'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = [
      { name: 'jl'},
      { name: 'pp'}
    ]
  }
}

module.exports = UserController;