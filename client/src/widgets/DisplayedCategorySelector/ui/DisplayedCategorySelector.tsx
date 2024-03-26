import { memo } from "react";
import cls from "./DisplayedCategorySelector.module.scss";

interface DisplayedCategorySelector {
  options: { value: EAnimeCategoryOption; text: string }[];
  selected: string | null;
  onClick: (value: EAnimeCategoryOption) => void;
}

function DisplayedCategorySelector({
  options,
  selected,
  onClick,
}: DisplayedCategorySelector) {
  return (
    <div className={cls.DisplayedCategorySelector}>
      <h3>MY ANIME</h3>
      <div className={cls.lists}>
        {options.map((item) => (
          <div
            key={item.value}
            className={[
              cls.listItem,
              item.value === selected ? cls.selected : "",
            ].join(" ")}
            onClick={() => onClick(item.value)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(DisplayedCategorySelector);
