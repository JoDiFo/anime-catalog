import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import profileImage from "../../assets/profile-image.jpeg";
import AnimePopup from "./AnimePopup";
import Authorization from "./Authorization";
import { IAnime } from "../../types";
import { GET_ALL_ANIME } from "../../graphql/anime";
import { useLazyQuery } from "@apollo/client";

import "./Header.scss";

function Header() {
  const { _id: userId, isLogged } = useSelector(
    (state: RootState) => state.userReducer
  );

  const [getAll, { data: animeData, loading: isAnimeLoading, called }] =
    useLazyQuery(GET_ALL_ANIME, {
      pollInterval: 0,
    });

  const [anime, setAnime] = useState<IAnime[]>([]);
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (!value) {
      setAnime([]);
      return;
    }

    getAll({
      variables: {
        userId,
        searchString: value,
        tags: [],
      },
    });
  }, [debouncedValue]);

  useEffect(() => {
    if (called && !isAnimeLoading) {
      setAnime(animeData.getAllAnime);
    }
  }, [called, isAnimeLoading]);

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
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
            {isLogged ? (
              <Link to="/profile">
                <img
                  className="header__profile"
                  src={profileImage}
                  alt="profile image"
                />
              </Link>
            ) : (
              <Authorization />
            )}
          </div>
        </div>
        {anime.length !== 0 ? <AnimePopup items={anime} /> : null}
      </div>
    </header>
  );
}

export default Header;
