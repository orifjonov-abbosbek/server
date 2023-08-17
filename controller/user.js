const User = require("../module/userModule");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(204).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.blockUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    await User.update({ status: "blocked" }, { where: { email } });
    res.status(200).json({ message: "User blocked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.unBlockUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    await User.update({ status: "active" }, { where: { email } });
    res.status(200).json({ message: "User unblocked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};