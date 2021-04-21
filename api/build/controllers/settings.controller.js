"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editSettingById = exports.getSingleSettingById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Settings = _interopRequireDefault(require("../models/Settings"));

var getSingleSettingById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var single;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Settings["default"].find();

          case 2:
            single = _context.sent;
            res.status(200).json(single);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSingleSettingById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSingleSettingById = getSingleSettingById;

var editSettingById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var updated;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Settings["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true,
              useFindAndModify: false
            });

          case 3:
            updated = _context2.sent;
            res.status(200).json('success');
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function editSettingById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.editSettingById = editSettingById;