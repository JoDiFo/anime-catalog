import { memo } from "react";
import cls from "./HeaderSearchBar.module.scss";

interface HeaderSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function HeaderSearchBar({ value, onChange }: HeaderSearchBarProps) {
  return (
    <div className={cls.HeaderSearchBar}>
      <input
        type="text"
        placeholder="Enter anime name here"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default memo(HeaderSearchBar);
