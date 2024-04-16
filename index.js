const express = require("express");
const mongoose = require("mongoose");
const gameRouter = require("./router/gameRouter");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.use("/game", gameRouter);
