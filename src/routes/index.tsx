import Home from "../Home";
import RecommendPage from "../components/RecommendPage";
import Detail from "../components/Detail";
import Dibs from "../components/Dibs";
import Cart from "../components/Cart";

export const routePages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recommend",
    element: <RecommendPage />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/dibs",
    element: <Dibs />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
