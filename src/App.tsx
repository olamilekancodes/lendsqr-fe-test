import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import UserDetails from "./pages/Users/UserDetails";
import SignIn from "./pages/Auth";
import { AuthProvider } from "./auth/AuthProvider";
import PublicRoute from "./components/Routes/PublicRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import ComingSoon from "./pages/ComingSoon";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "users", element: <Users /> },
          { path: "users/:id", element: <UserDetails /> },
          { path: "*", element: <ComingSoon /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
