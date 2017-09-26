var fs = require('fs')

// 
// 

function countNewLine() {
  fs.readFile(process.argv[2],function callback (err, data) {
    if (err) {
      console.log(err);
    }
    else{
      var buf = new Buffer(data)
      var buffer = buf.toString()
      console.log(buffer.split("\n").length-1);
    }
  })
}

countNewLine()