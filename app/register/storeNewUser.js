'use server';

import { createUser } from '../controllers/userController';
export async function createNewUser(formData) {
    const user = {
        user_name: formData.get('txtFirstName'),
        user_second_name: formData.get('txtSecondName'),
        user_username: formData.get('txtUsername'),
        user_birthday: formData.get('dateBirthday'),
        user_password: formData.get('txtPassword'),
    }

    console.log(user);
}