import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Landing from "./components/home/Landing";
import ClubHome from "./components/home/ClubHome";
import ProjectHome from "./components/home/ProjectHome";
import DMHome from "./components/home/DMHome";

function App() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="project/:projectId" element={<ProjectHome />} />
          <Route path="club/:clubId" element={<ClubHome />} />
          <Route path="dm/:dmId" element={<DMHome />} />
        </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
