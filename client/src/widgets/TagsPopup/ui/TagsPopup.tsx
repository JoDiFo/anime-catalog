import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useQuery } from "@apollo/client";

import { TagsContainer } from "@/widgets/TagsContainer";

import compareStrings from "@/shared/lib/compareStrings";
import { setSelectedTags } from "@/app/redux/tagsSlice";
import { RootState } from "@/app/redux/store";
import useDebounce from "@/shared/Hooks/useDebounce";
import { GET_ALL_TAGS } from "@/app/graphql/tags";

import crossIcon from "@/shared/assets/cross.svg";
import cls from "./TagsPopup.module.scss";

interface TagsPopupProps {
  toggleVisible: (flag: boolean) => void;
}

function TagsPopup({ toggleVisible }: TagsPopupProps) {
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
        (value) => value.id !== tag.id
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
    <div className={cls.TagsPopup}>
      <div className={cls.navigation}>
        <input
          type="text"
          placeholder="Search for tags"
          onChange={(event) => setSearchString(event.target.value)}
        />
        <img
          role="button"
          src={crossIcon}
          alt="close button"
          className={cls.closeButton}
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

export const MemoTagsPopup = memo(TagsPopup);
