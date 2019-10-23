
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
