import { memo, useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RootState } from "../../redux/store";
import { setSelectedTags } from "../../redux/tagsSlice";

import compareStrings from "../../utils/compareStrings";
import useDebounce from "../../Hooks/useDebounce";

import crossIcon from "../../assets/cross.svg";

import { GET_ALL_TAGS } from "../../graphql/tags";
import { useQuery } from "@apollo/client";
import TagsContainer from "./TagsContainer";

interface IProps {
  toggleVisible: (flag: boolean) => void;
}

function TagsPopup({ toggleVisible }: IProps) {
  const dispatch = useDispatch();
  const selectedTags = useSelector(
    (state: RootState) => state.tags.selected,
    shallowEqual
  );

  const [tags, setTags] = useState<ETag[]>([]);
  const [unselectedTags, setUnselectedTags] = useState<ETag[]>([]);
  const [searchString, setSearchString] = useState("");

  const { data: tagsData, loading: areTagsLoading } = useQuery(GET_ALL_TAGS);

  const debouncedValue = useDebounce(searchString, 500);

  const handleDeselect = useCallback(
    (tag: ETag) => {
      const newSelectedTags = selectedTags.filter(
        (value) => value._id !== tag._id
      );
      dispatch(setSelectedTags(newSelectedTags));
    },
    [selectedTags]
  );

  const handleSelect = useCallback(
    (tag: ETag) => {
      const newSelectedTags = [...selectedTags, tag];
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
      <TagsContainer tags={selectedTags} handleClick={handleDeselect} />
      <hr />
      <TagsContainer tags={unselectedTags} handleClick={handleSelect} />
    </div>
  );
}

export default memo(TagsPopup);
