function echo(str) {
  return str;
}
var HELLO_STR = 'Hello ';
function hello(name) {
  return HELLO_STR + name;
}
module.exports.echo = echo;
module.exports.hello = hello;
