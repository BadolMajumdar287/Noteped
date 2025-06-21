import { Router } from "express";
import { userController } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const userRouter = Router();

const U = new userController();

// User Update Name
userRouter.put("/update/name",authMiddleware, U.userUpdateName);

//User Update Email
userRouter.put("/update/email",authMiddleware, U.userUpdateEmail);

//User Update Password
userRouter.put("/update/password",authMiddleware, U.userUpdatePassword); 