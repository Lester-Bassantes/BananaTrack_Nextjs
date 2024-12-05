import { Sequelize, DataTypes } from '@sequelize/core';


const sequelize = new Sequelize({ dialect: SqliteDialect });

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_second_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_birthday: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);