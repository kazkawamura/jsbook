var http = require('http');
var url = require('url');
var mongo = require('mongodb');
http.createServer(function (req, res) {
  var firstname = url.parse(req.url, true).query['firstname'];
  var lastname = url.parse(req.url, true).query['lastname'];
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.write('Hello ' + firstname + '\n');
  var server = new mongo.Server('localhost', 27017, {auto_reconnect: true});
  var db = new mongo.Db('userDirectory', server);
  db.open(function(err, db) {
    db.collection('members', function(err, collection) {
      var doc1 = {'firstname': firstname, 'lastname': lastname};
      collection.insert(doc1, {safe:true}, function(err, result) {
        var stream = collection.find().streamRecords();
        stream.on('data',  function(item) {
          res.write(item.firstname + ' ' + item.lastname + '\n');
        });
        stream.on('end',  function() {
          res.end();
        });
      });
    });
  });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
