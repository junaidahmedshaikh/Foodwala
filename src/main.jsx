// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
// import { routerConfiguration } from "./routerConfig";
import { routerConfiguration } from "./routerConfig";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerConfiguration}></RouterProvider>
);
