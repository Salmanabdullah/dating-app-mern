const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const Cors = require("cors");
const storePostController = require("./Controllers/storePost");
const getPostController = require("./Controllers/getPost");

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));
//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello People");
});

app.post("/dating/cards", storePostController);
app.get("/dating/cards", getPostController);

//listener
app.listen(process.env.PORT, () => {
  console.log(`Listening on localhost..`);
});
