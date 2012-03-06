var app = require('express').createServer();
app.get('/hello/:name', function(req, res) {
  var name = req.params.name;
  res.send('Hello ' + name);
});
app.param('name', function(req, req, next, name) {
  if (name == 'World') {
    next(new Error('It\'s boring!'));
  } else {
    next();
  }
});
app.listen(8888);
