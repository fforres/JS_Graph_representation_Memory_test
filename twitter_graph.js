var os = require('os');
var fs = require('fs');

function exampleMatrix() {
  console.log(process.memoryUsage().heapTotal / 8192);
  console.time('MATRIX');
  var Matrix = require('./matrix');
  var readableStream = fs.createReadStream('twitter_combined.txt');
  readableStream.setEncoding('utf8');

  var mat = new Matrix();

  readableStream.on('data', function(chunk) {
    chunk.toString().split(os.EOL).forEach(el => {
      mat.add(el.split(' ').map(Number));
    });
  });
  readableStream.on('end', function() {
    console.timeEnd('MATRIX');
    console.log(process.memoryUsage().heapTotal / 8192);
  });
}

function exampleMappedObjects () {
  console.log(process.memoryUsage().heapTotal / 8192);
  console.time('MAPPED OBJECTS');
  var Matrix = require('./mappedObject');
  var readableStream = fs.createReadStream('twitter_combined.txt');
  readableStream.setEncoding('utf8');

  var mat = new Matrix();

  readableStream.on('data', function(chunk) {
    chunk.toString().split(os.EOL).forEach(el => {
      mat.add(el.split(' ').map(Number));
    });
  });
  readableStream.on('end', function() {
    console.timeEnd('MAPPED OBJECTS');
    console.log(process.memoryUsage().heapTotal / 8192);
  });
}

function exampleAdjacencyList () {
  console.log(process.memoryUsage().heapTotal / 8192);
  console.time('AdjacencyList');
  var Matrix = require('./adjacency_list');
  var readableStream = fs.createReadStream('twitter_combined.txt');
  readableStream.setEncoding('utf8');

  var mat = new Matrix();

  readableStream.on('data', function(chunk) {
    chunk.toString().split(os.EOL).forEach(el => {
      mat.add(el.split(' ').map(Number));
    });
  });
  readableStream.on('end', function() {
    console.timeEnd('AdjacencyList');
    console.log(process.memoryUsage().heapTotal / 8192);
  });
}

exampleMatrix();
// exampleMappedObjects();
// exampleAdjacencyList()
