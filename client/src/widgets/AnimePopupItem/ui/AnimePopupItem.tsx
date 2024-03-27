// import { classNames } from "shared/lib/classNames/classNames"
import { Link } from "react-router-dom";
import cls from "./AnimePopupItem.module.scss";

interface AnimePopupItemProps {
  // className?: string;
  anime: EAnime;
}

export const AnimePopupItem = ({ anime }: AnimePopupItemProps) => {
  return (
    <Link to={"/anime"} state={{ id: anime.id }}>
      <div className={cls.AnimePopupItem}>
        <img src={anime.imageUrl} alt={anime.title} />
        <div>{anime.title}</div>
      </div>
    </Link>
  );
};
