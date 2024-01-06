import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import HabitCreatePage from "./pages/habit/HabitCreatePage";
import HistoryPage from "./pages/history/HistoryPage";
import HistoryCreatePage from "./pages/history/HistoryCreatePage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/habit/create", element: <HabitCreatePage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/history/create", element: <HistoryCreatePage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
