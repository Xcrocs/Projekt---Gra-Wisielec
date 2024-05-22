import { useContext } from "react";
import GameContext from "../../../context/GameContext/GameContext";
import hangedImages from "../../../../Recources/ChangedManImages.json";

const Illustration = () => {
  const { hangedManStatus, setHangedManStatus } = useContext(GameContext);

  return <div>{hangedImages(hangedManStatus)}</div>;
};

export default Illustration;
