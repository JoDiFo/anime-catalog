import { ButtonProps } from "react-html-props";
import classNames from "classnames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface BtnProps {
  theme?: ButtonTheme;
}

export function Button({ children, theme, ...props }: ButtonProps & BtnProps) {
  return (
    <button
      className={classNames(cls.button, theme ? cls[theme] : "")}
      {...props}
    >
      {children}
    </button>
  );
}
