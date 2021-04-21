"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var productsCtrl = _interopRequireWildcard(require("../controllers/products.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/products", [_middlewares.authJwt.verifyToken], productsCtrl.getAllProducts);
router.get("/products/:id", [_middlewares.authJwt.verifyToken], productsCtrl.getSingleProductById);
router.post("/products", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.newProduct);
router.put("/products/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.editProductById);
router["delete"]("/products/:id", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.deleteProductById);
var _default = router;
exports["default"] = _default;