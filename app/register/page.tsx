import Image from "next/image";
import Form from "next/form";
import { createNewUser } from "./storeNewUser";
import Swal from "sweetalert2";

export default function Page() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-secondary-subtle">
            <Form action={createNewUser} className="bg-light p-4 col-3 animate__animated animate__fadeInLeft rounded-4">
                <div className="container-logo d-flex justify-content-center mb-4">
                    <Image
                        src="/images/Grupo-Palmar-Logotipo.png"
                        width={200}
                        height={100}
                        alt="BananaTrack Logo"
                    />
                </div>

                <div className="form-floating mb-2">
                    <input id="txtFirstName" name="txtFirstName" type="text" className="form-control" placeholder="Nombre" maxLength={25} required />
                    <label htmlFor="txtFirstName">Nombre</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="txtSecondName" id="txtSecondName" className="form-control" placeholder="Apellido" maxLength={25} required />
                    <label htmlFor="txtSecondName">Apellido</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" name="txtUsername" className="form-control" id="txtSUsername" placeholder="Usuario" maxLength={25} required />
                    <label htmlFor="txtUsername">Nombre de usuario</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="date" name="dateBirthday" id="dateBirthday" className="form-control" />
                </div>

                <div className="form-floating mb-2">
                    <input type="password" name="txtPassword" id="txtPassword" className="form-control" placeholder="Contraseña" required />
                    <label htmlFor="txtPassword">Contraseña</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="password" name="txtPasswordConfirm" id="txtPasswordConfirm" className="form-control" placeholder="Confirmar contraseña" required />
                    <label htmlFor="txtPasswordConfirm">Confirmar contraseña</label>
                </div>

                <button type="submit" className="btn btn-outline-primary w-100" id="btnRegister">Crear cuenta</button>
            </Form >
        </div >
    );
}