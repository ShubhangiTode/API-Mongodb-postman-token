import { FilterQuery, UpdateQuery, QueryOptions, ObjectId } from "mongoose";
import User from "../models/users.models";

import { UserDocument } from "../models/users.models";

export function createUser1(UserDocument: {
  FirstName: string;
  LastName: string;
  Email: string;
  image: string;
  isActive: Boolean;
  Password: string;
}) {
  return User.create(UserDocument);
}
export function findUser(
  query: FilterQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) {
  return User.find(query, {}, options);
}

export function findOneAndUpdate(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return User.findOneAndUpdate(query, update, options);
}

export function deleteUser(query: FilterQuery<UserDocument>) {
  return User.deleteOne(query);
}
