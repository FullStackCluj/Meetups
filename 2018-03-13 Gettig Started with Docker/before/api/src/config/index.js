const db_host = process.env.MYSQL_HOST || '127.0.0.1';
const db_pass = process.env.MYSQL_PASSWORD || 'secret';
const db_user = process.env.MYSQL_USER || 'root';
const db_port = process.env.MYSQL_PORT || '3306';
const db_name = process.env.MYSQL_DB || 'demo';

module.exports = {
  logger: {
    source: process.env.LOGGER_SOURCE || 'demo',
    level: process.env.LOGGER_LEVEL || 'trace',
    env: process.env.APP_ENV || 'dev',
  },
  database: {
    username: db_user,
    password: db_pass,
    database: db_name,
    host: db_host,
    dialect: 'mysql',
    port: db_port,
  },
  app: {
    port: process.env.PORT || 80,
    token: process.env.TOKEN_SECRET || '<really-secret-token>',
  },
};