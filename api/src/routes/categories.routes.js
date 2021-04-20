import { Router } from "express";
import * as categoriesCtrl from "../controllers/categories.controller";
import { authJwt } from "../middlewares";
const router = Router();
router.get(
  "/categories",
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.getAllCategories
);
router.get(
  "/categories/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.getSingleCategoryById
);
router.post(
  "/categories",
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.newCategory
);
router.put(
  "/categories/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.editCategoryById
);
router.delete(
  "/categories/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.deleteCategoryById
);
export default router;
