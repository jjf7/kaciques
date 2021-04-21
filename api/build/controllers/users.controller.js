"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = exports.changePass = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var changePass = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var password, newPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            password = req.body.password;

            if (!(password == "")) {
              _context.next = 5;
              break;
            }

            res.status(500).json("Por favor rellene todos los campos");
            _context.next = 17;
            break;

          case 5:
            _context.prev = 5;
            _context.next = 8;
            return _User["default"].encryptPassword(password);

          case 8:
            newPassword = _context.sent;
            _context.next = 11;
            return _User["default"].findByIdAndUpdate(req.params.id, {
              password: newPassword
            }, {
              "new": true,
              useFindAndModify: false
            }).populate("roles");

          case 11:
            res.status(200).json("success");
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](5);
            res.status(500).json(_context.t0.message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 14]]);
  }));

  return function changePass(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.changePass = changePass;

var createUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, username, email, password, roles, rolesFound, user;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;

            if (!(username == "" || email == "" || roles == "" || password == "")) {
              _context2.next = 5;
              break;
            }

            res.status(500).json("Por favor rellene todos los campos");
            _context2.next = 22;
            break;

          case 5:
            _context2.prev = 5;
            _context2.next = 8;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 8:
            rolesFound = _context2.sent;
            // creating a new User
            user = new _User["default"]({
              username: username,
              email: email,
              password: password,
              roles: rolesFound.map(function (role) {
                return role._id;
              })
            }); // encrypting password

            _context2.next = 12;
            return _User["default"].encryptPassword(user.password);

          case 12:
            user.password = _context2.sent;
            _context2.next = 15;
            return user.save();

          case 15:
            return _context2.abrupt("return", res.status(201).json("success"));

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](5);
            console.error(_context2.t0);
            res.status(500).json(_context2.t0.message);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 18]]);
  }));

  return function createUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var users, rows;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User["default"].find().populate("roles", {
              name: 1
            });

          case 3:
            users = _context3.sent;
            rows = users.map(function (i) {
              return {
                id: i._id,
                id_role: i.roles[0]._id,
                role: i.roles[0].name,
                username: i.username,
                email: i.email,
                password: i.password
              };
            });
            res.status(200).json(rows);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json(_context3.t0.message);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getUsers(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, username, email, roles;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, email = _req$body2.email, roles = _req$body2.roles;

            if (!(username == "" || email == "" || roles == "")) {
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
            return _User["default"].findByIdAndUpdate(req.params.id, req.body, {
              "new": true,
              useFindAndModify: false
            }).populate("roles");

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

  return function updateUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
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
            return _User["default"].findByIdAndRemove(query);

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

  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;