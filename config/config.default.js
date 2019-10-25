/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571642730618_6524';

  // add your middleware config here
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'gzip' ];
  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.security = {
    csrf: {
      ignoreJSON: true,
      enable: false,
    },
  };

  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG',
    allowDebugAtProd: true,
    dir: 'home/admin/logs',
  };

  // sql配置
  const mysql = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '11111111',
    database: 'egg_demo',
  };

  config.mysql = {
    // 单数据库信息配置
    client: mysql,
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // ORM 配置
  config.sequelize = {
    ...mysql,
    dialect: 'mysql',
    timezone: '+08:00',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
