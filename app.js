const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const gameRoute = require("./routes/game.route.js");
const gymRoute = require("./routes/gym.route");
const connectDB = require("./db.config.js"); // Import the database connection function
const app = express();
const port = 3000;
// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors());

app.use("/api/wallets", gameRoute);
app.use("/api/gym", gymRoute);
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database, server not started");
  });
