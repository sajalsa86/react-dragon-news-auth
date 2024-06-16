import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import ErrorPage from "../Components/errorPage/ErrorPage";
import NotFound from "../Components/errorPage/NotFound";
import Register from "../pages/register/Register";
import PostDetails from "../pages/postDetails/PostDetails";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <PostDetails></PostDetails>,
          </PrivateRoute>
        ),
        loader: () => fetch("/public/news.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
