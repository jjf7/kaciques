import mongoose from "mongoose";
mongoose.connect("mongodb+srv://root:EnNZRwLPzRxKz91Q@cluster0.say68.mongodb.net/bd_store_app?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database is connected..."))
  .catch((e) => { console.error('App starting error:', e)});