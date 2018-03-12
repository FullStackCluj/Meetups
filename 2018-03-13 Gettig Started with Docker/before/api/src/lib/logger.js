const bunyan = require('bunyan');
const config = require('../config').logger;

// set logger default values based on environment variables
const log = bunyan.createLogger({
  name: config.source,
  level: config.level,
  env: config.env,
});

// make sure that uncaught exceptions are logged before exiting
process.on('uncaughtException', (err) => {
  log.fatal(err, 'Uncaught exception');
});

process.on('exit', (code) => {
  log.error({ exitCode: code }, `Exiting with status code: ${code}`);
});

process.on('warning', (warning) => {
  log.warn(warning, 'Warning triggered');
});

process.on('unhandledRejection', (reason) => {
  log.fatal(reason, `Unhandled rejection: ${reason.message}`);
});

// export the module
module.exports = log;
