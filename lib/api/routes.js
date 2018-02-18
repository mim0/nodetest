'use strict'

const clients = require('./clients');
const policies = require('./policies');

const auth = require('../auth');

module.exports = (app) => {

  // clients
  app.get('/clients', auth.is_authorized, clients().get_clients);
  app.get('/clients/:client_id', auth.is_authorized, clients().get_client_by_id);

  // policies
  app.get('/policies', auth.is_authorized, policies().get_policies);

  return app;
}
