import { useState } from "react";

import SelectedTags from "./SelectedTags";
import TagsPopup from "./TagsPopup";

function TagsSelector() {
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

export default TagsSelector;
