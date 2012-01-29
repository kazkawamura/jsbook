var app = require('express').createServer({
  cert: fs.readFileSync('keys/cert.pem'),
  key: fs.readFileSync('keys/key.pem')
});
app.get('/', function(req, res) {
  res.send('Hello World');
});
app.listen(8443);
