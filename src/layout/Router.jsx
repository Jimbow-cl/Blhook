import Home from "../Home";
import { createBrowserRouter } from "react-router-dom";
import PagePost from "../pagePost";
import PageCreate from "../pageCreate";
import PageProfil from "../pageProfil";

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

    {
        path: "/Connect",
        element: <PagePost />,
    },
    {
        path: "/Disconnect",
        element: <PagePost />,
    },
    {
        path: "/Profil",
        element: <PageProfil />,
    },
    {
        path: "/Contact",
        element: <PagePost />,
    },



])


export default router