import { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import Button from "@/shared/ui/Button";

import { RootState } from "@/app/redux/store";
import { clearSelected } from "@/app/redux/tagsSlice";

import plusIcon from "@/shared/assets/plus-icon.svg";
import cls from "./SelectedTags.module.scss";

interface SelectedTagsProps {
  toggleVisible: (flag: boolean) => void;
}

function SelectedTags({ toggleVisible }: SelectedTagsProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation("searchPage");

  const selectedTags = useSelector(
    (state: RootState) => state.tags.selected,
    shallowEqual
  );

  return (
    <div className={cls.SelectedTags}>
      <h4 className={cls.title}>{t("Selected tags")}:</h4>
      {selectedTags
        ? selectedTags.map((item) => (
            <div key={item.id} className={cls.tag}>
              {item.value}
            </div>
          ))
        : null}
      <img
        role="button"
        className={cls.plusButton}
        src={plusIcon}
        alt="plus button"
        onClick={() => toggleVisible(true)}
      />
      <Button onClick={() => dispatch(clearSelected())}>
        {t("Clear all tags")}
      </Button>
    </div>
  );
}

export const MemoSelectedTags = memo(SelectedTags);
