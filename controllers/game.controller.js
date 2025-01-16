const Game = require("../models/game.models");

const getWalletAddress = async (req, res) => {
  try {
    const response = await Game.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSinglewalletAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Game.findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const postWalletAddress = async (req, res) => {
  try {
    const response = await Game.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateWalletAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Game.findByIdAndUpdate(id, req.body);
    const updateGame = await Game.findById(id);
    res.status(200).json(updateGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteWalletAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Game.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getWalletAddress,
  getSinglewalletAddress,
  postWalletAddress,
  updateWalletAddress,
  deleteWalletAddress,
};
