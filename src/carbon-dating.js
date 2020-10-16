const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let newStr = parseFloat(sampleActivity);
  if (typeof (sampleActivity) === "string" && newStr > 0 && newStr < MODERN_ACTIVITY){
    return Math.ceil(Math.log(MODERN_ACTIVITY / newStr) / (Math.LN2 / HALF_LIFE_PERIOD));
  }else {
    return false;
  }
};
