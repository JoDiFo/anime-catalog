import { Link } from "react-router-dom";

function AnimeList({
  watched,
  watching,
  planned,
  stalled,
  dropped,
}: EAnimeCount) {
  return (
    <div className="page__anime-list">
      <Link to="/profile/anime">
        <h3>Anime list</h3>
      </Link>
      <hr />
      <div>
        <p>
          <span className="dot watched"></span>watched: {watched}
        </p>
        <p>
          <span className="dot watching"></span>watching: {watching}
        </p>
        <p>
          <span className="dot planned"></span>plan to watch: {planned}
        </p>
        <p>
          <span className="dot stalled"></span>stalled: {stalled}
        </p>
        <p>
          <span className="dot dropped"></span>dropped: {dropped}
        </p>
      </div>
    </div>
  );
}

export default AnimeList;
