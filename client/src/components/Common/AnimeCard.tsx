import { Link } from "react-router-dom";

interface IAnimeCard {
  id: string;
  title: string;
  animeThumbnail: string;
  watchStatus: EAnimeWatchStatus;
}

function AnimeCard({ id, title, animeThumbnail, watchStatus }: IAnimeCard) {
  return (
    <div className="card">
      <Link to="/anime" state={{ id: id }}>
        <img src={animeThumbnail} alt={title} />
      </Link>
      <div className="card__info">
        <div className="status">
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
