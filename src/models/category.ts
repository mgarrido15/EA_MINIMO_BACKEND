import { ObjectId, Schema, model } from "mongoose";

export interface ICategory {
    _id: ObjectId;
    name: string;
    description: string;
    products: {
        product_id: ObjectId;
      }[];

}

const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    products: [{ product_id: { type: Schema.Types.ObjectId, ref: "Product" } }],
});

export const CategoryModel = model<ICategory>("Category", categorySchema);
