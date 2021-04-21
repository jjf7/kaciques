"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var settingsSchema = new _mongoose.Schema({
  dolar: Number
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Settings", settingsSchema);

exports["default"] = _default;