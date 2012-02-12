var app = require('express').createServer();
app.get('/user/:id', function(req, res) {
  res.send('Hello. Your number is ' + req.params.id);
});
app.listen(8888);
