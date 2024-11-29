import { useParams } from "react-router";
import ProjectSidePanel from "./ProjectSidePanel";
import ProjectMainPanel from "./ProjectMainPanel";

const ProjectHome = () => {
  const param = useParams<{ projectId: string }>();
  return (
    <div className="flex w-full justify-between m-4 p-4 border border-black">
      <div className="flex-1">
        <h1>Project : {param.projectId}</h1>
        <ProjectMainPanel />
      </div>
      <ProjectSidePanel />
    </div>
  );
};

export default ProjectHome;
