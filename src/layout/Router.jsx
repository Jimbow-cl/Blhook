import Home from "../Home";
import { createBrowserRouter } from "react-router-dom";
import PagePost from "../pagePost";
import PageCreate from "../pageCreate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/Create",
        element: <PageCreate />,
    },
    {
        path: "/Post",
        element: <PagePost />,
    },



])


export default router