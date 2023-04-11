import { Schema, model, Document } from "mongoose";
import { Designation } from "../types/Designation";
export interface UserDocument extends Document {
  id: Schema.Types.ObjectId;
  title: string;
  isActive: Boolean;
}

const desgnschema = new Schema<Designation>({
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const desgnModel = model<Designation>("Designation", desgnschema);

export default desgnModel;
