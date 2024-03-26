import { Link } from "react-router-dom";
import cls from "./AnimeCard.module.scss";

interface AnimeCard {
  id: string;
  title: string;
  animeThumbnail: string;
  watchStatus: EAnimeWatchStatus;
}

function AnimeCard({ id, title, animeThumbnail, watchStatus }: AnimeCard) {
  return (
    <div className={cls.AnimeCard}>
      <Link to="/anime" state={{ id: id }}>
        <img src={animeThumbnail} alt={title} />
      </Link>
      <div className={cls.info}>
        <div className={cls.status}>
          <span className={`dot ${watchStatus}`}></span>
          {watchStatus}
        </div>
        <hr />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default AnimeCard;
