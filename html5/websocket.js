var http = require('http');
var fs = require('fs');
var WebSocketServer = require('websocket').server;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile(__dirname + '/websocket.html', function(err, data) {
    if (!err) {
      res.write(data);
    }
    res.end();
  });
});
server.listen(8888, function(){console.log("server on 8888");});

ws = new WebSocketServer({
  'httpServer' : server
});

var connections = [];
ws.on('request', function(request) {
  connections.push(request.accept(null, 'http://10.0.1.2:8888'));   
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