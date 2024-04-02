import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useLazyQuery } from "@apollo/client";

import { AnimePopup } from "@/widgets/AnimePopup";
import { AuthorizationLinks } from "@/widgets/AuthorizationLinks";
import { HeaderSearchBar } from "@/widgets/HeaderSearchBar";
import { LanguageSelector } from "@/widgets/LanguageSelector";
import { Button } from "@/shared/ui/Button";

import { logout } from "@/app/redux/userSlice";
import { RootState } from "@/app/redux/store";
import useDebounce from "@/shared/Hooks/useDebounce";
import { GET_ALL_ANIME } from "@/app/graphql/anime";

import defaultImage from "@/shared/assets/profile-icon.svg";
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("translation");

  const { id: userId, imageUrl } = useSelector(
    (state: RootState) => state.userReducer
  );

  const location = useLocation();

  const [, { data: animeData, loading: isAnimeLoading, called, refetch }] =
    useLazyQuery(GET_ALL_ANIME);

  const [anime, setAnime] = useState<EAnime[]>([]);
  const [searchString, setSearchString] = useState("");

  const debouncedValue = useDebounce(searchString, 500);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    document.cookie = "refreshToken=";
    localStorage.removeItem("accessToken");
  };

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
              <h2>{t("Anime Catalog")}</h2>
            </div>
          </Link>
          <Link to="/search">
            <div className="header__link">
              <h2>{t("Browse All")}</h2>
            </div>
          </Link>
          <div className="left">
            <HeaderSearchBar
              value={searchString}
              onChange={(value) => setSearchString(value)}
            />
            {userId ? (
              <>
                <Link to="/profile">
                  <img
                    className="header__profile"
                    src={imageUrl || defaultImage}
                    alt="profile image"
                  />
                </Link>
                <Button onClick={handleLogout}>{t("Logout")}</Button>
              </>
            ) : (
              <AuthorizationLinks />
            )}
          </div>
        </div>
        <AnimePopup animeItems={anime} searchString={debouncedValue} />
      </div>
      <LanguageSelector />
    </header>
  );
}

export default Header;
