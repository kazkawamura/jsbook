var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname, {maxAge: 864000000}));
app.listen(8888);
