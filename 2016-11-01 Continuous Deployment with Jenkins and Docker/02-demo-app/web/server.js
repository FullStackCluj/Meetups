var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 80, function () {
  console.info('Listening on port ' + (process.env.PORT || 80) + '.');
});
