import { Schema, model } from "mongoose";

const settingsSchema = new Schema(
  {
    dolar: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Settings", settingsSchema);