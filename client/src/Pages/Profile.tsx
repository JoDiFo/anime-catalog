import thumbnailImage from "../assets/thumbnail-image.png";

import { ProfileInfo, AnimeList } from "../components";

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
              {/*reserved for card container*/}
              <p>Nothing here yet</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
