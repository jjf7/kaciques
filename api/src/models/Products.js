import { Schema, model } from "mongoose";
const productsSchema = new Schema(
  {
    title: { type: String },
    price: Number,
    codebar: String,
    category: [
      {
        ref: "Category",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Products", productsSchema);