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

  async create() {
    const { ctx } = this;
    const { name, age } = ctx.request.body;
    const user = await ctx.service.user.create({ name, age });
    ctx.body = user;
  }

  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const user = await ctx.service.user.destroy({ id });
    ctx.body = user;
  }

  async update() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    const user = await ctx.service.user.update({ id, name });
    ctx.body = user;
  }

}

module.exports = UserController;
