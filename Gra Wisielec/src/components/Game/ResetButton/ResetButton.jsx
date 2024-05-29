import { useContext } from "react";
import GameContext from "../../../context/GameContext/GameContext";

const ResetButton = () => {
  const { GenerateRandomWord, setHangedManStatus, setSelectedLetters } =
    useContext(GameContext);
  handleButtonClick = () => {
    setHangedManStatus(0);
    setSelectedLetters([]);
    GenerateRandomWord();
  };
  return <button onClick={handleButtonClick}>Reset</button>;
};

export default ResetButton;
