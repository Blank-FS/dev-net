import { useParams } from "react-router";

const ClubHome = () => {
  const param = useParams<{ clubId: string }>();
  return <div className="flex w-full">Club : {param.clubId}</div>;
};

export default ClubHome;
