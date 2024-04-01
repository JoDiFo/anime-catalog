import classNames from "classnames";
import cls from "./Select.module.scss";
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}

const Select: FC<SelectProps> = ({ className, children, ...props }) => {
  return (
    <select className={classNames(cls.select, className)} {...props}>
      {children}
    </select>
  );
};

export default Select;
