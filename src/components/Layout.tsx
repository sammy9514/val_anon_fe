import { Outlet } from "react-router-dom";
import { Header } from "./static/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
