const { DataTypes } = require('sequelize');
const { getDb } = require('../config/database');

async function sessionModel() {
  const sequelize = await getDb();
  const Session = sequelize.define(
    'sessions',
    {
      slot: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Session;
}
module.exports = sessionModel;
