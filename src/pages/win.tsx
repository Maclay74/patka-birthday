import styles from "./win.module.scss";
import logo from "../assets/logo.png";
import Button from "../components/button/Button.tsx";

const Win = () => {
  const code = process.env.REACT_APP_PRESENT_CODE ?? "AAAA-BBBB-CCCC-DDDD";

  const onCodeClick = () => {};

  return (
    <div className={styles.win}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1>CONGRATULATIONS! YOU WON!</h1>

      <Button letter={"A"} onClick={onCodeClick}>{code}</Button>
    </div>
  );
};

export default Win;
