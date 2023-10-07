import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto font-poppins border min-h-[100vh]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;