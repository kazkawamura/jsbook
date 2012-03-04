var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/public', {maxAge: 864000000}));
app.use(express.staticCache());
app.use(express.bodyParser());
app.post('/register', function(req, res) {
  res.send('Hello ' + req.body.user.firstname);
});
app.listen(8888);
