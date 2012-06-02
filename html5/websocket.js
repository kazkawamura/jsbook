var http = require('http');
var fs = require('fs');
var WebSocketServer = require('websocket').server;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync(__dirname + '/websocket.html'));
  res.end();
});
server.listen(8888, function(){console.log("server on 8888");});

ws = new WebSocketServer({
  'httpServer' : server
});

var connections = Array();
ws.on('request', function(request) {
  connections.push(request.accept(null, 'http://localhost:8888'));   
});
 
ws.on('connect', function(connection) {
  connection.on('message', function(message) {
    if (message.type =='utf8') {
      for (var i = 0; i < connections.length; i++) {
        connections[i].sendUTF(message.utf8Data);
      }
    }
  });
  connection.sendUTF('Connected to server.');
});