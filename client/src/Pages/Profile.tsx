import thumbnailImage from "../assets/thumbnail-image.png";
import cardImage from "../assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";

import { ProfileInfo, AnimeCard, AnimeList } from "../components";

function Profile() {
  return (
    <main className="profile-page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo />
          <AnimeList />
          <div className="profile-page__section">
            <h3>YOU MIGHT ALSO LIKE</h3>
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

export default Profile;
