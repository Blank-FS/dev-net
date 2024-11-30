import { useState } from "react";
import DetailTab from "./main-panel/DetailTab";

const ProjectMainPanel = () => {
  const [activeTab, setActiveTab] = useState("detail");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const tabs = [
    { title: "Details", value: "detail" },
    { title: "Versions", value: "version" },
    { title: "Resources", value: "resource" },
    { title: "Tasks", value: "task" },
    { title: "Collab", value: "collab" },
  ];
  const tabPairs = new Map();
  tabPairs.set("detail", <DetailTab />);

  return (
    <>
      <div className="flex justify-around my-4">
        {tabs.map((item, index) => (
          <button
            key={index + item.value}
            className="border flex-1 border-black"
            onClick={() => handleTabChange(item.value)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {tabPairs.get(activeTab) ? (
        tabPairs.get(activeTab)
      ) : (
        <div>Error: Tab does not exist</div>
      )}
    </>
  );
};

export default ProjectMainPanel;
