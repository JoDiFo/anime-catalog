import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import plusIcon from "../../assets/plus-icon.svg";

interface IProps {
  toggleVisible: (flag: boolean) => void;
}

function SelectedTags({ toggleVisible }: IProps) {
  const selectedTags = useSelector((state: RootState) => state.tags.selected);

  return (
    <div className="tags-container__selected">
      <h4 className="tags-container__selected__title">Selected tags:</h4>
      {selectedTags
        ? selectedTags.map((item, index) => (
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
        onClick={() => toggleVisible(true)}
      />
    </div>
  );
}

export default SelectedTags;
