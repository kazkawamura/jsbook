var app = require('express').createServer();
app.all('/users/:id', function(req, res, next) {
  var id = req.params.id;
  if (id < 100) {
    req.username = 'Taro';
    next();
  } else {
    next(new Error('Id number is too big!')); 
  }
});
app.get('/users/:id', function(req, res) {
  res.send('Hello ' + req.username);
});
app.listen(8888);
