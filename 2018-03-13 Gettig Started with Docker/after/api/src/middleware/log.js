/**
 * Tag the logger with the request id
 */
const logger = require('../lib/logger');

module.exports = (req, res, next) => {
  // mark any request logs with the request id
  req.log = logger.child({
    req_id: req.id,
    req_protocol: req.protocol,
    req_method: req.method,
    req_host: req.headers.host,
    req_path: req.path || req.originalUrl || req.url,
    req_ips: req.ips,
    req_params: req.params,
    req_query: req.query,
    req_referer: req.headers.referer,
  });
  logger.info(`
  ${req.method}: ${req.path || req.originalUrl || req.url} ${req.id}
  `);
  next();
};
