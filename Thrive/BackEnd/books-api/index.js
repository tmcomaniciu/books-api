//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Configuration
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Controller
const booksController = require("./controllers/books_controller");
app.use("/books", booksController);

//Listen
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
