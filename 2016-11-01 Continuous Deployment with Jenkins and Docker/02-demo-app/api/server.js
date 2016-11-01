let express = require('express');
let parser = require('body-parser');
let cors = require('cors');
let routes = require('./src/routes');
let config = require('./src/config');
let app = express();

app.enable('trust proxy');
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({exposedHeaders: ['Location']}));
app.use('', routes);

app.listen(config.app.port, function () {
  logger.info('API container started on port ' + config.app.port);
});
