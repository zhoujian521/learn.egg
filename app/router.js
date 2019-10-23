'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.info);
  router.get('/user/:id/:name', controller.user.index);
  router.get('/search', controller.search.index);
  router.get(/^\/search\/([\w-.]+\/[\w-.]+)$/, controller.search.detail);
  router.post('/form', controller.form.index);
};
