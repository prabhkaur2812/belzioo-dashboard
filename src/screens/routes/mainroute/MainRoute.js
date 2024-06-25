import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/components/sidebar/Sidebar";
import Header from "../../pages/components/header/Header"

const MainRoute = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="d-flex flex-column main">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
export default MainRoute;
