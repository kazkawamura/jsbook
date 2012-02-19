var express = require('express');
var app = express.createServer(
  express.logger(),
  express.profiler()
);
app.get('/', function(req, res) {
  res.send('Hello World');
});
app.listen(8888);
