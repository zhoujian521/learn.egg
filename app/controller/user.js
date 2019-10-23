'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this; // app, config, logger
    ctx.logger.info(ctx);
    ctx.logger.info(ctx.params);
    ctx.body = {
      id: `${ctx.params.id}`,
      name: `${ctx.params.name}`,
    };
  }

  async info() {
    const { ctx } = this; // app, config, logger
    ctx.logger.info(ctx);
    ctx.logger.info(ctx.params);
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
  }
}

module.exports = UserController;
