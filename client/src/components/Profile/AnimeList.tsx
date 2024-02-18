import { Link } from "react-router-dom";

function AnimeList() {
  return (
    <div className="profile-page__anime-list">
      <Link to="/profile/anime">
        <h3>Anime list</h3>
      </Link>
      <hr />
      <div>
        <p>
          <span className="dot watched"></span>watched
        </p>
        <p>
          <span className="dot watching"></span>watching
        </p>
        <p>
          <span className="dot plan-to-watch"></span>plan to watch
        </p>
        <p>
          <span className="dot stalled"></span>stalled
        </p>
        <p>
          <span className="dot dropped"></span>dropped
        </p>
      </div>
    </div>
  );
}

export default AnimeList;
