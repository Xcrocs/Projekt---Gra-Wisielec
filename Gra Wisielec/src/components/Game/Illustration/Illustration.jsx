import { useContext } from "react";
import GameContext from "../../../context/GameContext/GameContext";
import hangedImages from "../../../../Recources/ChangedManImages.json";

const Illustration = () => {
  const { hangedManStatus, setHangedManStatus } = useContext(GameContext);

  return (
    <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
      {hangedImages[hangedManStatus].map(({ x1, y1, x2, y2 }, index) => (
        <line
          className="part"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={"white"}
        />
      ))}
    </svg>
  );
};

export default Illustration;
