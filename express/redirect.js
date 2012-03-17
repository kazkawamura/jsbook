var app = require('express').createServer();
app.get('/search/:word', function(req, res) {
  res.redirect('http://www.google.co.jp/search?q=' + req.params.word);
});
app.listen(8888);
