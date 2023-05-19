import Home from "../Home";
import Create from "../user/Create";
import { createBrowserRouter } from "react-router-dom";
import PagePost from "../pagePost";
import PageCreate from "../pageCreate";

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