var http = require("http")
var fs = require("fs")
var events = require("events");
var emitter = new events.EventEmitter();

http.createServer(function handler(req, res) {
  if (req.url == '/events') {
    res.writeHead(200, {
      "Content-type": "text/event-stream",
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    function response(id, data) {
        res.write("data:" + data + "\n\n");  
        res.end();      
        emitter.removeListener("generated", arguments.callee);
    }
    emitter.on("generated", response);
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync(__dirname + '/event.html'));
    res.end();
  }
}).listen(8889);

var id = 0;
function start() {
  setInterval(function() {
    emitter.emit("generated", id++, "Hello! Still there?");
  }, 10000);
}
start();