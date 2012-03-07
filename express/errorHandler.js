var express = require('express');
var app = express.createServer();
app.use(app.router);
app.use(express.errorHandler({showStack: true, dumpExceptions: true}));
app.get('/', function(req, res) {
  var str = null;
  var i = str.length();
  res.send('Hello World');
});
app.listen(8888);
