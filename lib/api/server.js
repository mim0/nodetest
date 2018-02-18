'use strict'

module.exports = {
    app: build_base_app
}

const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');


function build_base_app() {
  let app = express();

  app.use(bodyParser.json());

  app.listen(port, () => {
    console.log('Listening on port: ' + port);
  });
  
  return app;
}
