"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "shift_managements",
      "doctorId",
      "doctor_id"
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "shift_managements",
      "doctor_id",
      "doctorId"
    );
  },
};

