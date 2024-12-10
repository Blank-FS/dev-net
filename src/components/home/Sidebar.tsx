import { useState } from "react";
import { Link } from "react-router";
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

  interface Subsection {
    type: string;
    title: string;
    id: string;
  }
  const data: Subsection[] = [
    { type: "project", title: "DevNet", id: "dev-net" },
    { type: "project", title: "Epsilon", id: "epsilon" },
    { type: "project", title: "OrderUp", id: "order-up" },
    { type: "club", title: "WebDev", id: "web-dev" },
    { type: "club", title: "Hackathon", id: "hackathon" },
    { type: "dm", title: "Edgar", id: "edgar" },
    { type: "dm", title: "Kaneki", id: "kaneki" },
  ];

  return (
    <div className="flex flex-col gap-2 align-middle w-[20%] box-border h-full border p-2 bg-slate-900 text-white">
      <button className="bar-sec" onClick={toggleProjects}>
        Projects
      </button>
      {displayProjects && (
        <>
          {data
            .filter((item) => item.type === "project")
            .map((item, index) => (
              <Link
                key={item.id}
                className="bar-subsec"
                to={`${item.type}/${item.id}`}
              >
                <button>{item.title}</button>
              </Link>
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
          {data
            .filter((item) => item.type === "club")
            .map((item, index) => (
              <Link
                key={item.id}
                className="bar-subsec"
                to={`${item.type}/${item.id}`}
              >
                <button>{item.title}</button>
              </Link>
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
          {data
            .filter((item) => item.type === "dm")
            .map((item, index) => (
              <Link
                key={item.id}
                className="bar-subsec"
                to={`${item.type}/${item.id}`}
              >
                <button>{item.title}</button>
              </Link>
            ))}
          <button className="bar-subsec">
            <FaPlus />
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
