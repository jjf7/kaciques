"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

console.log('paso por aqui');

_mongoose["default"].connect("mongodb://localhost/bd_store_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Database is connected...");
})["catch"](function (e) {
  console.error('App starting error:', e);
  process.exit(1);
});