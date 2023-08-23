import styles from "./win.module.scss";
import logo from "../assets/logo.png";
import Button from "../components/button/Button.tsx";
import { useState } from "react";

const Win = () => {
  const [copied, setCopied] = useState(false);
  const code = process.env.REACT_APP_PRESENT_CODE ?? "AAAA-BBBB-CCCC-DDDD";

  const onCodeClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    <div className={styles.win}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1>
        CONGRATULATIONS! YOU WON! <br /> <br />
        Here is your Decathlon gift card:{" "}
      </h1>

      <Button letter={"A"} onClick={onCodeClick}>
        {code}
      </Button>
      {copied && <div className={styles.copied}>Copied to clipboard!</div>}
    </div>
  );
};

export default Win;
