import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

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
];

export default routes;