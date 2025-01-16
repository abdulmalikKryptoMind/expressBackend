const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    const decoded = jwt.verify(token, "mysecretkey");
    next();
  } else {
    res.status(401).json({ message: "Unthorized" });
  }
};
module.exports = {
  requireAuth,
};
