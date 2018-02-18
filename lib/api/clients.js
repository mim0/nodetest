'use strict'

module.exports = function(app) {
    return {
      get_clients: get_all_clients,
      get_client_by_id: get_client_by_id
    };
}

const data_origin = require('../data_origin');
const filters = require('../filters');
const common = require('./common');

function get_all_clients(req, res) {
  return common.just_respond(req, res, data_origin.clients);
}

function get_client_by_id(req, res) {
  let client_id = req.params.client_id;
  return data_origin.clients()
    .then(response => {
      let resp = {
        data: filters.filter_by(response['clients'], 'id', client_id)
      };
      return res.status(200).send(resp);
    })
    .catch(err => res.status(300).send(err));
}
