import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.host,
    dialect: 'mysql'
});

export async function GET() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return Response.json({ message: 'Conectado a la base de datos' });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


