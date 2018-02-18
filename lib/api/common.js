'use strict'

module.exports = {
  just_respond: just_respond
}

function just_respond(req, res, controlled_promise) {
  return controlled_promise()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(300).send(err);
    });
}
