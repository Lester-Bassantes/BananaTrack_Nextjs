import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
    return (
        <nav className="d-flex flex-column bg-light vh-100" style={{ width: "250px" }}>
            {/* Logo */}
            <div className="p-3">
                <Link href="#" className="navbar-brand d-flex align-items-center">
                    <Image
                        src="/images/Grupo-Palmar-Logotipo.png"
                        width={250}
                        height={70}
                        alt="Company logo"
                    />
                </Link>
            </div>

            {/* Separador */}
            <hr className="m-0" />

            {/* Opciones de navegación */}
            <ul className="nav flex-column px-3 my-2">
                <li className="nav-item">
                    <Link href="/dashboard/tracking" className="nav-link">Entrega de rastreo</Link>
                </li>
                <li className="nav-item">
                    <Link href="/dashboard/inspection" className="nav-link">Control e inspección</Link>
                </li>
                <li className="nav-item">
                    <Link href="/dashboard/audit" className="nav-link">Auditoría de agricolas</Link>
                </li>
                <li className="nav-item">
                    <Link href="/dashboard/monitoring" className="nav-link">Monitoreo y seguimiento</Link>
                </li>
                <li className="nav-item">
                    <Link href="resourcesControl" className="nav-link">Control de recursos</Link>
                </li>
            </ul>

            {/* Botón del perfil al fondo */}
            <div className="mt-auto p-3">
                <button className="btn btn-outline-danger w-100">Log out</button>
            </div>
        </nav>
    );
}
