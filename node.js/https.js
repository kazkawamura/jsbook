var https = require('https');
var fs = require('fs');
var options = {
  cert: fs.readFileSync('keys/cert.pem'),
  key: fs.readFileSync('keys/key.pem')
};
https.createServer(options, function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
