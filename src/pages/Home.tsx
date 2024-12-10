import { Outlet } from "react-router";
import Sidebar from "../components/home/Sidebar";
import { ReactNode } from "react";

function Home({ children }: { children?: ReactNode }) {
  return (
    <div className="home flex flex-1 min-h-0 min-w-0">
      <Sidebar />
      <Outlet />
      {children}
    </div>
  );
}

export default Home;
