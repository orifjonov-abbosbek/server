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

exports.blockUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.update({ status: "blocked" }, { where: { id } });
    res.status(200).json({ message: "User blocked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.unBlockUser = async (req, res) => {
  try {
    const { id } = req.params;
    await validateStatus("unblocked"); // Corrected status value
    await User.update({ status: "active" }, { where: { id } });
    res.status(200).json({ message: "User unblocked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


async function validateStatus(status) {
  if (status !== "blocked" && status !== "unblocked") {
    throw new Error("Invalid status value");
  }
}

