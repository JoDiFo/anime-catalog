import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSelectedTags } from "../../redux/tagsSlice";

import compareStrings from "../../Utils/compareStrings";
import useDebounce from "../../Hooks/useDebounce";

import crossIcon from "../../assets/cross.svg";

interface IProps {
  toggleVisible: (flag: boolean) => void;
}

function TagsPopup({ toggleVisible }: IProps) {
  const dispatch = useDispatch();
  const tagsContext = useSelector((state: RootState) => state.tags);

  const [unselectedTags, setUnselectedTags] = useState<ITag[]>([]);
  const [searchString, setSearchString] = useState("");

  const debouncedValue = useDebounce(searchString, 500);

  const handleDeselect = (index: number) => {
    const newSelectedTags = [
      ...tagsContext.selected.slice(0, index),
      ...tagsContext.selected.slice(index + 1, tagsContext.selected.length),
    ];
    dispatch(setSelectedTags(newSelectedTags));
  };

  const handleSelect = (value: ITag) => {
    const newSelectedTags = [...tagsContext.selected, value];
    dispatch(setSelectedTags(newSelectedTags));
  };

  const handleClose = () => {
    toggleVisible(false);
    setSearchString("");
  };

  useEffect(() => {
    const newItems = tagsContext.all
      .filter((item) => !tagsContext.selected.includes(item))
      .filter((item) => compareStrings(item.value, searchString));
    setUnselectedTags(newItems);
  }, [debouncedValue, tagsContext]);

  return (
    <div className="tags-container__block">
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
        {tagsContext.selected.length !== 0 ? (
          tagsContext.selected.map((item, index) => (
            <div
              key={item.id}
              className="tag"
              onClick={() => handleDeselect(index)}
            >
              {item.value}
            </div>
          ))
        ) : (
          <div>No selected tags</div>
        )}
      </div>
      <hr />
      <div className="tags-container__block__tags">
        {unselectedTags.map((item) => (
          <div key={item.id} className="tag" onClick={() => handleSelect(item)}>
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagsPopup;
