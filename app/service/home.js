'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async find(uid) {
    return {
      uid,
      name: '6666',
    };
  }
}

module.exports = HomeService;

