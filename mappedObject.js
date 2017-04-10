function Obj () {
  this.data = {};
}
Obj.prototype.create = function create(initialData) {
  initialData.forEach(el => {
     if (!this.data[el[0]]) {
       this.data[el[0]] = {};
     }
     this.data[el[0]][el[1]] = true;
  });
}
Obj.prototype.add = function add(el) {
  if (!this.data[el[0]]) {
    this.data[el[0]] = {};
  }
  this.data[el[0]][el[1]] = true;
}

module.exports = Obj;
