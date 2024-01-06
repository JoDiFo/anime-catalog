import thumbnailImage from "../assets/thumbnail-image.png";
import animeThumbnail from "../assets/fullmetal-alchemist-brotherhood-1-190x285.jpg";
import profileImage from "../assets/profile-image.jpeg";
import leftArrow from "../assets/arrow-left-not-active.svg";
import rightArrow from "../assets/arrow-right-active.svg";

function MyAnime() {
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
          <div className="profile-page__sorting">
            <h3>MY ANIME</h3>
            <div className="profile-page__sorting__lists">
              <div className="sort-list-item">watched</div>
              <div className="sort-list-item">watching</div>
              <div className="sort-list-item selected">plan to watch</div>
              <div className="sort-list-item">stalled</div>
              <div className="sort-list-item">dropped</div>
            </div>
            <div className="sort">
              <p>Sort by:</p>
              <div className="sort__category">popularity</div>
            </div>
          </div>
          <div className="profile-page__list card-container">
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
          <div className="content-navigation">
            <select
              name="number-of-titles"
              id="number-of-titles"
              className="content-navigation__items-per-page"
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
            <div className="content-navigation__page-number">
              <img src={leftArrow} alt="left arrow" />
              <span className="active">1</span>
              <span className="not-active">2</span>
              <img src={rightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyAnime;
