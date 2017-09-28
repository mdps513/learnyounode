var bl = require('bl')
var http = require('http')
var urls = [process.argv[2],process.argv[3],process.argv[4]]
var results = [];
var count = 0;

function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
};

function httpGet (urls, index){
  http.get(urls[index],function(res){
    res.pipe(
      bl(
        function (err, data) {
          if (err) {
            return console.error(err);
          }
          results[index] = data.toString();
          count = count + 1;
          if (count == urls.length) {
            printResults();
          }
        })
      )
  })
}

for (var i = 0; i < urls.length; i++) {
  httpGet(urls,i);
}