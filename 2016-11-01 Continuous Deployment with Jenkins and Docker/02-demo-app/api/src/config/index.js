module.exports = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 28015,
    db: process.env.DB_NAME || 'todoapp',
    silent: true,
  },
  app: {
    port: process.env.PORT || 3000,
  },
  domain: {
    web: process.env.WEB_DOMAIN || "http://fullstackcluj.ro"
  }
};
