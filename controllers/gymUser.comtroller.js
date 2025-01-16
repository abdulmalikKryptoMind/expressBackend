const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gymUserModal = require("../models/gym.models");

const createUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = {
      fullname,
      email,
      password: hashedpassword,
    };
    const response = await gymUserModal.create(newUser);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await gymUserModal.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }
    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Payload to generate JWT
    const payload = {
      fullName: user.fullname,
      email: user.email,
      password: user.password,
    };
    // Create a jsonwebtoken that expires in 5 days
    const token = jwt.sign(payload, "mysecretkey", { expiresIn: "5d" });
    res.status(200).json({ message: "User is logged in", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  userLogin,
};
