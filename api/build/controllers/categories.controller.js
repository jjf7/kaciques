"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCategoryById = exports.editCategoryById = exports.newCategory = exports.getSingleCategoryById = exports.getAllCategories = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Categories = _interopRequireDefault(require("../models/Categories"));

var getAllCategories = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Categories["default"].find();

          case 3:
            data = _context.sent;
            res.status(200).json(data);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAllCategories(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllCategories = getAllCategories;

var getSingleCategoryById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var singleCategory;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Categories["default"].findById(req.params.id);

          case 2:
            singleCategory = _context2.sent;
            res.status(200).json(singleCategory);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSingleCategoryById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSingleCategoryById = getSingleCategoryById;

var newCategory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var title, newC;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            title = req.body.title;

            if (!(title == "")) {
              _context3.next = 5;
              break;
            }

            res.status(500).json("Por favor rellene todos los campos");
            _context3.next = 15;
            break;

          case 5:
            _context3.prev = 5;
            newC = new _Categories["default"]({
              title: title
            });
            _context3.next = 9;
            return newC.save();

          case 9:
            res.status(201).json("success");
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](5);
            res.status(500).json(_context3.t0.message);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 12]]);
  }));

  return function newCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.newCategory = newCategory;

var editCategoryById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var title;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            title = req.body.title;

            if (!(title == "")) {
              _context4.next = 5;
              break;
            }

            res.status(500).json("Por favor rellene todos los campos");
            _context4.next = 14;
            break;

          case 5:
            _context4.prev = 5;
            _context4.next = 8;
            return _Categories["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true,
              useFindAndModify: false
            });

          case 8:
            res.status(200).json("success");
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](5);
            res.status(500).json(_context4.t0.message);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 11]]);
  }));

  return function editCategoryById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editCategoryById = editCategoryById;

var deleteCategoryById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Categories["default"].findOneAndDelete(req.params.id, {
              useFindAndModify: false
            });

          case 2:
            res.status(204).json();

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteCategoryById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCategoryById = deleteCategoryById;