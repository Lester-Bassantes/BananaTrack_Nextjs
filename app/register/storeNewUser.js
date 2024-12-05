'use server';

export async function createNewUser(formData) {
    const user = {
        name: formData.get('txtFirstName'),
        secondName: formData.get('txtSecondName'),
        username: formData.get('txtUsername'),
        birthday: formData.get('dateBirthday'),
        password: formData.get('txtPassword'),
    }

    console.log(user);
}