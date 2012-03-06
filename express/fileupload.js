var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/public', {maxAge: 864000000}));
app.use(express.staticCache());
app.use(express.bodyParser({uploadDir: './files'}));
app.post('/upload', function(req, res) {
  res.send('name: ' + req.body.name + '<br/>' +
           'uploaded file: ' + req.files.file.name);
});
app.listen(8888);
