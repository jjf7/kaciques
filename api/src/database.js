import mongoose from "mongoose";
console.log('paso por aqui')
mongoose
  .connect("mongodb://raspberrypi:27017/bd_store_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database is connected..."))
  .catch((e) => console.log(e));