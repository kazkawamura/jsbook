var http = require('http');
var formidable = require('formidable');
http.createServer(function (req, res) {
  var form = new formidable.IncomingForm();
  form.uploadDir = './files';
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'Content-Type': 
                        'text/plain; charset=utf-8'});
    res.write('field value is ' + fields.name + '\n');
    res.end('uploaded file is ' + files.file.name + '\n');
  });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
