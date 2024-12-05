import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

const sequelize = new Sequelize({
    dialect: MySqlDialect,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 3306,
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}