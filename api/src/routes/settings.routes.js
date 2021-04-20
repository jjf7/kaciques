import { Router } from "express";
import * as settingsCtrl from "../controllers/settings.controller";
import { authJwt, verifySignup } from "../middlewares";
const router = Router();
router.get(
  "/settings",
  [authJwt.verifyToken],
  settingsCtrl.getSingleSettingById
);
router.put(
  "/settings/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  settingsCtrl.editSettingById
);
export default router;
