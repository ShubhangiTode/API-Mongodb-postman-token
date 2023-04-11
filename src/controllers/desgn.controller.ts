import { Request, Response } from "express";
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
//------get All Data
export const getDesgnDetails = async (req: Request, resp: Response) => {
  const user1 = await desgnModel.find();
  resp.json(user1);
};

//----add/post data
export const createdesgn = async (req: Request, res: Response) => {
  console.log("The request body is :", req.body);
  const { title, Password } = req.body;
  if (!title || !Password) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const user = await desgnModel.create({
    title: req.body.title,
    isActive: req.body.isActive,
    Password: req.body.Password,
  });
  return res.json({
    Designation: user,
  });
};

//----get by id
export const getBydesgnId = async (req: Request, resp: Response) => {
  const id = req.params.id;
  const user1 = await desgnModel.findById(id);
  resp.json(user1);
};
//------update the data
export const updateById = async (req: Request, resp: Response) => {
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
//----delete the data
export const deleteById = async (req: Request, resp: Response) => {
  const id = req.params.id;
  const user1 = await desgnModel.findByIdAndRemove(id);
  resp.json(user1);
};
