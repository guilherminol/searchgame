import { useParams } from "react-router-dom";

const GamePage = () => {
  const params = useParams();
  return <h1>{params.gameId}</h1>;
};
export default GamePage;
