import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
