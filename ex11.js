var http = require('http')
var strftime = require('strftime')
var fs = require('fs')

var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function (req, res) {
  console.log(file);
  fs.createReadStream(file).pipe(res)
})
server.listen(port)