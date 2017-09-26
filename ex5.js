var fs = require('fs')

function listFile() {
  fs.readdir(process.argv[2],function callback (err, list) {
    if (err) {
      console.log(err);
    }
    else{
      for (var i = 0; i < list.length; i++) {
        if (list[i].split(".")[1] === process.argv[3]) { 
          console.log(list[i]); 
        }
      }
      // var buf = new Buffer(data)
      // var buffer = buf.toString()
      // console.log(buffer.split("\n").length-1);
    }
  })
}

listFile()