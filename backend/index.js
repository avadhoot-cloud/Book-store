import express from "express";
import { port, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.get("/", (req, res) => {
    console.log(req);
    return res.status(200).send("Hello World");
});

app.post('/books', async (req, res) => {
  try {
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ){
      return res.status(400).send("All fields are required");
    }
  } catch(error) {
      console.log(error.message);
      return res.status(500).send(error.message);
  }
});

mongoose.connect(mongoDBURL)
.then(() => {
  console.log("Connected to MongoDB");
  
app.listen(port, () => {
  console.log(`listening on port ${port}`);  
});
})
.catch((error) => { 
  console.log(error);
});