'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async create(params) {
    const { ctx } = this;
    const user = await ctx.model.User.create(params);
    return user;
  }

  async destroy({ id }) {
    const { ctx } = this;
    const user = await ctx.model.User.findByPk(id);
    user && await user.destroy();
    return true;
  }

  async update({ id, name }) {
    const { ctx } = this;
    const user = await ctx.model.User.findByPk(id);
    user && await user.update({ name });
    return user;
  }
}

module.exports = UserService;
