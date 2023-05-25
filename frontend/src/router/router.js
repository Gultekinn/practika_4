import SiteRoot from "../SiteRoot/SiteRoot";
import Add from "../pages/Site/Add/Add";
import Basket from "../pages/Site/Basket/Basket";
import Detail from "../pages/Site/Detail/Detail";
import Home from "../pages/Site/Home/Home";
import Wishlist from "../pages/Site/Wishlist/Wishlist";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
];
