"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSetting = exports.removeAllUsers = exports.removeAllProducts = exports.createAdmin = exports.createRoles = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Settings = _interopRequireDefault(require("../models/Settings"));

var _Products = _interopRequireDefault(require("../models/Products"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var createRoles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var count, values;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Role["default"].estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _Role["default"]({
              name: "user"
            }).save(), new _Role["default"]({
              name: "admin"
            }).save()]);

          case 8:
            values = _context.sent;
            console.log(values);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var user, roles;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: "admin@localhost"
            });

          case 2:
            user = _context2.sent;
            _context2.next = 5;
            return _Role["default"].find({
              name: {
                $in: ["admin"]
              }
            });

          case 5:
            roles = _context2.sent;
            console.log(roles);

            if (user) {
              _context2.next = 17;
              break;
            }

            _context2.t0 = _User["default"];
            _context2.next = 11;
            return _bcryptjs["default"].hash("admin", 10);

          case 11:
            _context2.t1 = _context2.sent;
            _context2.t2 = roles.map(function (role) {
              return role._id;
            });
            _context2.t3 = {
              username: "admin",
              email: "admin@localhost",
              password: _context2.t1,
              roles: _context2.t2
            };
            _context2.next = 16;
            return _context2.t0.create.call(_context2.t0, _context2.t3);

          case 16:
            console.log('Admin User Created!');

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createAdmin = createAdmin;

var removeAllProducts = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Products["default"].remove({});

          case 2:
            console.log('Se han eliminado todos los productos');

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function removeAllProducts() {
    return _ref3.apply(this, arguments);
  };
}();

exports.removeAllProducts = removeAllProducts;

var removeAllUsers = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User["default"].remove({});

          case 2:
            console.log('Se han eliminado todos los usuarios');

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function removeAllUsers() {
    return _ref4.apply(this, arguments);
  };
}();

exports.removeAllUsers = removeAllUsers;

var createSetting = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var count, values;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Settings["default"].estimatedDocumentCount();

          case 3:
            count = _context5.sent;
            console.log(count);

            if (!(count > 0)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return");

          case 7:
            _context5.next = 9;
            return new _Settings["default"]({
              dolar: 2334983.55
            }).save();

          case 9:
            values = _context5.sent;
            console.log(values);
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function createSetting() {
    return _ref5.apply(this, arguments);
  };
}();

exports.createSetting = createSetting;