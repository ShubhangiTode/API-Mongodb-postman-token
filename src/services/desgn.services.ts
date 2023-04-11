import { FilterQuery, UpdateQuery, QueryOptions, ObjectId } from "mongoose";
import User from "../models/users.models";
import designation from "../models/desgn.models";

import { UserDocument } from "../models/users.models";

export function createUser(UserDocument: {
  title: string;
  isActive: Boolean;
  Password: string;
}) {
  return designation.create(UserDocument);
}

export function findUser(
  query: FilterQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) {
  return designation.find(query, {}, options);
}

export function findOneAndUpdate(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return designation.findOneAndUpdate(query, update, options);
}

export function deleteUser(query: FilterQuery<UserDocument>) {
  return designation.deleteOne(query);
}
