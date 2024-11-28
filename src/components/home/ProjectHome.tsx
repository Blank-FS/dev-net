import { useParams } from "react-router";

const ProjectHome = () => {
  const param = useParams<{ projectId: string }>();
  return <div>Project : {param.projectId}</div>;
};

export default ProjectHome;
