import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GamePage from "../pages/GamePage";

const AplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/game/:gameId" element={<GamePage />}></Route>
    </Routes>
  );
};
export default AplicationRoutes;
