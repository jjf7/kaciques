import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27027/bd_store_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database is connected..."))
  .catch((e) => console.log(e));