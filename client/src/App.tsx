import thumbnailImage from "./assets/thumbnail-image.png";
import animeThumbnail from "./assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";

import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
