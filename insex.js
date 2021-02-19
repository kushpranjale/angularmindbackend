const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://lav:fL6ytZix7wPGBT58@cluster0-jltch.mongodb.net/taskDB?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("database connected");
    }
  }
);
app.use(router);
app.listen(5000, () => {
  console.log("port 5000 connected");
});
