import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller";
import { authJwt  } from "../middlewares";
const router = Router();
router.get(
  "/products",
  [authJwt.verifyToken],
  productsCtrl.getAllProducts
);
router.get(
  "/products/:id",
  [authJwt.verifyToken],
  productsCtrl.getSingleProductById
);
router.post(
  "/products",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.newProduct
);
router.put(
  "/products/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.editProductById
);
router.delete(
  "/products/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);
export default router;
