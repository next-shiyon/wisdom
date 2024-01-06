import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      THIS IS LAYOUT
      <Outlet />
    </div>
  );
}
