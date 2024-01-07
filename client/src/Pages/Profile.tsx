import { Link } from "react-router-dom";

import thumbnailImage from "../assets/thumbnail-image.png";

import { ProfileInfo, AnimeCard } from "../components";

function Profile() {
  return (
    <main className="profile-page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo />
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
          <div className="profile-page__section">
            <h3>YOU MIGHT ALSO LIKE</h3>
            <div className="card-line">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
