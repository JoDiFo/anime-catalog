import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import defaultImage from "../../assets/profile-image.jpeg";
import AnimePopup from "./AnimePopup";
import Authorization from "./Authorization";
import { GET_ALL_ANIME } from "../../graphql/anime";
import { useLazyQuery } from "@apollo/client";

import "./Header.scss";
import SearchBar from "./SearchBar";

function Header() {
  const { _id: userId, profileImage } = useSelector(
    (state: RootState) => state.userReducer
  );

  const location = useLocation();

  const [
    getAll,
    { data: animeData, loading: isAnimeLoading, called, refetch },
  ] = useLazyQuery(GET_ALL_ANIME, {
    pollInterval: 0,
  });

  const [anime, setAnime] = useState<EAnime[]>([]);
  const [searchString, setSearchString] = useState("");

  const debouncedValue = useDebounce(searchString, 500);

  useEffect(() => {
    if (!called)
      getAll({
        variables: {
          userId,
          searchString,
          tags: [],
        },
      });
    else
      refetch({
        userId,
        searchString,
        tags: [],
      });
  }, [debouncedValue]);

  useEffect(() => {
    if (called && !isAnimeLoading) {
      if (searchString) setAnime(animeData.getAllAnime);
      else setAnime([]);
    }
  }, [called, isAnimeLoading, animeData?.getAllAnime]);

  useEffect(() => {
    setSearchString("");
  }, [location]);

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
            <SearchBar
              value={searchString}
              onChange={(value) => setSearchString(value)}
            />

            {userId ? (
              <Link to="/profile">
                <img
                  className="header__profile"
                  src={profileImage || defaultImage}
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
