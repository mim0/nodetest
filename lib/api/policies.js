'use strict'

module.exports = function(app) {
    return {
      get_policies: get_all_policies
    };
};

const data_origin = require('../data_origin');
const common = require('./common');

function get_all_policies(req, res) {
  return common.just_respond(req, res, data_origin.policies);
}
