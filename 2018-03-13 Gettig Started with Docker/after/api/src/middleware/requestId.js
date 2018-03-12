/**
 * Generate a unique id for each incomming request
 */
const uuid = require('uuid');

module.exports = (req, res, next) => {
  req.id = uuid.v4();
  next();
};
