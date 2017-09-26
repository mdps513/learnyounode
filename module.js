var fs = require('fs')

var data;
function listFile(dir,fs,callback) {
  fs.readdir(process.argv[2],function callback (err, list) {
    if (err) {
      return callback(err)
    }
    else{
      for (var i = 0; i < list.length; i++) {
        if (list[i].split(".")[1] === process.argv[3]) { 
          data.push(list[i]); 
          console.log(data);
        }
      }
      callback(null, data)
    }
  })
}

module.exports = listFile