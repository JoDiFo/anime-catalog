function TagsContainer({
  tags,
  handleClick,
}: {
  tags: ETag[];
  handleClick: (index: ETag) => void;
}) {
  if (!tags.length) {
    return (
      <div className="tags-container__block__selected">
        <div>No selected tags</div>
      </div>
    );
  }

  return (
    <div className="tags-container__block__selected">
      {tags.map((item) => (
        <div key={item.id} className="tag" onClick={() => handleClick(item)}>
          {item.value}
        </div>
      ))}
    </div>
  );
}

export default TagsContainer;
