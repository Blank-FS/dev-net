import { useParams } from "react-router";

const ClubHome = () => {
  const param = useParams<{ clubId: string }>();
  return <div>Project : {param.clubId}</div>;
};

export default ClubHome;
