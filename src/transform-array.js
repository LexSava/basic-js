const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Invalid');
  }

  if (!arr.length) {
    return arr;
  }

  const newArr = [];

      for (var i = 0; i < arr.length; i++) {
            if (arr[i] === '--double-next') {
            if (i+1 < arr.length) {
              newArr.push(arr[i+1]);
            }
          }  else if (arr[i] === '--discard-prev') {
            if (arr[i-2] !== '--discard-next') {
            newArr.pop();
            }
          }  else if (arr[i] === '--discard-next') {
              i++;
                if (i >= arr.length) {
                  break
                }
          }  else if (arr[i] === '--double-prev') {
                if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
                newArr.push(arr[i-1]);
              }
          }  else {
            newArr.push(arr[i]);
            }
        }
return newArr;
};
