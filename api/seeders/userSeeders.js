const { User } = require("../models");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 1; i++) {
    users.push({
      email: "admin@gmail.com",
      password: 1234,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
