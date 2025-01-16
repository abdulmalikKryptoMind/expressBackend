const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://abdulmalikqayyum277:lvZpP0zkx1Eq3ppm@cluster0.0uahi.mongodb.net/stx-wallet";

const conectDB = async () => {
  try {
    await mongoose.connect(dbURI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
};
module.exports = conectDB;
