import { ButtonProps } from "react-html-props";
import classes from "./Button.module.scss";

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
}

export default Button;
