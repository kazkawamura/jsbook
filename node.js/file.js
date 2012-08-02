var http = require('http');
var url = require('url');
var fs = require('fs');
var fileDir = './files';
http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  path = path.substr(path.lastIndexOf('/'));
  fs.readFile(fileDir + path, function(error, content) {
    if (error) {
      log.write(path + ': ' + new Date() + ' -> error\n');
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found: ' + path);
    } else {
      log.write(path + ': ' + new Date() + ' -> success\n');
      res.writeHead(200, {'Content-Type': getContentType(path)});
      res.end(content);
    }
  });
}).listen(8888);
function getContentType(path) {
  var ext = path.substr(path.lastIndexOf('.') + 1);
  switch (ext) {
    case 'html':
    case 'htm':
      return 'text/html';
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    default:
      return 'text/plain';
  }
}
var log = fs.createWriteStream('./files/server.log', {
  flags: 'a',
  encoding: 'utf-8',
  mode: 0644
});
console.log('Server running at http://127.0.0.1:8888/');
