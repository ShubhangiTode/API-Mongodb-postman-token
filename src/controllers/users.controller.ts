import { Request, Response } from "express";
import UserModel from "../models/users.models";
import desgnModel from "../models/desgn.models";
declare module "express" {
  export interface Request {
    user: any;
  }
}
declare module "express-serve-static-core" {
  export interface Request {
    user: any;
  }
}
export const getuserDetail = async (req: Request, resp: Response) => {
  const user = await UserModel.find();
  resp.json(user);
};

export const userDetail = async (req: Request, resp: Response) => {
  console.log("The request body is :", req.body);
  const { FirstName, LastName, Email, Password, isActive } = req.body;
  if (
    !FirstName ||
    !LastName ||
    !isActive ||
    !Email ||
    !Password ||
    !isActive
  ) {
    resp.status(400);
    throw new Error("All fields are mandatory !");
  }
  const userAvailable = await UserModel.findOne({ Email });
  if (userAvailable) {
    resp.status(400);
    throw new Error("User already registered");
  }

  const user1 = await UserModel.create({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.email,
    image: req.body.image,
    isActive: req.body.isActive,
    Password: req.body.Password,
  });
  //  designation by ID
  const Designation_id = await desgnModel.findById(req.body.designations._Id);

  if (!Designation_id) {
    resp.status(400);
    throw new Error("Invalid designation ID");
  }
  return resp.json({
    Designation_id: user1,
  });
};

export const getByuserId = async (req: Request, resp: Response) => {
  const id = req.params.id;
  const user = await UserModel.findById(id);
  resp.json(user);
};

export const deleteByuserId = async (req: Request, resp: Response) => {
  const id = req.params.id;
  const user = await UserModel.findByIdAndRemove(id);
  resp.json(user);
};
export const updateByuserId = async (req: Request, resp: Response) => {
  const id = req.params.id;
  const user1 = await desgnModel.findById(id);
  if (!user1) {
    resp.status(200);
    throw new Error("user not found");
  } else {
    const update = await desgnModel.findByIdAndUpdate(req.params.id, req.body);

    resp.json(update);
  }
};
