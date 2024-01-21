import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import compareStrings from "../Utils/compareStrings";

import profileImage from "../assets/profile-image.jpeg";

function Header() {
  const [searchString, setSearchString] = useState("");

  const animeSlice = useSelector((state: RootState) => state.anime.value);

  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <Link to="/">
            <div className="header__title">
              <h2>Anime Catalog</h2>
            </div>
          </Link>
          <Link to="/search">
            <div className="header__link">
              <h2>Browse All</h2>
            </div>
          </Link>
          <div className="left">
            <div className="header__search">
              <input
                type="text"
                onChange={(event) => setSearchString(event.target.value)}
              />
            </div>
            <Link to="/profile">
              <img
                className="header__profile"
                src={profileImage}
                alt="profile image"
              />
            </Link>
          </div>
        </div>
        {searchString !== "" && (
          <div className="anime-popup">
            {animeSlice &&
              animeSlice
                .filter((item) => compareStrings(item.title, searchString))
                .slice(0, 70)
                .map((item) => (
                  <div key={item.id} className="anime-popup__item">
                    <img src={item.picture} alt={item.title} />
                    <div>{item.title}</div>
                  </div>
                ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
