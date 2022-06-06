const express = require("express");
const cors = require("cors");

const foodController = require("./controller/food.controller");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/meds", foodController);

module.exports = app;