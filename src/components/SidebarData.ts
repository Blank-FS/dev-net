import { ReactNode } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

interface SidebarInfo {
  title: string;
  path: string;
  icon: ReactNode;
  cName: string;
}

export const SidebarData: SidebarInfo[] = [
  {
    title: "Home",
    path: "/home",
    icon: AiIcons.AiFillHome({}),
    cName: "nav-text",
  },
  {
    title: "Explore",
    path: "/explore",
    icon: FaIcons.FaRegCompass({}),
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: FaIcons.FaRegUserCircle({}),
    cName: "nav-text",
  },
];
