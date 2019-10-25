'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    }, {
      // 禁止sequelize修改表名，默认会在后边添加一个字母s
      freezeTableName: true,
      // 禁止自动添加时间戳相关属性
      timestamps: false,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
