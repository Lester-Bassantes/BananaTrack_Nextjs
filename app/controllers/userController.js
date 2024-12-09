import User from '../models/User';
import bcrypt from 'bcrypt';

export async function createUser(user) {
    try {
        const { user_name, user_second_name, user_username, user_birthday, user_password } = user;
        const hashedPassword = await bcrypt.hash(user_password, 10);
        const newUser = await User.create({
            user_name,
            user_second_name,
            user_username,
            user_birthday,
            user_password: hashedPassword,
        });
        return Response.status(200).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error(error);
        return Response.status(500).json({ message: 'Error al crear el usuario' });
    }
}