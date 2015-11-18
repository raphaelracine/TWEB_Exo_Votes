var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);

var port = process.env.port || 3000;

var server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

// Create a socket-io for communications with clients
var socketio = require('socket.io')(server);

socketio.on('connection', function() {
  console.log("Salut");
});

