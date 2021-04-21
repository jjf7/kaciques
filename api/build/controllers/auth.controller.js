"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, newUser, foundRoles, role, savedUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Getting the Request Body
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles; // Creating a new User Object

            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 7;
            return _User["default"].encryptPassword(password);

          case 7:
            _context.t3 = _context.sent;
            _context.t4 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!req.body.roles) {
              _context.next = 17;
              break;
            }

            _context.next = 13;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 13:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 21;
            break;

          case 17:
            _context.next = 19;
            return _Role["default"].findOne({
              name: "user"
            });

          case 19:
            role = _context.sent;
            newUser.roles = [role._id];

          case 21:
            _context.next = 23;
            return newUser.save();

          case 23:
            savedUser = _context.sent;
            // Create a token
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 // 24 hours

            });
            return _context.abrupt("return", res.status(200).json({
              token: token
            }));

          case 28:
            _context.prev = 28;
            _context.t5 = _context["catch"](0);
            console.log(_context.t5);
            return _context.abrupt("return", res.status(500).json(_context.t5));

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 28]]);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, userFound, matchPassword, token, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

            if (!(email == "" || password == "")) {
              _context2.next = 5;
              break;
            }

            res.status(500).json("Por favor rellene todos los campos");
            _context2.next = 24;
            break;

          case 5:
            _context2.prev = 5;
            _context2.next = 8;
            return _User["default"].findOne({
              email: email
            }).populate("roles");

          case 8:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(400).json("No existe el usuario"));

          case 11:
            _context2.next = 13;
            return _User["default"].comparePassword(password, userFound.password);

          case 13:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 16;
              break;
            }

            return _context2.abrupt("return", res.status(401).json("Contrasena Invalida"));

          case 16:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 // 24 hours

            });
            data = {
              username: userFound.username,
              email: userFound.email,
              role: userFound.roles[0].name,
              token: token
            };
            res.json(data);
            _context2.next = 24;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](5);
            console.log(_context2.t0.message);

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 21]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;