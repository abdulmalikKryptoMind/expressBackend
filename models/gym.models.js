const mongoose = require("mongoose");

const gymUserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const gymUserModal = mongoose.model("gymuser", gymUserSchema);
module.exports = gymUserModal;
