import designationRoute from "./designation.routs";
import userRouter from "./user.routes";
import authRoute from "./auth.routs";

const express = require("express");

const router = express();

router.use("/", designationRoute);
router.use("/", userRouter);
router.use("/", authRoute);

export default router;
