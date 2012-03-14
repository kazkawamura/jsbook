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
  var page = 'hello';
  if (tmpl != null) {
    page += '.' + tmpl;
  } 
  res.render(page,  {title: 'multi sample', 
                        name: req.params.id});
});
app.listen(8888);
