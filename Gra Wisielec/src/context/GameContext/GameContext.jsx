import { createContext, useEffect, useState } from "react";
import Words from "../../../Recources/Words.json";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const { children } = props;
  const { changedManStatus, setChangedManStatus } = useState(0); /* number */
  const { randomWord, setRandomWord } = useState(); /* string */
  const { selectedLetters, setSelectedLetters } = useState(
    []
  ); /* tablica stringów */
  useEffect(() => {
    const RandomIndex = Math.floor(Math.random() * 21);
    const ChosenWords = Words[RandomIndex];
    setRandomWord(ChosenWords);
  }, []);

  return (
    <GameContext.Provider
      value={{
        changedManStatus,
        setChangedManStatus,
        randomWord,
        setRandomWord,
        selectedLetters,
        setSelectedLetters,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
