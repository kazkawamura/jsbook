var express = require('express');
var app = express.createServer();
app.get('/', function(req, res) {
  var str = null;
  var i = str.length();
  res.send('Hello World');
});
app.error(function(err, req, res) {
  res.send('error: ' + err);
});
app.listen(8888);
