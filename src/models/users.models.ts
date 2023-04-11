import mongoose, { Schema, model } from "mongoose";
import { User } from "../types/User";

export interface UserDocument extends Document {
  FirstName: string;
  LastName: string;
  Email: string;
  Designation_id: string;
  Password: string;
  isActive: Boolean;
  image: string;
}

const userSchema = new Schema<User>({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },

  Password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
  },
  // Designation_id: {
  //   type: String,
  //   ref: User,
  // },
});

const UserModel = model<User>("User", userSchema);
export default UserModel;
