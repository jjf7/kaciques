"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProductById = exports.editProductById = exports.newProduct = exports.getSingleProductById = exports.getAllProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Products = _interopRequireDefault(require("../models/Products"));

var getAllProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var count, data, rows;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Products["default"].estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 13;
              break;
            }

            _context.next = 7;
            return _Products["default"].find().populate("category", {
              title: 1
            });

          case 7:
            data = _context.sent;
            console.log(data[0].category[0].title);
            rows = data.map(function (i) {
              return {
                id: i._id,
                id_categoria: i.category[0]._id,
                category: i.category[0].title,
                title: i.title,
                price: i.price,
                codebar: i.codebar
              };
            });
            res.status(200).json(rows);
            _context.next = 14;
            break;

          case 13:
            res.status(200).json([{}]);

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0.message);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function getAllProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllProducts = getAllProducts;

var getSingleProductById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var singleProduct;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Products["default"].findById(req.params.id).populate("category");

          case 2:
            singleProduct = _context2.sent;
            res.status(200).json(singleProduct);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSingleProductById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSingleProductById = getSingleProductById;

var newProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, title, price, codebar, category, newCategory;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, price = _req$body.price, codebar = _req$body.codebar, category = _req$body.category;

            if (!(title == "" || price == "" || codebar == "" || category == "")) {
              _context3.next = 5;
              break;
            }

            res.status(500).json("Por favor rellene todos los campos");
            _context3.next = 16;
            break;

          case 5:
            _context3.prev = 5;
            newCategory = new _Products["default"]({
              title: title,
              price: price,
              codebar: codebar,
              category: category
            });
            _context3.next = 9;
            return newCategory.save();

          case 9:
            res.status(201).json("success");
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](5);
            console.log(_context3.t0.message);
            res.status(500).json(_context3.t0.message);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 12]]);
  }));

  return function newProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.newProduct = newProduct;

var editProductById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, title, price, codebar, category;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, title = _req$body2.title, price = _req$body2.price, codebar = _req$body2.codebar, category = _req$body2.category;

            if (!(title == "" || price == "" || codebar == "" || category == "")) {
              _context4.next = 5;
              break;
            }

            res.status(500).json("Por favor rellene todos los campos");
            _context4.next = 15;
            break;

          case 5:
            console.log(req.body);
            _context4.prev = 6;
            _context4.next = 9;
            return _Products["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true,
              useFindAndModify: false
            }).populate("category");

          case 9:
            res.status(200).json("success");
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](6);
            res.status(500).json(_context4.t0.message);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[6, 12]]);
  }));

  return function editProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editProductById = editProductById;

var deleteProductById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var query;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            query = {
              _id: req.params.id
            };
            _context5.prev = 1;
            _context5.next = 4;
            return _Products["default"].findByIdAndRemove(query);

          case 4:
            console.log("Eliminado ID: ", req.params.id);
            res.status(200).json("success");
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json(_context5.t0.message);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function deleteProductById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProductById = deleteProductById;