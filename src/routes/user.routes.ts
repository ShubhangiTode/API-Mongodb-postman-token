import express from "express";

import {
  userDetail,
  getuserDetail,
  deleteByuserId,
  updateByuserId,
  getByuserId,
} from "../controllers/users.controller";

const userRouter = express.Router();

userRouter.get("/user", userDetail);
userRouter.route("/user").get(getuserDetail).post(userDetail);
userRouter.route(":/id").get(getByuserId).put(updateByuserId);

userRouter.get("/getAlluser", getuserDetail);
userRouter.get("/getBYuserId/:id", getByuserId);
userRouter.delete("/deleteByuserId/:id", deleteByuserId);
userRouter.put("/update/:id", updateByuserId);

export default userRouter;
