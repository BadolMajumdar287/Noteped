import {Router} from "express"
import { AuthContrller } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const AuthRouter = Router();

const A = new AuthContrller();


AuthRouter.post("/register", A.register);

AuthRouter.post("/login", A.login);

AuthRouter.get("/session",authMiddleware, A.session);

AuthRouter.get("/logout",authMiddleware, A.logout);