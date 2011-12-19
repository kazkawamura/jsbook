var http = require('http');
var url = require('url');
var querystring = require('querystring');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  var addr = url.parse(req.url, true).query['addr'];
  var param = {
    address: addr,
    sensor: false
  };
  var options = {
    host: 'maps.google.com',
    path: '/maps/api/geocode/json?' + querystring.stringify(param)
  };
  var clientReq = http.request(options, function(clientRes) {
    var body = '';
    clientRes.setEncoding('utf-8');
    clientRes.on('data', function(chunk) {
 	 body += chunk
    });
    clientRes.on('end', function() {
      var result = JSON.parse(body);
      res.write('address: ' + 
                result.results[0].formatted_address + '\n');
      res.end('lat: ' + result.results[0].geometry.location.lat + 
              ' lng: ' + result.results[0].geometry.location.lng);
    });
  });
  clientReq.on('error', function(e) {
    console.log(e);
  });
  clientReq.end();
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
