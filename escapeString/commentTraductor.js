
//Modules
const fs = require('fs');
const readline = require('readline');

/* You should introduce your file path*/
let fileName = 'test.txt';

var logger = fs.createWriteStream('log.txt', {
  flags: 'w'
});

var data = [];

var reading = function(){
  let lineReader = readline.createInterface({
    input: fs.createReadStream(fileName)
  });

  console.log('Reading...');

  lineReader.on('line', function(line){
    //It will return all lines in the node consle
    let newComment = encodeURI(unescape(line));
    data.push(newComment);
  });

  console.log('Writing...');

  lineReader.on('close', function(){
    data.forEach(function(comment){
      logger.write(comment + '\n');
    });

    console.log('Finish!');
  });
}();

