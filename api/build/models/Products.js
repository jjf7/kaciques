"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productsSchema = new _mongoose.Schema({
  title: {
    type: String
  },
  price: Number,
  codebar: String,
  category: [{
    ref: "Category",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Products", productsSchema);

exports["default"] = _default;