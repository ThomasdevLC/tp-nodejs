const express = require("express");
const gameRouter = require("./router/gameRouter");
require("dotenv").config();
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("App running on port 3000");
});

app.use("/game", gameRouter);
