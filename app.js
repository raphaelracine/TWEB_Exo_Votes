

var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);

var port = process.env.port || 3000;

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

