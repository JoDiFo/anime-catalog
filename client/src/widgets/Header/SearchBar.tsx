import { memo } from "react";

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="header__search">
      <input
        type="text"
        placeholder="Enter anime name here"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default memo(SearchBar);
