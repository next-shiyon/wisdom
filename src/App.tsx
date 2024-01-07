import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import HabitCreate from "./pages/habit/HabitCreate";
import History from "./pages/history/History";
import HistoryCreate from "./pages/history/HistoryCreate";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/habit/create" element={<HabitCreate />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/create" element={<HistoryCreate />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Route>
    </Routes>
  );
}
