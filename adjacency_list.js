function Adj () {
  this.data = [];
}
Adj.prototype.create = function create(initialData) {
  initialData.forEach(el => {
     if (!Array.isArray(this.data[el[0]])) {
       this.data[el[0]] = [];
     }
     this.data[el[0]].push(el[1]);
  });
}
Adj.prototype.add = function add(el) {
   if (!this.data[el[0]]) {
     this.data[el[0]] = [];
   }
   this.data[el[0]].push(el[1]);
}

module.exports = Adj;
