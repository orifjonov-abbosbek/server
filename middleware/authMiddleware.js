const jwt = require("jsonwebtoken");
const User = require("../module/userModule");

module.exports = {
  async authenticate(req, res, next) {
    try {
      const token = req.header("Authorization").replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findByPk(decoded.userId);

      if (!user) {
        throw new Error();
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: "Authentication failed" });
    }
  },

  async authorizeAdmin(req, res, next) {
    if (req.user.role !== "admin") {
      return res.status(403).send({ error: "Not authorized" });
    }
    next();
  },
};
