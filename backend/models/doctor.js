"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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

