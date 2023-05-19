import Home from "../Home";
import Login from "../Login";
import Create from "../user/Create";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Create",
        element: <Create />,
    },



])


export default router