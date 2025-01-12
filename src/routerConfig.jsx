import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodCatalog from "./Pages/FoodCatalog";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import ErrorPage from "./Pages/ErrorPage";
import RestProfile from "./Pages/RestProfile.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";

export const routerConfiguration = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/FoodCatalog", element: <FoodCatalog /> },
      { path: "/About", element: <About /> },
      { path: "/restaurants/:resId", element: <RestProfile /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
