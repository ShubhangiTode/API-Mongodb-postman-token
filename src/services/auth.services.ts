import { SignIn } from "../types/Auth";
import AuthModel from "../models/auth.model";

export function Auth(input: SignIn["email"]) {
  return AuthModel.findOne({ input });
}
