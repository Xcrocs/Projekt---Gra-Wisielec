import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const { children } = props;
  const { changedManStatus, setChangedManStatus } = useState(); /* number */
  const { randomWord, setRandomWord } = useState(); /* string */
  const { selectedLetters, setSelectedLetters } = useState(
    []
  ); /* tablica stringów */
};
