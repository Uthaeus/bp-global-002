import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/main-layout";
import Homepage from "./pages/homepage";
import ErrorPage from "./pages/errorpage";
import AuthLayout from "./components/auth-layout";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import AboutPage from "./pages/aboutpage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/about',
        element: <AboutPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/signup',
        element: <SignUp />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
