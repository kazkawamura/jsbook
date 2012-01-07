var http = require('http');
var url = require('url');
var pg = require('pg');
http.createServer(function (req, res) {
  var firstname = url.parse(req.url, true).query['firstname'];
  var lastname = url.parse(req.url, true).query['lastname'];
  var conString = "postgres://demo:demo@localhost:5432/demo";
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.write('Hello ' + firstname + '\n');
  pg.connect(conString, function(err, client) {
    client.query(
      'INSERT INTO member (firstname, lastname) VALUES($1, $2)',
      [firstname, lastname],
      function(err, result) {
        var query = client.query('SELECT firstname, lastname FROM member');
        query.on('row',  function(row) {
          res.write(row.firstname + ' ' + row.lastname + '\n');
        });
        query.on('end',  function() {
          res.end();
        });
    });
  });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
