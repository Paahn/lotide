const tail = function(array) {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (i !== 0) {
      newArray = array[i];
    }
  }
  return newArray;
};


module.exports = tail;

