import { useParams } from "react-router";

const DMHome = () => {
  const param = useParams<{ dmId: string }>();
  return <div className="flex w-full">DM: {param.dmId}</div>;
};

export default DMHome;
