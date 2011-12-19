var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
http.createServer(function (req, res) {
  var form = new formidable.IncomingForm();
  form.uploadDir = './files';
  form.parse(req, function(err, fields, files) {
    fs.readFile(files.file.path, function(err, data) {
      res.writeHead(200, {'Content-Type': files.file.type});
      res.write(data);
      res.end();
    });
  });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
