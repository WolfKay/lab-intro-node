var SortedList = function() {


};

SortedList.prototype = Object.create(Array.prototype);

SortedList.prototype.size = function() {return this.length;}

SortedList.prototype.add     = function(item) {
  this.push(item);
  this.sort(function(a,b){return a - b});
}
SortedList.prototype.get     = function(pos) {
  return this[pos-1];
}
SortedList.prototype.max     = function() {
  return this[this.length-1];
}
SortedList.prototype.min     = function() {
  return this[0];
}
SortedList.prototype.average = function() {
  return this.sum() / this.length;
}
SortedList.prototype.sum     = function() {
  var sum = 0;
  this.forEach(function(number){
    sum += number;
  })
  return sum;
}

module.exports = SortedList;

