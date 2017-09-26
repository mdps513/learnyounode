var num=0;
for (var i = 2; i < process.argv.length; i++) {
  //console.log('i:'+ i);
  if (process.argv[i]) {
    num += Number(process.argv[i]);
    //console.log(process.argv[i]);
  }
}
console.log(num);