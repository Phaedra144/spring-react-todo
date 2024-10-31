import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { Login } from "./components/Login.tsx";
import { Welcome } from "./components/Welcome.tsx";
import { Error } from "./components/Error.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/welcome/:userName",
    element: <Welcome />,
  },
  {
    path: "*",
    element: <Error />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
