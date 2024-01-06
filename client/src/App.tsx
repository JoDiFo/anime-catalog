import thumbnailImage from "./assets/thumbnail-image.png";
import profileImage from "./assets/profile-image.jpeg";
import animeThumbnail from "./assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";
import linkedinImage from "./assets/linkedin-svgrepo-com.svg";
import telegramImage from "./assets/telegram-svgrepo-com.svg";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="wrapper">
            <div className="header__title">
              <h2>Anime Catalog</h2>
            </div>
            <div className="header__link">
              <h2>Browse All</h2>
            </div>
            <div className="left">
              <div className="header__search">
                <input type="text" />
              </div>
              <img
                className="header__profile"
                src={profileImage}
                alt="profile image"
              />
            </div>
          </div>
        </div>
      </header>
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
      <footer className="footer">
        <div className="container">
          <div className="wrapper">
            <div className="footer--content">
              <a href="#" className="footer--text">
                Anime Catalog
              </a>
              <div className="footer--icons">
                <a href="#">
                  <img src={linkedinImage} alt="linkedin" />
                </a>
                <a href="#">
                  <img src={telegramImage} alt="telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
