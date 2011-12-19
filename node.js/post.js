var http = require('http');
var querystring = require('querystring');
http.createServer(function (req, res) {
  var postData = '';
  req.setEncoding('utf-8');
  req.on('data', function(chunk) {
    postData += chunk;
  });
  req.on('end', function() {
    res.writeHead(200, {'Content-Type': 
                        'text/plain; charset=utf-8'});
    var name = querystring.parse(postData)['name'];
    res.end('Hello ' + name + '\n');
  });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
