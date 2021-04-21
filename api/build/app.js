"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _categories = _interopRequireDefault(require("./routes/categories.routes"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _settings = _interopRequireDefault(require("./routes/settings.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _initialSetup = require("./libs/initialSetup");

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _Role = _interopRequireDefault(require("./models/Role"));

var app = (0, _express["default"])(); //removeAllProducts()
//removeAllUsers();

(0, _initialSetup.createRoles)();
(0, _initialSetup.createAdmin)();
(0, _initialSetup.createSetting)();
app.set('PORT', process.env.PORT || 3001); // Middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json()); // Routes

app.get('/', function (req, res) {
  res.send('Welcome');
});
app.use(_categories["default"]);
app.use(_products["default"]);
app.use(_settings["default"]);
app.use(_user["default"]);
app.use(_auth["default"]);
app.get('/roles', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var roles;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Role["default"].find();

          case 2:
            roles = _context.sent;
            res.json(roles);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = app;
exports["default"] = _default;