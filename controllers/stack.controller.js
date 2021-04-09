"use strict";
function getStack(req, res) {
  res.status(200).json(req.dataProvider.getStack());
}
function pushNumber(req, res) {
  req.dataProvider.pushNumber(req.params.number);
  res.status(200).json(req.dataProvider.getStack());
}
function popNumber(req, res) {
  req.dataProvider.popNumber();
  res.status(200).json(req.dataProvider.getStack());
}

function getMaxNumber(req, res) {
  res.status(200).json(req.dataProvider.getMax());
}

module.exports = { getStack, pushNumber, popNumber, getMaxNumber };
