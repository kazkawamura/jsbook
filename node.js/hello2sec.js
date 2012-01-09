var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  setTimeout(function() {
    res.end("Hello World\n");
  }, 2000);
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
