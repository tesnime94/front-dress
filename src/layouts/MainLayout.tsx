import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import "./MainLayout.css";

const MainLayout = () => {
    return ( 
        <div className="full-height">
            <Header />
            <Outlet/>
        </div>
     );
}
 
export default MainLayout;