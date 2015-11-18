var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);

var server = app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

// Create a socket-io for communications with clients
var socketio = require('socket.io')(server);


// Create a tab for votes (in other file can be better...)
var votes = {};
votes['yes'] = 0;
votes['no'] = 0;
votes['dontknow'] = 0;

socketio.on('connection', function(socket) {
	
	socket.emit('votes', {yes:votes['yes'], no:votes['no'], dontknow:votes['dontknow']});
	
	socket.on('event', function(data) {		
		
		if(data.vote == 'reset') {
			votes['yes'] = 0;
			votes['no'] = 0;
			votes['dontknow'] = 0;
		}
		else		
			votes[data.vote] = votes[data.vote] + 1;
		
		socketio.emit('votes', {yes:votes['yes'], no:votes['no'], dontknow:votes['dontknow']});	
	});
	
});

