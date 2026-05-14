import mongoose, { Schema } from "mongoose";

export type CategoryDocument = {
  categoryName: string;
};
const CategorySchema = new mongoose.Schema<CategoryDocument>({
  categoryName: {
    type: String,
    required: true,
  },
});
export const CategoryModel = mongoose.model("Category", CategorySchema);
