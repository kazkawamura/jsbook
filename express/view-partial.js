var express = require('express');
var app = express.createServer();
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
});
app.get('/hello/:id', function(req, res) {
  res.render('hello-partial',  {title: 'Partial sample', 
                        name: req.params.id,
			friends: new Array('Taro', 'Jiro', 'Saburo')});
});
app.listen(8888);
