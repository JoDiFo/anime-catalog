import plusIcon from "../assets/plus-icon.svg";

function TagsSelector() {
  return (
    <div className="anime-page__tags">
      <h4 className="anime-page__tag-title">Selected tags:</h4>
      <div className="tag">#action</div>
      <div className="tag">#fantasy</div>
      <div className="tag">#comedy</div>
      <div className="tag">#romance</div>
      <div className="tag">#adventure</div>
      <div className="tag">#action</div>
      <img className="plus-button" src={plusIcon} alt="plus button" />
    </div>
  );
}

export default TagsSelector;
