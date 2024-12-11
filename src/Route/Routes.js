import { createBrowserRouter } from "react-router-dom";
// import PrivateResource from "./PrivateResource";
import { Home, Login } from "../pages";


const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Home />,
    }
]);

export default routes;