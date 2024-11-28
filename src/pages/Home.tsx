import { Outlet, Route, Routes } from "react-router";
import Sidebar from "../components/home/Sidebar";
import { ReactNode } from "react";

function Home({ children }: { children?: ReactNode }) {
  return (
    <div className="home w-full h-full flex">
      <Sidebar />
      <Outlet />
      {children}
    </div>
  );
}

export default Home;
