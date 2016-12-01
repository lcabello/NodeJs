
//Modules
const fs = require('fs');
const readline = require('readline');

/* You should introduce your file path*/
let fileName = 'test.txt';

var logger = fs.createWriteStream('log.txt', {
  flags: 'w'
});

var reading = function(){
  let lineReader = readline.createInterface({
    input: fs.createReadStream(fileName)
  });

  lineReader.on('line', function(line){
    //It will return all lines in the node consle
    let newComment = encodeURI(unescape(line));
    console.log(`Escaped using encodeURI : ${newComment}`);
    logger.write(newComment + '\n');
  });
}();

