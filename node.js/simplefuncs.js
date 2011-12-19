function SimpleFuncs() {
  this.echo = function(str) {
    return str;
  }
  this.hello = function(str) {
    return 'Hello ' + str;
  }
}
module.exports = new SimpleFuncs();
