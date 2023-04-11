import mongoose from "mongoose";

export interface SignIn {
  email: mongoose.Schema.Types.ObjectId;
  password: mongoose.Schema.Types.ObjectId;
}
