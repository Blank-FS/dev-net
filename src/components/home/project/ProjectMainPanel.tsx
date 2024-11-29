import { useState } from "react";
import DescriptionTab from "./main-panel/DescriptionTab";

const ProjectMainPanel = () => {
  const [activeTab, setActiveTab] = useState("description");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const tabPairs = new Map();
  tabPairs.set("description", <DescriptionTab />);

  return (
    <>
      <div className="flex justify-around mr-4 my-4">
        <button
          className="border flex-1"
          onClick={() => handleTabChange("description")}
        >
          Descriptions
        </button>
        <button
          className="border flex-1"
          onClick={() => handleTabChange("version")}
        >
          Versions
        </button>
        <button
          className="border flex-1"
          onClick={() => handleTabChange("resource")}
        >
          Resources
        </button>
        <button
          className="border flex-1"
          onClick={() => handleTabChange("task")}
        >
          Tasks
        </button>
        <button
          className="border flex-1"
          onClick={() => handleTabChange("collab")}
        >
          Collab
        </button>
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
