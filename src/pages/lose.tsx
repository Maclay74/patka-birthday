import styles from "./lose.module.scss";
import logo from "../assets/logo.png";
import Button from "../components/button/Button.tsx";
import { StageProps } from "../App.tsx";

const Lose = ({ setStage }: StageProps) => {
  return (
    <div className={styles.lose}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1>NOPE! WRONG ANSWER! EEERRR!</h1>

      <Button letter={"A"} onClick={() => setStage("gameplay")}>
        Try again
      </Button>
    </div>
  );
};

export default Lose;
