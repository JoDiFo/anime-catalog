import { memo, useState } from "react";

import { SelectedTags } from "@/widgets/SelectedTags";
import { TagsPopup } from "@/widgets/TagsPopup";

import "./TagsBlock.module.scss";

function TagsBlock() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = (flag: boolean) => {
    setVisible(flag);
  };

  return (
    <div className="tags-container">
      <SelectedTags toggleVisible={toggleVisible} />
      {visible ? <TagsPopup toggleVisible={toggleVisible} /> : null}
    </div>
  );
}

export const MemoTagsBlock = memo(TagsBlock);
