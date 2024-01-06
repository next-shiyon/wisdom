import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import HabitCreatePage from "./pages/habit/HabitCreatePage";
import HistoryPage from "./pages/history/HistoryPage";
import HistoryCreatePage from "./pages/history/HistoryCreatePage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/habit/create" element={<HabitCreatePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/create" element={<HistoryCreatePage />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Route>
    </Routes>
  );
}
