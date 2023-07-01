const { DataTypes } = require('sequelize');
const { getDb } = require('../config/database');

async function deanModel() {
  const sequelize = await getDb();
  const Dean = sequelize.define(
    'deans',
    {
      universityId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Dean;
}
module.exports = deanModel();
