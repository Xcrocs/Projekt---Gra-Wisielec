import { useContext } from "react";
import GameContext from "../../../context/GameContext/GameContext";

const Keyboard = () => {
  const { selectedLetters, setSelectedLetters } = useContext(GameContext);
};

export default Keyboard;
