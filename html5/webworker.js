onmessage = function(event) {
  postMessage('Hello ' + event.data + '!');
}