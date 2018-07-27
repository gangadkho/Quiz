var io = require("socket.io").listen(8100);
console.log("Server started at 8100");
io.sockets.on("connection",function(socket){
    
    console.log("Server-Client Connected!");
    socket.on("message",function(data){
        console.log("Message from client is");
        console.log(data);
    });
});