var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var pathname = url.parse(req.url).pathname;
  if (pathname == '/morning') {
    res.end('Good morning World\n');
  } else {
    res.end('Hello World\n');
  }
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
