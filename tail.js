// returns the array without the first element of the input array
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

module.exports = tail;

