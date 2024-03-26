import { SelectProps } from "react-html-props";
import classes from "./Select.module.scss";

function Select({ children, ...props }: SelectProps) {
  return (
    <select className={classes.select} {...props}>
      {children}
    </select>
  );
}

export default Select;
