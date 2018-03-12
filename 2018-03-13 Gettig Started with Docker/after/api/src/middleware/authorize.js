const jwt = require('jwt-simple');
const moment = require('moment');
const secret_token = require('../config').app.token;

module.exports = function(req, res, next) {
  // check header or url parameters or post parameters for token
  const token = req.body.token
      || req.query.token
      || req.headers['x-access-token']
      || ((req.headers.authorization) &&
          req.headers.authorization.replace('Bearer ', ''));

  if (!token) {
    return res.status(401).
      json({success: false, message: 'Missing token'});
  }
  let decoded = null;
  try {
    decoded = jwt.decode(token, secret_token);
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: 'Invalid token',
      err: err.toString(),
    });
  }

  if (moment(decoded.exp).isBefore(moment())) {
    res.status(401).json({success: false, message: 'Expired token'});
  } else {
    req.user = decoded.iss;
    req.log = req.log.child({user_id: req.user.id});
    next();
  }
};
