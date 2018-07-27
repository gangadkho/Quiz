var io = require("socket.io").listen(8100);
console.log("Server started at 8100 port");

io.sockets.on('connection', function (socket) {
	socket.emit('message', 'You are connected!');

  socket.on('time-now', function (data) {
  	console.log('Time now should be given in time-response event name');
    socket.emit('time-response', 'Time Response is ***********');
  });

  socket.on('date-tomorrow', function (data) {
  	console.log('Tomorrows date should be replied in tomorrow-response event name');
   	socket.emit('tomorrow-response', 'Tomorrow Response is ***********');
  });
});