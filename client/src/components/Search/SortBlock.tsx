import { useState, useEffect, useRef } from "react";

// TODO change types of elements

function SortBlock() {
  const sortOptions = ["number of episodes", "release date"];
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const sortRef = useRef<any>(null);
  const selectedValue = sortOptions[selected];

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleSelect = (value: number) => {
    setSelected(value);
  };

  const handleOutsideClick = (event: any) => {
    if (!sortRef.current?.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <p>Sort by:</p>
      <div className="sort__category" onClick={toggleVisible}>
        {selectedValue}
      </div>

      <div className="sort__options" onClick={toggleVisible}>
        {visible &&
          sortOptions.map((item, index) => (
            <span key={`${item}_${index}`} onClick={() => handleSelect(index)}>
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}

export default SortBlock;
