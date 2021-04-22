"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose["default"].connect("mongodb+srv://root:gS6LDd9fk2NFcB49@cluster0.say68.mongodb.net/bd_store_app?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Database is connected...");
})["catch"](function (e) {
  return console.log(e);
});