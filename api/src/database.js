import mongoose from "mongoose";
console.log('paso por aqui')
mongoose
  .connect("mongodb://localhost:28017/bd_store_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database is connected..."))
  .catch((e) => { console.error('App starting error:', e);
  process.exit(1)});