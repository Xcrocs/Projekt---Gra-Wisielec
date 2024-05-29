import Illustration from "./Illustration/Illustration";
import Keyboard from "./Keyboard/Keyboard";
import ResetButton from "./ResetButton/ResetButton";
import WordDisplay from "./WordDisplay/WordDisplay";

const Game = () => {
  return (
    <div>
      <Illustration />
      <WordDisplay />
      <Keyboard />
    </div>
  );
};

export default Game;
