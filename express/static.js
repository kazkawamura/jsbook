var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/public', {maxAge: 864000000}));
app.use(express.staticCache());
app.get('/', function(req, res) {
  res.send('Hello World');
});
app.listen(8888);
