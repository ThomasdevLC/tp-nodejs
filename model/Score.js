const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  wins: { type: Number, default: 0 },
  loses: { type: Number, default: 0 },
  ties: { type: Number, default: 0 },
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
