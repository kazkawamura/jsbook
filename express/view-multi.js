var express = require('express');
var app = express.createServer();
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.register(".jqtpl", require("jqtpl").express);
});
app.get('/hello/:id.:tmpl?', function(req, res) {
  var tmpl = req.params.tmpl;
  if (tmpl != null) {
    res.render('hello.' + tmpl,  {title: 'multi sample', 
                        name: req.params.id});
  } else {
    res.render('hello',  {title: 'multi sample', 
                        name: req.params.id});
  }
});
app.listen(8888);
