'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async index() {
    const { ctx } = this; // app, config, logger
    ctx.logger.info(ctx);
    ctx.logger.info(ctx.params);
    ctx.body = {
      name: `search: ${ctx.query.name}`,
    };
  }

  async detail() {
    const { ctx } = this; // app, config, logger
    ctx.logger.info(ctx);
    ctx.logger.info(ctx.params);
    ctx.body = {
      key1: `search: ${ctx.params[0]}`,
      key2: `search: ${ctx.params[1]}`,
    };
  }
}

module.exports = SearchController;
