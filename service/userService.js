const User = require("../module/userModule");

module.exports = {
  async getUsers() {
    const users = await User.findAll();
    return users;
  },

  async blockUser(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    user.status = "blocked";
    await user.save();
    return user;
  },

  async unblockUser(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    user.status = "active";
    await user.save();
    return user;
  },

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
  },
};
