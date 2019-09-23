function sumItems(array) {
  let output = 0
  array.forEach((item) => {
    if (Array.isArray(item)) {
      output += sumItems(item);
    } 
    else {
      output += item;
    }
  });
  return output 
};
module.exports = sumItems;