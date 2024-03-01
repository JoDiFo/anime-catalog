import { InputProps } from "react-html-props";
import classes from "./Input.module.scss";

function Input(props: InputProps) {
  return <input className={classes.input} {...props} />;
}

export default Input;
