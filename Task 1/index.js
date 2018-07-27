var CONFIG = require('./config.json');

var io = require("socket.io").listen(CONFIG.serverport);
console.log("Server started at port " + CONFIG.serverport);

io.sockets.on('connection', function (socket) {
	
	console.log('Client is connected.')
  socket.on('time-now', function (data) {
  	console.log('Client requested for current time');
  	var currTime = new Date();
    socket.emit('time-response', currTime.toString());
  });

  socket.on('date-tomorrow', function (data) {
  	console.log('Client requested for tomorrows date');
  	var currTime = new Date();
  	currTime.setDate(currTime.getDate() + 1);
   	socket.emit('tomorrow-response', currTime.toDateString());
  });
});