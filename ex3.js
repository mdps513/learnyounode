var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var buf = new Buffer(file)
var buffer = buf.toString();

if (buffer.split("\n")) {
  console.log(buffer.split("\n").length-1);
}
