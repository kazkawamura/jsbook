var express = require('express');
var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({secret: 'himitsu'}));
app.get('/hello/:name', function(req, res) {
  var name = req.params.name;
  req.session.name = name;
  res.send('Hello ' + name);
});
app.get('/hello', function(req, res) {
  var name = req.session.name;
  if (name != null) {
    res.send('Hello again, ' + name);
  } else {
    res.send('Who are you?');
  }
});
app.listen(8888);
