import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodCatalog from "./Pages/FoodCatalog";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";

export const routerConfiguration = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/FoodCatalog", element: <FoodCatalog /> },
    ],
  },
]);
