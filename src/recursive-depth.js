const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let deep = 1;
        for (let i = 0; i < arr.length; i++) {
            let arrayDepth = 1;
            if (Array.isArray(arr[i])) {
                arrayDepth += this.calculateDepth(arr[i]);
                deep = Math.max(arrayDepth, deep);
            }
        }
        return deep;
    }
};
