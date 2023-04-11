import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/users.models";

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

export const SignIn = async (req: Request, res: Response) => {
  const { Email, Password } = req.body;

  const existingUser = await UserModel.findOne({ Email, Password });

  if (!existingUser) {
    return res.status(401).send({ error: "check  your email and password." });
  }

  if (Password != existingUser.Password) {
    return res.status(401).send({ error: "please check email and password." });
  }

  try {
    const token = jwt.sign({ Email, Password }, "helloshubh", {
      expiresIn: 60,
    });

    res.status(200).json({ token: token, message: "Token is created" });
  } catch (error) {
    res.status(401).json({ message: "Token not created" });
  }
};
