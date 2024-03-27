import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ProfileInfo } from "@/widgets/ProfileInfo";
import { DisplayedCategorySelector } from "@/widgets/DisplayedCategorySelector";
import { DisplayedAnime } from "@/widgets/DisplayedAnime";

import { RootState } from "@/app/redux/store";
import thumbnailImage from "@/shared/assets/thumbnail-image.png";

function UserAnimePage() {
  const options: { value: EAnimeCategoryOption; text: string }[] = [
    { value: "all", text: "all" },
    { value: "watched", text: "watched" },
    { value: "watching", text: "watching" },
    { value: "planned", text: "planned" },
    { value: "stalled", text: "stalled" },
    { value: "dropped", text: "dropped" },
  ];

  const [selected, setSelected] = useState<EAnimeCategoryOption>("all");

  const {
    id: userId,
    username,
    registerDate,
  } = useSelector((state: RootState) => state.userReducer);

  const navigate = useNavigate();

  const handleSelect = (option: EAnimeCategoryOption) => {
    setSelected(option);
  };

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [navigate, userId]);

  return (
    <main className="page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo username={username} registerDate={registerDate} />
          <DisplayedCategorySelector
            options={options}
            selected={selected}
            onClick={(value) => handleSelect(value)}
          />
          <DisplayedAnime listName={selected} userId={userId} />
        </div>
      </div>
    </main>
  );
}

export default UserAnimePage;
