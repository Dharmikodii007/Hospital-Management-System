const { where } = require("sequelize");
const db = require("../models/index");
const User = db.User;

const adminService = {
  getAdminService: async (username, password) => {
    if (!username || !password) {
      throw new Error("username and password are required!");
    }

    const exiting = await User.findOne({ where: { username } });

    if (!exiting) {
      throw new Error("admin not exit!");
    }

    if (exiting.password != password) {
      throw new Error("password is does not match!");
    }

    return exiting;
  },
};

module.exports = adminService;
