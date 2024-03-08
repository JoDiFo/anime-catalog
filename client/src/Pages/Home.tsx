import thumbnailImage from "../assets/thumbnail-image.png";
import cardImage from "../assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";

import { AnimeCard } from "../components";

function Home() {
  return (
    <main className="page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
        <h3>Welcome to Anime Catalog</h3>
        <p>Discover new anime, track your progress</p>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="page__section">
            <h3>POPULAR THIS WEEK</h3>
            {/** TODO: change card container to component */}
            <div className="card-container">
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
            </div>
          </div>
          <div className="page__section">
            <h3>YOU MIGHT ALSO LIKE</h3>
            {/** TODO: change card container to component */}
            <div className="card-container">
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
              <AnimeCard
                animeThumbnail={cardImage}
                title="Fullmetal alchemist: Brotherhood"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
