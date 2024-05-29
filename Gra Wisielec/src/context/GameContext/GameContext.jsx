import { createContext, useEffect, useState } from "react";
import Words from "../../../Recources/Words.json";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const { children } = props;
  const [hangedManStatus, setHangedManStatus] = useState(0); /* number */
  const [randomWord, setRandomWord] = useState(undefined); /* string */
  const [selectedLetters, setSelectedLetters] = useState(
    []
  ); /* tablica stringów */

  const GenerateRandomWord = () => {
    const RandomIndex = Math.floor(Math.random() * 21);
    const ChosenWords = Words[RandomIndex];
    setRandomWord(ChosenWords);
  };
  useEffect(() => {
    GenerateRandomWord();
  }, []);

  return (
    <GameContext.Provider
      value={{
        hangedManStatus,
        setHangedManStatus,
        randomWord,
        setRandomWord,
        selectedLetters,
        setSelectedLetters,
        GenerateRandomWord,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
