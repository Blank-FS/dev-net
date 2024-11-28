import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displayClubs, setDisplayClubs] = useState(false);
  const [displayDMs, setDisplayDMs] = useState(false);

  const toggleProjects = () => {
    setDisplayProjects(!displayProjects);
    setDisplayDMs(false);
    setDisplayClubs(false);
  };
  const toggleClubs = () => {
    setDisplayClubs(!displayClubs);
    setDisplayDMs(false);
    setDisplayProjects(false);
  };
  const toggleDMs = () => {
    setDisplayDMs(!displayDMs);
    setDisplayProjects(false);
    setDisplayClubs(false);
  };

  const projects = ["DevNet", "Epsilon", "OrderUp"];
  const clubs = ["WebDev", "Hackathon"];
  const dms = ["Edgar", "Frank", "Kaneki"];

  return (
    <div className="flex flex-col gap-2 align-middle w-[20%] h-dvh border p-2 bg-slate-900 text-white">
      <button className="bar-sec" onClick={toggleProjects}>
        Projects
      </button>
      {displayProjects && (
        <>
          {projects.map((item, index) => (
            <button className="bar-subsec">
              <Link key={index} to="">
                {item}
              </Link>
            </button>
          ))}{" "}
          <button className="bar-subsec">
            <FaPlus />
          </button>
        </>
      )}
      <button className="bar-sec" onClick={toggleClubs}>
        Clubs
      </button>
      {displayClubs && (
        <>
          {clubs.map((item, index) => (
            <button className="bar-subsec">
              <Link key={index} to="">
                {item}
              </Link>
            </button>
          ))}{" "}
          <button className="bar-subsec">
            <FaPlus />
          </button>
        </>
      )}
      <button className="bar-sec" onClick={toggleDMs}>
        DMs
      </button>
      {displayDMs && (
        <>
          {dms.map((item, index) => (
            <button className="bar-subsec">
              <Link key={index} to="">
                {item}
              </Link>
            </button>
          ))}{" "}
          <button className="bar-subsec">
            <FaPlus />
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
