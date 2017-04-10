function Matrix () {
  this.data = [];
}
Matrix.prototype.create = function create(initialData) {
  initialData.forEach(el => {
     if (!Array.isArray(this.data[el[0]])) {
       this.data[el[0]] = [];
     }
     this.data[el[0]][el[1]] = 1;
  });
}

Matrix.prototype.add = function add(arr) {
  let key = arr[0];
  let value = arr[1];
   if (!Array.isArray(this.data[key])) {
     this.data[key] = [];
   }
   this.data[key][value] = 1;
}

module.exports = Matrix;
