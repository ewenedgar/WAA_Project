import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Index";
import Product from "../pages/product/Index";
import Login from "../pages/login/Index";

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
    path: "/login",
    element: <Login />,
  },
]);

export default router;
