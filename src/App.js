import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/main-layout";
import Homepage from "./pages/homepage";
import ErrorPage from "./pages/errorpage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
