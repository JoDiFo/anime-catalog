import { FormProps } from "react-html-props";
import classes from "./Form.module.scss";

function Form({ children, ...props }: FormProps) {
  return (
    <form className={classes.form} {...props}>
      {children}
    </form>
  );
}

export default Form;
