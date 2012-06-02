var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var pathname = url.parse(req.url).pathname;
  fs.readFile(__dirname + pathname, function(err, data) {
    if (!err) {
      res.write(data);
    }
    res.end();
  });
});
server.listen(8888);

var io = require('socket.io').listen(8889);
io.sockets.on('connection', function(client) {
  console.log('connected');
  client.on('message', function(message) {
    client.emit('message', message);
    client.broadcast.emit('message', message);
  });
  client.on('disconnect', function() {
  });
});
