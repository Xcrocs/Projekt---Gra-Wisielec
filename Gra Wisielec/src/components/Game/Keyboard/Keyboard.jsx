import { useContext } from "react";
import GameContext from "../../../context/GameContext/GameContext";
import letters from "../../../../Recources/Alphabet.json";

const Keyboard = () => {
  const {
    selectedLetters,
    setSelectedLetters,
    randomWord,
    hangedManStatus,
    setHangedManStatus,
  } = useContext(GameContext);

  const handleButtonClick = (letter) => {
    setSelectedLetters([...selectedLetters, letter]);
    if (!randomWord.includes(letter)) {
      setHangedManStatus(hangedManStatus + 1);
    }
  };
  /* Możemy wsadzić setSelecteLetters poprostu do onClick*/
  return (
    <div>
      {letters.map((letter) => (
        <button
          onClick={() => handleButtonClick(letter)}
          disabled={selectedLetters?.includes(letter) || hangedManStatus == 10}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
