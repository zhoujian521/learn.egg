'use strict';

const { app, assert, mock } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });


  before(() => console.log('order 1'));
  before(() => console.log('order 2'));
  after(() => console.log('order 6'));
  beforeEach(mock.restore);
  afterEach(() => console.log('order 5'));
  it('should worker', () => console.log('order 4'));


  it('should status 200 and get the request body', async () => {
    app.mockCsrf();
    const params001 = {
      username: 'abccc',
      password: '111111',
      're-password': '111111',
    };
    await app.httpRequest()
      .post('/form')
      // .type('form')
      .send(params001)
      .expect(200)
      .expect(params001);

    const params002 = {
      username: 'ab',
      password: '111111',
      're-password': '111111',
    };
    await app.httpRequest()
      .post('/form')
      // .type('form')
      .send(params002)
      .expect(200)
      .expect({});

  });

});

describe('get()', () => {
  it('should get exists user', async () => {
    // 创建 ctx
    const ctx = app.mockContext();
    // 通过 ctx 访问到 service.user
    const user = await ctx.service.home.find('123');
    assert(user);
    assert(user.uid === '123');
  });

  it('should get null when user not exists', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.home.find('456');
    assert(user);
    assert(user.name === '6666');
  });
});
