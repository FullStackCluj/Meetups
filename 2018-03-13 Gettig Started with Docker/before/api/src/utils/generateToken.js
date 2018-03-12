let jwt = require('jwt-simple');
let moment = require('moment');
let config = require('../config');
const MAX_TIMEOUT = 7 * 24 * 60; //minutes

module.exports = function (data, timeout, longTimeout = false) {
  if ((!timeout || timeout > MAX_TIMEOUT) && !longTimeout) {
    timeout = MAX_TIMEOUT;
  }
  const expiration = moment().add(timeout, 'minutes').valueOf(); // Set expiration date for the token
  return jwt.encode({
    iss: data,
    exp: expiration
  }, config.app.token);
};
