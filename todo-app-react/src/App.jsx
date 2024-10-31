import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Error } from "./components/Error.tsx";
import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { Login } from "./components/Login.tsx";
import { TodoList } from "./components/TodoList.tsx";
import { Welcome } from "./components/Welcome.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/welcome/:userName?",
    element: <Welcome />,
  },
  {
    path: "/todos",
    element: <TodoList />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
