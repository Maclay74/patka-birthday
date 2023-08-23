import styles from "./main-menu.module.scss";
import { StageProps } from "../App.tsx";
import logo from "../assets/logo.png";
import Button from "../components/button/Button.tsx";

interface MainMenuProps extends StageProps {}

const MainMenu = ({ setStage }: MainMenuProps) => {
  return (
    <div className={styles.mainMenu}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <Button letter={"A"} onClick={() => setStage("gameplay")}>Start the game</Button>
    </div>
  );
};

export default MainMenu;
