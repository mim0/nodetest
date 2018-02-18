'use strict'

// expose functions
module.exports = {
  clients: clients,
  policies: policies
};

// dependencies
const request = require('request');
const base_url = 'http://www.mocky.io/v2/';

// main functions
function clients() {
  let endpoint = base_url + '5808862710000087232b75ac';
  return get(endpoint);
}

function policies() {
  let endpoint = base_url + '580891a4100000e8242b75c5';
  return get(endpoint);
}

// common functions
function get(endpoint) {
  return new Promise((resolve, reject) => {
    return request(endpoint, (err, response, body) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.parse(body));
    });
  });
}
