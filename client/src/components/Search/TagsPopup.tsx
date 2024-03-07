import { memo, useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RootState } from "../../redux/store";
import { setSelectedTags } from "../../redux/tagsSlice";

import compareStrings from "../../Utils/compareStrings";
import useDebounce from "../../Hooks/useDebounce";

import crossIcon from "../../assets/cross.svg";
import { ITag } from "../../types";

import { GET_ALL_TAGS } from "../../graphql/tags";
import { useQuery } from "@apollo/client";

interface IProps {
  toggleVisible: (flag: boolean) => void;
}

function TagsPopup({ toggleVisible }: IProps) {
  const dispatch = useDispatch();
  const selectedTags = useSelector(
    (state: RootState) => state.tags.selected,
    shallowEqual
  );

  const [tags, setTags] = useState<ITag[]>([]);
  const [unselectedTags, setUnselectedTags] = useState<ITag[]>([]);
  const [searchString, setSearchString] = useState("");

  const { data: tagsData, loading: areTagsLoading } = useQuery(GET_ALL_TAGS);

  const debouncedValue = useDebounce(searchString, 500);

  const handleDeselect = useCallback(
    (index: number) => {
      const newSelectedTags = [
        ...selectedTags.slice(0, index),
        ...selectedTags.slice(index + 1, selectedTags.length),
      ];
      dispatch(setSelectedTags(newSelectedTags));
    },
    [selectedTags]
  );

  const handleSelect = useCallback(
    (value: ITag) => {
      const newSelectedTags = [...selectedTags, value];
      dispatch(setSelectedTags(newSelectedTags));
    },
    [selectedTags]
  );

  const handleClose = () => {
    toggleVisible(false);
    setSearchString("");
  };

  useEffect(() => {
    if (!areTagsLoading) {
      setTags(tagsData.getAllTags);
    }
  }, [areTagsLoading]);

  useEffect(() => {
    const newItems = tags
      .filter((item) => !selectedTags.includes(item))
      .filter((item) => compareStrings(item.value, searchString));
    setUnselectedTags(newItems);
  }, [debouncedValue, selectedTags, tags]);

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
        {selectedTags.length !== 0 ? (
          selectedTags.map((item, index) => (
            <div
              key={item._id}
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
          <div
            key={item._id}
            className="tag"
            onClick={() => handleSelect(item)}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(TagsPopup);
