import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Error from "../Pages/Error/Error";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import PrivetRouteAbout from "./PrivetRoute/PrivetRouteAbout";
import PrivetRouteContact from "./PrivetRoute/PrivetRouteContact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/fakeData.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/details/:id",
                element: <PrivetRoute><CardDetails></CardDetails></PrivetRoute>,
                loader: () => fetch("/fakeData.json")
            },
            {
                path: "/about",
                element: <PrivetRouteAbout><About></About></PrivetRouteAbout>
            },
            {
                path: "/contact",
                element: <PrivetRouteContact><Contact></Contact></PrivetRouteContact>
            }
        ]
    }
]);
export default router;