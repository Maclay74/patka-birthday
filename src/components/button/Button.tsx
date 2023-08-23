import styles from "./button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type Letter = "A" | "B" | "C" | "D";

export interface ButtonProps {
  children: string;
  onClick: () => void;
  selected?: boolean;
  correct?: boolean;
  letter: Letter;
}

const Button = ({ children, onClick, letter = "A", selected, correct }: ButtonProps) => {
  return (
    <button
      className={cx("button", { selected, correct })}
      onClick={onClick}
      data-letter={letter + ": "}
    >
      {children}
    </button>
  );
};

export default Button;
