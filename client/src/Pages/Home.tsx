import thumbnailImage from "../assets/thumbnail-image.png";

import { AnimeCard } from "../components";

function Home() {
  return (
    <main className="profile-page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
        <h3>Welcome to Anime Catalog</h3>
        <p>Discover new anime, track your progress</p>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="profile-page__section">
            <h3>POPULAR THIS WEEK</h3>
            <div className="card-container">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
          </div>
          <div className="profile-page__section">
            <h3>YOU MIGHT ALSO LIKE</h3>
            <div className="card-container">
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

export default Home;
