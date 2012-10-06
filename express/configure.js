var express = require('express');
var app = express.createServer();
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});
app.configure('development', function() {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});
app.configure('production', function() {
  app.use(express.errorHandler());
});
app.get('/', function(req, res) {
  res.send('Hello World');
});
app.listen(8888);