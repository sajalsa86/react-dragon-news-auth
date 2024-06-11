import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import ErrorPage from "../Components/errorPage/ErrorPage";
import NotFound from "../Components/errorPage/NotFound";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
