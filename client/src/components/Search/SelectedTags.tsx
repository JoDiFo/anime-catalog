import { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { RootState } from "@/app/redux/store";

import plusIcon from "@/shared/assets/plus-icon.svg";
import Button from "@/shared/ui/Button";
import { clearSelected } from "@/app/redux/tagsSlice";

interface IProps {
  toggleVisible: (flag: boolean) => void;
}

function SelectedTags({ toggleVisible }: IProps) {
  const dispatch = useDispatch();

  const selectedTags = useSelector(
    (state: RootState) => state.tags.selected,
    shallowEqual
  );

  return (
    <div className="tags-container__selected">
      <h4 className="tags-container__selected__title">Selected tags:</h4>
      {selectedTags
        ? selectedTags.map((item) => (
            <div key={item.id} className="tag">
              {item.value}
            </div>
          ))
        : null}
      <img
        role="button"
        className="plus-button"
        src={plusIcon}
        alt="plus button"
        onClick={() => toggleVisible(true)}
      />
      <Button onClick={() => dispatch(clearSelected())}>Clear all tags</Button>
    </div>
  );
}

export default memo(SelectedTags);
