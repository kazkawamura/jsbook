var express = require('express');
var app = express.createServer();
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
});
app.get('/hello/:id', function(req, res) {
  res.render('hello',  {title: 'Jade sample', 
                        name: req.params.id});
});
app.listen(8888);
