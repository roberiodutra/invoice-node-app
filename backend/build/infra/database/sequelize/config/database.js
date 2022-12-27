"use strict";require('dotenv/config');


const databaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'cashforce_v3',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = databaseConfig;
