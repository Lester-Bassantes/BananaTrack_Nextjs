import SideNav from '../components/sideNav';

export default function Layout({ children }) {
    return (
        <div className="d-flex vh-100">
            {/* Sidebar */}
            <SideNav />

            {/* Main */}
            <div className="flex-grow-1 p-4">
                {children}
            </div>
        </div>
    );
}
