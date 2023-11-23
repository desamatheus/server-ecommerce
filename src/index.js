/** @format */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const routes = require("./routes");

const app = express();

mongoose.connect(
  process.env.MONGO_URI,
  // { useUnifiedTopology: true, useNewUrlParser: true },
  console.log("entrou no database")
);
app.use(cors());
app.use(express.json());

app.listen(3333, () => console.log("serv rodando"));
