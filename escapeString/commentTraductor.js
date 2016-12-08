
//Modules
const fs = require('fs');
const readline = require('readline');

/* You should introduce your file path*/
let fileName = 'test.txt';

var logger = fs.createWriteStream('output.txt', {
  flags: 'w'
});

var data = [];

var escapeNote = function(text){
  return text.split(' ').map(function(word){ return encodeURI(word); }).join(' ');
}

var unescapeNote = function(text){
  return text.split(' ').map(function(word){ return decodeURI(word); }).join(' ');
}

console.log('Start : ', new Date());

var reading = function(){
  let lineReader = readline.createInterface({
    input: fs.createReadStream(fileName)
  });

  lineReader.on('line', function(line){
    //It will return all lines in the node consle
    let newComment = unescape(line);
    logger.write(escapeNote(newComment) + '\n');
  });

  lineReader.on('close', function(){
    console.log('Finish: ' + new Date());
  });
}();

