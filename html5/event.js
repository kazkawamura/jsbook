var http = require("http");
var fs = require("fs");
var events = require("events");
var emitter = new events.EventEmitter();

http.createServer(function handler(req, res) {
  if (req.url == '/events') {
    res.writeHead(200, {
      "Content-type": "text/event-stream",
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    emitter.on("generated", function(id, data) {
      res.write("data:" + data + "\n\n");  
      res.end();      
      emitter.removeListener("generated", arguments.callee);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/event.html', function(err, data) {
      if (!err) {
        res.write(data);
      }
      res.end();
    });
  }
}).listen(8888);

function start() {
  var id = 0;
  setInterval(function() {
    emitter.emit("generated", id++, "Hello! Still there?");
  }, 10000);
}
start();