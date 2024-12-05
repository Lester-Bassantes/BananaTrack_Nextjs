import Image from "next/image";
import Form from "next/form";

export default function Page() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-secondary-subtle">
            <Form action="" className="bg-light p-4 col-3 animate__animated animate__fadeInLeft rounded-4">
                <div className="container-logo d-flex justify-content-center mb-4">
                    <Image
                        src="/images/Grupo-Palmar-Logotipo.png"
                        width={200}
                        height={100}
                        alt="BananaTrack Logo"
                    />
                </div>

                <div className="form-floating mb-4">
                    <input id="txtUsername" name="txtUsuario" type="text" className="form-control" placeholder="Usuario" required />
                    <label htmlFor="txtUsername">Usuario</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="password" name="txtPassword" id="txtPassword" className="form-control" placeholder="Contraseña" required />
                    <label htmlFor="txtPassword">Contraseña</label>
                </div>

                <div className=" mb-5">
                    <input type="checkbox" name="form-check-input " id="boxRememberPass" />
                    <label htmlFor="boxRememberPass" className="form-check-label ms-1">Recordar contraseña</label>
                </div>

                <button type="submit" className="btn btn-outline-success w-100" id="btnLogin">Ingresar</button>
            </Form>
        </div>
    );
}