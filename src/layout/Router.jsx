import Home from "../Home";
import Login from "../Login";
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


])


export default router