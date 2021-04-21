"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var usersCtrl = _interopRequireWildcard(require("../controllers/users.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/users/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkDuplicateUsernameOrEmail], usersCtrl.getUsers);
router.put("/users/change/pass/:id", usersCtrl.changePass);
router.post("/users", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkDuplicateUsernameOrEmail], usersCtrl.createUser);
router.put("/users/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkDuplicateUsernameOrEmail], usersCtrl.updateUser);
router["delete"]("/users/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkDuplicateUsernameOrEmail], usersCtrl.deleteUser);
var _default = router;
exports["default"] = _default;