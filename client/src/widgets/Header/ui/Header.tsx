import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "@/shared/Hooks/useDebounce";

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

import defaultImage from "@/shared/assets/profile-icon.svg";
import { AnimePopup } from "@/widgets/AnimePopup";
import { AuthorizationLinks } from "@/widgets/AuthorizationLinks";
import { HeaderSearchBar } from "@/widgets/HeaderSearchBar";
import { GET_ALL_ANIME } from "@/app/graphql/anime";
import { useLazyQuery } from "@apollo/client";

import "./Header.scss";

function Header() {
  const { id: userId, imageUrl } = useSelector(
    (state: RootState) => state.userReducer
  );

  const location = useLocation();

  const [, { data: animeData, loading: isAnimeLoading, called, refetch }] =
    useLazyQuery(GET_ALL_ANIME);

  const [anime, setAnime] = useState<EAnime[]>([]);
  const [searchString, setSearchString] = useState("");

  const debouncedValue = useDebounce(searchString, 500);

  useEffect(() => {
    refetch({
      userId,
      searchString: debouncedValue,
      tags: [],
      sort: "anime_id",
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
            <HeaderSearchBar
              value={searchString}
              onChange={(value) => setSearchString(value)}
            />

            {userId ? (
              <Link to="/profile">
                <img
                  className="header__profile"
                  src={imageUrl || defaultImage}
                  alt="profile image"
                />
              </Link>
            ) : (
              <AuthorizationLinks />
            )}
          </div>
        </div>
        <AnimePopup animeItems={anime} searchString={debouncedValue} />
      </div>
    </header>
  );
}

export default Header;
