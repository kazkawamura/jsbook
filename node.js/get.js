var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
 var name = url.parse(req.url, true).query['name'];
 res.end('Hello ' + name + '\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
