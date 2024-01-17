import { useState, useRef } from "react";

import plusIcon from "../assets/plus-icon.svg";
import crossIcon from "../assets/cross.svg";

import compareStrings from "../Utils/compareStrings";

interface TagsList {
  tags: string[];
}

function TagsSelector({ tags }: TagsList) {
  const [visible, setVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchString, setSearchString] = useState("");
  const tagsBlockRef = useRef<any>(null);

  const handleSelect = (value: string) => {
    const newSelectedTags = [...selectedTags, value];
    setSelectedTags(newSelectedTags);
  };

  const handleDeselect = (index: number) => {
    const newSelectedTags = [
      ...selectedTags.slice(0, index),
      ...selectedTags.slice(index + 1, selectedTags.length),
    ];
    setSelectedTags(newSelectedTags);
  };

  const handleClose = () => {
    setVisible(false);
    setSearchString("");
  };

  return (
    <div className="tags-container">
      {
        <div className="tags-container__selected">
          <h4 className="tags-container__selected__title">Selected tags:</h4>
          {!visible &&
            selectedTags &&
            selectedTags.map((item, index) => (
              <div
                key={`${item}_#${index}_tag`}
                className="tag"
                onClick={() => handleDeselect(index)}
              >
                {item}
              </div>
            ))}
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
            {selectedTags.length !== 0 ? (
              selectedTags.map((item, index) => (
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
          <div className="tags-container__block__tags">
            {tags &&
              tags
                .filter((item) => {
                  return !selectedTags.includes(item);
                })
                .filter((item) => {
                  return compareStrings(item, searchString);
                })
                .map((item) => (
                  <div
                    key={`container__block__#${item}`}
                    className="tag"
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TagsSelector;
