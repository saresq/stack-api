"use strict";
const Stack = require("../models/stack");
const newStack = new Stack();

// Add instance of Stack
const injectStack = function (req, res, next) {
  req.dataProvider = newStack;
  next();
};

module.exports = injectStack;
