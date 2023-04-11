import mongoose, { Schema, model } from "mongoose";
import { SignIn } from "../types/Auth";

const userSchema = new Schema<SignIn>({
  email: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  password: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const AuthModel = model<SignIn>("Auth", userSchema);

export default AuthModel;
