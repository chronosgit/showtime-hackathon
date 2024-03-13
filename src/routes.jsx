import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import NotFound from "./pages/not-found/NotFound";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/register",
        element: <Registration />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "*",
        element: <NotFound />
    }
];

export default routes;