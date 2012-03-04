var app = require('express').createServer();
app.get('/', function(req, res) {
  var name = req.query.name;
  res.send('Hello ' + name);
});
app.listen(8888);
