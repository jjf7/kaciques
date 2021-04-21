"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var settingsCtrl = _interopRequireWildcard(require("../controllers/settings.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/settings", [_middlewares.authJwt.verifyToken], settingsCtrl.getSingleSettingById);
router.put("/settings/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], settingsCtrl.editSettingById);
var _default = router;
exports["default"] = _default;