'use strict'

// creates a base server
const server = require('./server');

let app = server.app();

// load the routes on the app object
const routes = require('./routes')(app);
