"use strict";
class Stack {
  constructor() {
    this.numbers = [];
    this.maxHistory = [];
  }

  getStack() {
    return this.numbers;
  }

  getLastMaxNumber() {
    const [max] = this.maxHistory.slice(-1);
    return max;
  }

  pushNumber(numParam) {
    const num = Number(numParam);

    if (this.numbers.length === 0) {
      // if is the first number, therefore its also the max number
      this.maxHistory.push(num);
    } else {
      // check if the added number is greater than the last maxNumber
      const max = this.getLastMaxNumber();
      if (num >= max) {
        this.maxHistory.push(num);
      }
    }
    this.numbers.push(num);
  }

  popNumber() {
    const poppedNumber = this.numbers.pop();
    const max = this.getLastMaxNumber();
    if (poppedNumber === max) {
      this.maxHistory.pop();
    }
  }

  getMax() {
    return this.getLastMaxNumber();
  }
}

module.exports = Stack;
