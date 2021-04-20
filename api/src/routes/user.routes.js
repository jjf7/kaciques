import { Router } from "express";
const router = Router();
import * as usersCtrl from "../controllers/users.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get(
  "/users/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.getUsers
);

router.put("/users/change/pass/:id", usersCtrl.changePass);

router.post(
  "/users",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

router.put(
  "/users/:id",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.updateUser
);
router.delete(
  "/users/:id",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.deleteUser
);

export default router;
