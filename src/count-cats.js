const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix = [] ) {
  let  newArr = matrix.flat().filter(index => index === '^^');
  return newArr.length;
};
