const { Sequelize } = require('sequelize');
const util = require('util');

const logger = require('./logger');

const DB_HOST = 'localhost' || process.env.DB_HOST;
const DB_USERNAME = 'postgres' || process.env.DB_USERNAME;
const DB_PASSWORD = 'postgres' || process.env.DB_PASSWORD;
const DB_NAME = 'postgres' || process.env.DB_NAME;
console.log('dbname=', DB_NAME);
let sequelizeInstance = null;

async function connectDb() {
  try {
    const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
      host: DB_HOST,
      dialect: 'postgres',
      port: 5432,
    });
    logger.info(`Connected to database`);
    sequelizeInstance = sequelize;
  } catch (err) {
    logger.error(
      `Unable to connect to database \n${util.inspect(err, null, null)}`
    );
  }
  return sequelizeInstance;
}

async function getDb() {
  if (sequelizeInstance) {
    logger.info(`Connection available`);

    return sequelizeInstance;
  } else {
    logger.info(`Connection lost. Trying to setup new connection...`);
    return await connectDb();
  }
}

async function closeDB() {
  if (client) {
    return sequelizeInstance.close();
  }
}

module.exports = {
  getDb,
  connectDb,
  closeDB,
};
