import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Index";
import Product from "../pages/product/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
]);

export default router;
