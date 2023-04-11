import express from "express";
import { SignIn } from "../controllers/auth.controller";
import checkUserAuth from "../middleware/auth";
const authRoute = express.Router();

authRoute.route("/auth/getAll").get(checkUserAuth);
authRoute.post("/auth/signin", SignIn);

export default authRoute;
