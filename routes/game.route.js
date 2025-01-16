const express = require("express");
const router = express.Router();
const {
  getWalletAddress,
  getSinglewalletAddress,
  postWalletAddress,
  updateWalletAddress,
  deleteWalletAddress,
} = require("../controllers/game.controller");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/", requireAuth, getWalletAddress);
router.get("/single-wallet-address/:id", getSinglewalletAddress);
router.post("/wallet-connect", postWalletAddress);
router.put("/wallet-address/:id", updateWalletAddress);
router.delete("/wallet-address/:id", deleteWalletAddress);
module.exports = router;
