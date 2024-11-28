import { useParams } from "react-router";

const DMHome = () => {
  const param = useParams<{ dmId: string }>();
  return <div>Project : {param.dmId}</div>;
};

export default DMHome;
