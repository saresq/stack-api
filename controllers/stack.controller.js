"use strict";

const e = require("express");

function getStack(req, res) {
  res.status(200).json(req.dataProvider.getStack());
}
function pushNumber(req, res) {
  if (isNaN(req.params.number)) {
    res
      .status(400)
      .json(
        "Send a correct number value, strings or other data type is not allowed."
      );
  } else {
    // const num = Number(req.params.number);
    req.dataProvider.pushNumber(req.params.number);
    res.status(200).json(req.dataProvider.getStack());
  }
}
function popNumber(req, res) {
  req.dataProvider.popNumber();
  res.status(200).json(req.dataProvider.getStack());
}

function getMaxNumber(req, res) {
  res.status(200).json(req.dataProvider.getMax());
}

module.exports = { getStack, pushNumber, popNumber, getMaxNumber };
