import { memo, useState } from "react";
import Select from "../../shared/ui/Select";

function SortBlock() {
  const sortOptions = [
    { value: "episodes", text: "number of episodes" },
    { value: "date", text: "release date" },
  ];

  const [selected, setSelected] = useState(sortOptions[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div className="sort">
      <p>Sort by:</p>
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
