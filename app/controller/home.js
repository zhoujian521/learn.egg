'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const data = await ctx.service.home.find('111111111');
    ctx.body = data;
  }
}

module.exports = HomeController;
