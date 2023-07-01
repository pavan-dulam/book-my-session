const { DataTypes } = require('sequelize');
const { getDb } = require('../config/database');
let Student;
async function studentModel() {
  const sequelize = await getDb();
  Student = await sequelize.define(
    'students',
    {
      university_id: {
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
  console.log('Student1=', Student);
  return Student;
}
module.exports = studentModel;
