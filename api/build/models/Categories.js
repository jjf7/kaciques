"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var categoriesSchema = new _mongoose.Schema({
  title: String
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)("Category", categoriesSchema);

exports["default"] = _default;