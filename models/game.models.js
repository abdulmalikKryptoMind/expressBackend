const mongoose = require("mongoose");

const GameSchema = mongoose.Schema(
  {
    walletAddress: {
      type: String,
      required: [true, "Wallet Address is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
