const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', function(client) {
    client.emit('data', 'Hello WebSocket from 3001.');
});
server.listen(3001);
console.log('Listen port on 3001');