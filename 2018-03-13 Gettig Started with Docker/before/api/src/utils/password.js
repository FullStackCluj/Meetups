const hash = require('node_hash');
const crypto = require('crypto');

module.exports.hashPassword = function (plainPassword, salt) {
  salt = salt || crypto.randomBytes(128).toString('base64');
  return {
    pass: hash.sha512(plainPassword, salt),
    salt,
  };
};

module.exports.verifyPassword = function (enteredPassword, databasePassword, salt) {
  const hashedEnteredPassword = hash.sha512(enteredPassword, salt);
  return (hashedEnteredPassword === databasePassword);
};
