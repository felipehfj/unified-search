import { Document, Schema, model, Model } from "mongoose";

export interface IDocumentTagModel extends Document {
  documentId: string,
  tags: Array<string>,
  createdAt: Date,
}

const DocumentTagSchema = new Schema(
  {
    documentId: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: Array,
      required: true,
      default: [String]
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

const DocumentTagModel: Model<IDocumentTagModel> = model<IDocumentTagModel>("DocumentTag", DocumentTagSchema);
export default DocumentTagModel;