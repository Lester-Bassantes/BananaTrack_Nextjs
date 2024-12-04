import SideNav from "./sideNav";

export default function Layout({ children }) {
    return (
        <div className="d-flex vh-100">
            {/* Sidebar */}
            <SideNav />

            {/* Contenido principal */}
            <div className="flex-grow-1 p-4">
                {children}
            </div>
        </div>
    );
}
