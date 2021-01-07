"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Lingga",
        profession: "Admin Micro",
        role: "admin",
        email: "linggawahyurochim@gmail.com",
        password: await bcrypt.hash("lingga1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Fara",
        profession: "Front End Developer",
        role: "student",
        email: "faradilah2134@gmail.com",
        password: await bcrypt.hash("fara1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
