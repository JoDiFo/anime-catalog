import leftArrow from "../assets/arrow-left-not-active.svg";
import rightArrow from "../assets/arrow-right-active.svg";
import plusIcon from "../assets/plus-icon.svg";

import { AnimeCard } from "../components";

function Search() {
  return (
    <main className="profile-page">
      <div className="container">
        <div className="wrapper">
          <div className="profile-page__sorting">
            <h3>BROWSE THROUGH ANIME CATALOG</h3>
            <div className="anime-page__tags">
              <h4 className="anime-page__tag-title">Selected tags:</h4>
              <div className="tag">#action</div>
              <div className="tag">#fantasy</div>
              <div className="tag">#comedy</div>
              <div className="tag">#romance</div>
              <div className="tag">#adventure</div>
              <div className="tag">#action</div>
              <img className="plus-button" src={plusIcon} alt="plus button" />
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search for the anime title" />
            </div>
            <div className="sort">
              <p>Sort by:</p>
              <div className="sort__category">popularity</div>
            </div>
          </div>
          <div className="profile-page__list card-container">
            <div className="card-line">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
            <div className="card-line">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
            <div className="card-line">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
            <div className="card-line">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
            </div>
            <div className="card-line">
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
              <AnimeCard />
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

export default Search;
