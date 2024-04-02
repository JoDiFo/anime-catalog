import { useTranslation } from "react-i18next";
import cls from "./TagsContainer.module.scss";

function TagsContainer({
  tags,
  handleClick,
}: {
  tags: ETag[];
  handleClick: (index: ETag) => void;
}) {
  const {t} = useTranslation("searchPage");
  
  if (!tags.length) {
    return (
      <div className={cls.selected}>
        <div>{t("No selected tags")}</div>
      </div>
    );
  }

  return (
    <div className={cls.selected}>
      {tags.map((item) => (
        <div
          key={item.id}
          className={cls.tag}
          onClick={() => handleClick(item)}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
}

export default TagsContainer;
