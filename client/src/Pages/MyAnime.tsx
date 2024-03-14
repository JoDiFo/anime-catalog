import { useSelector } from "react-redux";
import thumbnailImage from "../assets/thumbnail-image.png";

import { ProfileInfo } from "../components";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import ListSelector from "../components/MyAnime/ListSelector";
import { IOption, IRequest } from "../types";
import ListAnime from "../components/MyAnime/ListAnime";

function MyAnime() {
  const options: IOption[] = [
    { value: "all", text: "all" },
    { value: "watched", text: "watched" },
    { value: "watching", text: "watching" },
    { value: "plan-to-watch", text: "plan to watch" },
    { value: "stalled", text: "stalled" },
    { value: "dropped", text: "dropped" },
  ];

  const [selected, setSelected] = useState<IRequest>("all");

  const {
    _id: userId,
    username,
    registerDate,
    isLogged,
  } = useSelector((state: RootState) => state.userReducer);

  const navigate = useNavigate();

  const handleSelect = (option: IRequest) => {
    setSelected(option);
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  return (
    <main className="page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo username={username} registerDate={registerDate} />
          <ListSelector
            options={options}
            selected={selected}
            onClick={(value) => handleSelect(value)}
          />
          <ListAnime listName={selected} userId={userId} />
        </div>
      </div>
    </main>
  );
}

export default MyAnime;
