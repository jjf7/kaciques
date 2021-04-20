import { Schema, model } from "mongoose";
const categoriesSchema = new Schema({
  title: String,
},{
    versionKey: false
});
export default model("Category", categoriesSchema);