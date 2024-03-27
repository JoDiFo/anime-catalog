import { useEffect, useState } from "react";
import cls from "./AnimePopup.module.scss";
import { AnimePopupItem } from "@/widgets/AnimePopupItem";

interface AnimePopupProps {
  animeItems: EAnime[];
  searchString: string;
}

function AnimePopup({ animeItems, searchString }: AnimePopupProps) {
  const [showPopup, setShowPopup] = useState(true);

  const handleClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setShowPopup(true);
  }, [searchString]);

  if (!showPopup || !searchString) {
    return null;
  }

  if (animeItems.length <= 0) {
    return (
      <div className={[cls.AnimePopup, cls.notFound].join(" ")}>
        No anime found
      </div>
    );
  }

  return (
    <div className={cls.AnimePopup}>
      {animeItems.slice(0, 20).map((anime) => (
        <AnimePopupItem key={anime.id} anime={anime} />
      ))}
    </div>
  );
}

export default AnimePopup;
