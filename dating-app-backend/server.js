const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

//Middlewares

//DB config
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));
//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello People");
});

//listener
app.listen(process.env.PORT, () => {
  console.log(`Listening on localhost..`);
});
