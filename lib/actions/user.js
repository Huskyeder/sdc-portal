var context = require('../context');

context.createAction('user:users', function (params) {
  return this.client.getAllUsers();
});

context.createAction('user:getme', function (params) {
  return this.client.getCurrentUser();
});
