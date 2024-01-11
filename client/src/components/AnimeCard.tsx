import { Link } from "react-router-dom";

interface AnimeCard {
  id: string;
  title: string;
  animeThumbnail: string;
}

function AnimeCard({ id, title, animeThumbnail }: AnimeCard) {
  return (
    <div className="card">
      <Link to="/anime" state={{ id: id }} >
        <img src={animeThumbnail} alt={title} />
      </Link>
      <div className="card__info">
        <div className="status">
          <span className="dot plan-to-watch"></span>plan to watch
        </div>
        <hr />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default AnimeCard;
