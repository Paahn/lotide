const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};
console.log(tail([3, 6, 7, 8]));

module.exports = tail;

