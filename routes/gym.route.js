const express = require("express");
const router = express.Router();
const { createUser, userLogin } = require("../controllers/gymUser.comtroller");

router.post("/sign-up", createUser);
router.post("/sign-in", userLogin);

module.exports = router;
