import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedTags } from "../redux/tagsSlice";
import useDebounce from "../Hooks/useDebounce";

import plusIcon from "../assets/plus-icon.svg";
import crossIcon from "../assets/cross.svg";

import compareStrings from "../Utils/compareStrings";

interface TagsList {
  tags: string[];
}

function TagsSelector({ tags }: TagsList) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [searchString, setSearchString] = useState("");
  const tagsBlockRef = useRef<any>(null);

  const debouncedValue = useDebounce(searchString, 500);

  const handleSelect = (value: string) => {
    const newSelectedTags = [...selected, value];
    setSelected(newSelectedTags);
    dispatch(setSelectedTags(newSelectedTags));
  };

  const handleDeselect = (index: number) => {
    const newSelectedTags = [
      ...selected.slice(0, index),
      ...selected.slice(index + 1, selected.length),
    ];
    setSelected(newSelectedTags);
    dispatch(setSelectedTags(newSelectedTags));
  };

  const handleClose = () => {
    setVisible(false);
    setSearchString("");
  };

  useEffect(() => {
    const newItems = tags
      .filter((item) => {
        return !selected.includes(item);
      })
      .filter((item) => {
        return compareStrings(item, searchString);
      });
    setFilteredTags(newItems);
  }, [debouncedValue]);

  const selectedTagsBlock = filteredTags.map((item) => (
    <div
      key={`container__block__#${item}`}
      className="tag"
      onClick={() => handleSelect(item)}
    >
      {item}
    </div>
  ));

  return (
    <div className="tags-container">
      {
        <div className="tags-container__selected">
          <h4 className="tags-container__selected__title">Selected tags:</h4>
          {!visible && selected
            ? selected.map((item, index) => (
                <div key={`${item}_#${index}_tag`} className="tag">
                  {item}
                </div>
              ))
            : null}
          <img
            role="button"
            className="plus-button"
            src={plusIcon}
            alt="plus button"
            onClick={() => setVisible(true)}
          />
        </div>
      }
      {visible && (
        <div className="tags-container__block" ref={tagsBlockRef}>
          <div className="tags-container__block__navigation">
            <input
              type="text"
              placeholder="Search for tags"
              onChange={(event) => setSearchString(event.target.value)}
            />
            <img
              role="button"
              src={crossIcon}
              alt="close button"
              className="close-button"
              onClick={handleClose}
            />
          </div>
          <hr />
          <div className="tags-container__block__selected">
            {selected.length !== 0 ? (
              selected.map((item, index) => (
                <div
                  key={`${item}_#${index}_tag`}
                  className="tag"
                  onClick={() => handleDeselect(index)}
                >
                  {item}
                </div>
              ))
            ) : (
              <div>No selected tags</div>
            )}
          </div>
          <hr />
          <div className="tags-container__block__tags">{selectedTagsBlock}</div>
        </div>
      )}
    </div>
  );
}

export default TagsSelector;
