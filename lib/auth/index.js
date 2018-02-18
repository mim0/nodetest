module.exports = {
  is_authorized: is_authorized
}

function is_authorized(req, res, next) {
  // console.log(req.headers);
  return next();
}
