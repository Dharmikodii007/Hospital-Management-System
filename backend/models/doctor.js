"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Doctor extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Doctor.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM("Male", "Female"),
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      designation: DataTypes.STRING,
      department: {
        type: DataTypes.ENUM(
          "Neurology",
          "Orthopedics",
          "Gynaecology",
          "Microbiology"
        ),
        allowNull: false,
      },
      address: DataTypes.TEXT,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      birth: {
        type: DataTypes.DATEONLY,
      },
      education: DataTypes.STRING,
      doctorimg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );

  return Doctor;
};

