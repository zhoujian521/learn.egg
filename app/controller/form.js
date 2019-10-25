
'use strict';

const Controller = require('egg').Controller;

const createRule = {
  username: 'userName',
  password: {
    type: 'password',
    compare: 're-password',
  },
};


class FormController extends Controller {
  async index() {
    const { ctx } = this; // app, config, logger

    // 示例：请求一个 npm 模块信息
    const result = await ctx.curl('https://registry.npm.taobao.org/egg/latest', {
      // 自动解析 JSON response
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });
    console.log('===========FormController=========================');
    console.log(result);
    console.log('===========FormController=========================');

    // ctx.cookies.set('id', '1234567890');
    ctx.cookies.set('section', null);
    ctx.cookies.set('id', null);
    console.log('============FormController========================');
    console.log(ctx.header);
    ctx.session.userId = 'id-1234567890';
    console.log(ctx.session);
    console.log('============FormController========================');
    try {
      ctx.validate(createRule);
      ctx.body = ctx.request.body;
    } catch (error) {
      ctx.body = {};
    }

  }
}

module.exports = FormController;
