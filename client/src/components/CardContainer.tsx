import { useState, useEffect } from "react";

import { AnimeCard } from "./index";

function CardContainer() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:5173/anime-sample.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profile-page__list card-container">
      {data && data["data"].map((item: any) => (
        <AnimeCard animeThumbnail={item.picture} title={item.title}/>
      ))}
    </div>
  );
}

export default CardContainer;
