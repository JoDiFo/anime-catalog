import thumbnailImage from "../assets/thumbnail-image.png";
import leftArrow from "../assets/arrow-left-not-active.svg";
import rightArrow from "../assets/arrow-right-active.svg";

import { ProfileInfo, AnimeCard } from "../components";

function MyAnime() {
  return (
    <main className="profile-page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="wrapper">
          <ProfileInfo />
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
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
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
