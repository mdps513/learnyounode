var fs = require('fs')

var data = []
function listFile(dir, file, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }
    else{
      for (var i = 0; i < list.length; i++) {
        if (list[i].split(".")[1] === file) {
           data.push(list[i]); 
        }
      }
      callback(null,data);
    }
  })
}

module.exports = listFile