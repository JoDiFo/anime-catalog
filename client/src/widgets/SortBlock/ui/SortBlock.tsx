import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "@/shared/ui/Select";
import cls from "./SortBlock.module.scss";

interface SortBlock {
  sortOptions: { value: string; text: string }[];
  onSelect: (value: string) => void;
}

function SortBlock({ sortOptions, onSelect }: SortBlock) {
  const { t } = useTranslation("searchPage");
  
  const [selected, setSelected] = useState(sortOptions[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className={cls.SortBlock}>
      <p>{t("Sort by")}:</p>
      <Select value={selected} onChange={handleChange}>
        {sortOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default memo(SortBlock);
