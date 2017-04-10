var data = [
  [0,1],
  [0,2],
  [0,3],
  [1,2],
  [1,4],
  [1,3],
  [2,4],
  [3,5],
  [3,7],
  [3,4],
  [3,9],
  [7,1],
]
var Matrix = require('./matrix');
var mat = new Matrix();
mat.create(data);
console.log(mat.data)

var Adjacency = require('./adjacency_list');
var adj = new Adjacency();
adj.create(data);
console.log(adj.data)

var Obj = require('./mappedObject');
var obj = new Obj();
obj.create(data);
console.log(obj.data)
