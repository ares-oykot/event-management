import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-poppins border min-h-[100vh]">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;