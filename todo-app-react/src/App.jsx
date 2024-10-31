import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Error } from './components/Error.tsx';
import { Login } from './components/Login.tsx';
import { Logout } from './components/Logout.tsx';
import { TodoApp } from './components/TodoApp.tsx';
import { TodoList } from './components/TodoList.tsx';
import { Welcome } from './components/Welcome.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <TodoApp />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/welcome/:userName?',
        element: <Welcome />,
      },
      {
        path: '/todos',
        element: <TodoList />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
