const assertEqual = require('./assertEqual')

const findKey = (obj, callback) => Object.keys(obj).find(key => callback(obj[key]));

const youLookForIt = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)
console.log(youLookForIt);

assertEqual(youLookForIt, "noma");
module.exports = findKey;