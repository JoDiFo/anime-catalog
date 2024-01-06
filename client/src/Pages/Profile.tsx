import { Link } from "react-router-dom";

import thumbnailImage from "../assets/thumbnail-image.png";
import animeThumbnail from "../assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";
import profileImage from "../assets/profile-image.jpeg";

function Profile() {
  return (
    <main className="profile-page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="profile-page__info">
            <img src={profileImage} alt="profile image" />
            <div>
              <h3>JoDiFo</h3>
              <p>Part of community since: 01.01.2000</p>
            </div>
          </div>
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
              <div className="card">
                <img
                  src={animeThumbnail}
                  alt="fullmetal alchemist brotherhood"
                />
                <div className="card__info">
                  <div className="status">
                    <span className="dot plan-to-watch"></span>plan to watch
                  </div>
                  <hr />
                  <h4>Fullmetal Alchemist: Brotherhood</h4>
                </div>
              </div>
              <div className="card">
                <img
                  src={animeThumbnail}
                  alt="fullmetal alchemist brotherhood"
                />
                <div className="card__info">
                  <div className="status">
                    <span className="dot plan-to-watch"></span>plan to watch
                  </div>
                  <hr />
                  <h4>Fullmetal Alchemist: Brotherhood</h4>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={animeThumbnail}
                  alt="fullmetal alchemist brotherhood"
                />
                <div className="card__info">
                  <div className="status">
                    <span className="dot plan-to-watch"></span>plan to watch
                  </div>
                  <hr />
                  <h4>Fullmetal Alchemist: Brotherhood</h4>
                </div>
              </div>
              <div className="card">
                <img
                  src={animeThumbnail}
                  alt="fullmetal alchemist brotherhood"
                />
                <div className="card__info">
                  <div className="status">
                    <span className="dot plan-to-watch"></span>plan to watch
                  </div>
                  <hr />
                  <h4>Fullmetal Alchemist: Brotherhood</h4>
                </div>
              </div>
              <div className="card">
                <img
                  src={animeThumbnail}
                  alt="fullmetal alchemist brotherhood"
                />
                <div className="card__info">
                  <div className="status">
                    <span className="dot plan-to-watch"></span>plan to watch
                  </div>
                  <hr />
                  <h4>Fullmetal Alchemist: Brotherhood</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
