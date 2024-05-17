import { useContext } from "react";
import GameContext from "../../../context/GameContext/GameContext";

const WordDisplay = () => {
  const { randomWord, setRandomWord, selectedLetters, setSelectedLetters } =
    useContext(GameContext);

  const array = randomWord
    .split("")
    .map((Letter) => (selectedLetters.includes(Letter) ? Letter : "_"));

  const ShownWord = array.map((letter) => <h2>{letter}</h2>);

  return <div>{ShownWord}</div>;
};

export default WordDisplay;
