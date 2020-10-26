const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { 
      repeatTimes = 1, 
      separator = '+', 
      addition, 
      additionRepeatTimes = 1, 
      additionSeparator  = '|'
  } = options;

  let newStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes);
  newStr = newStr.substring(0, newStr.length - additionSeparator.length);

  if (newStr === 'undefined') {
    newStr = ''
  }
  let res = `${str}${newStr}${separator}`.repeat(repeatTimes);

  return res.substring(0, res.length - separator.length);
};
