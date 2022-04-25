import Home from "../Home";
import RecommendPage from "../components/RecommendPage";
import Detail from "../components/Detail";
import Dibs from "../components/Dibs";
import Cart from "../components/Cart";
import SignIn from "../components/sign/SignIn";
import SignUp from "../components/sign/SignUp";

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
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
