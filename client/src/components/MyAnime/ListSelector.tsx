import { memo } from "react";
import { IOption, IRequest } from "../../types";
import "./ListSelector.scss";

function ListSelector({
  options,
  selected,
  onClick,
}: {
  options: IOption[];
  selected: string;
  onClick: (value: IRequest) => void;
}) {
  return (
    <div className="list-selector">
      <h3>MY ANIME</h3>
      <div className="list-selector__lists">
        {options.map((item) => (
          <div
            key={item.value}
            className={`list-item ${
              item.value === selected ? "selected" : ""
            }`}
            onClick={() => onClick(item.value)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ListSelector);
