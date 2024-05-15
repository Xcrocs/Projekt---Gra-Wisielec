import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const { children } = props;
  const { changedManStatus, setChangedManStatus } = useState();
  const { hiddenLetter, setHiddenLetter } = useState();
  const { selectedLetters, setSelectedLetters } = useState();
};
