"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var categoriesCtrl = _interopRequireWildcard(require("../controllers/categories.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/categories", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], categoriesCtrl.getAllCategories);
router.get("/categories/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], categoriesCtrl.getSingleCategoryById);
router.post("/categories", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], categoriesCtrl.newCategory);
router.put("/categories/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], categoriesCtrl.editCategoryById);
router["delete"]("/categories/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], categoriesCtrl.deleteCategoryById);
var _default = router;
exports["default"] = _default;