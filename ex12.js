var map = require('through2-map')
var http = require('http')

var port = Number(process.argv[2])

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  console.log(req.body);
  
  req.on( 'data' , function(chunk){
    var urlinfo = require('url').parse( '/?'+chunk.toString() , true );
    console.log( urlinfo );
  })
  
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res)
})
server.listen(port)