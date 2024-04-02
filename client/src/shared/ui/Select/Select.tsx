import classNames from "classnames";
import cls from "./Select.module.scss";
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";

export enum SelectStyles {
  CLEAR = "clear",
}

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  theme?: SelectStyles;
}

const Select: FC<SelectProps> = ({ className, theme, children, ...props }) => {
  return (
    <select
      className={classNames(cls.select, className, theme ? cls[theme] : "")}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
