import express from "express";
import {
  deleteById,
  createdesgn,
  getBydesgnId,
  getDesgnDetails,
  updateById,
} from "../controllers/desgn.controller";
import checkUserAuth from "../middleware/auth";
const designationRoute = express.Router();

designationRoute.get("/Designation", createdesgn);
designationRoute.delete("/deleteById/:id", deleteById);
designationRoute.get("/update/:id", updateById);
designationRoute.route("/Designation").get(getDesgnDetails).post(createdesgn);
designationRoute.route(":/id").get(getBydesgnId).put(updateById);
designationRoute.get("/getById/:id", getBydesgnId);
designationRoute.get("/designation/getAll", checkUserAuth, getDesgnDetails);
// designationRoute.get("auth/getAll", checkUserAuth, getDesgnDetails);
export default designationRoute;
