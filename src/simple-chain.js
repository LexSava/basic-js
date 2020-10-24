const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof(position) != 'number' || position <= 0 || position >= this.getLength()) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.arr.length; i++) {
      str += `( ${this.arr[i]} )`;  
      if (i < this.getLength() - 1){
        str += '~~';
      }
    }
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;


