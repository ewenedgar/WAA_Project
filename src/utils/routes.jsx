import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Index";
import Product from "../pages/product/Index";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
]);

export default router;
