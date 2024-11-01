import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Error } from './components/Error.tsx';
import { Login } from './components/Login.tsx';
import { Logout } from './components/Logout.tsx';
import { TodoApp } from './components/TodoApp.tsx';
import { TodoList } from './components/TodoList.tsx';
import { Welcome } from './components/Welcome.tsx';
import './index.css';
import { AuthProvider } from './security/AuthContext.tsx';
import { AuthenticatedRoute } from './security/AuthenticatedRoute.tsx';

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
        element: (
          <AuthenticatedRoute>
            <Logout />
          </AuthenticatedRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/welcome/:userName?',
        element: (
          <AuthenticatedRoute>
            <Welcome />
          </AuthenticatedRoute>
        ),
      },
      {
        path: '/todos',
        element: (
          <AuthenticatedRoute>
            <TodoList />
          </AuthenticatedRoute>
        ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
