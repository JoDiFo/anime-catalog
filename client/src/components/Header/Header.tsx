import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import profileImage from "../../assets/profile-image.jpeg";
import AnimePopup from "./AnimePopup";
import Authorization from "./Authorization";
import compareStrings from "../../Utils/compareStrings";
import { IAnime } from "../../types";
import { GET_ALL_ANIME } from "../../graphql/anime";
import { useQuery } from "@apollo/client";

function Header() {
  const { _id: userId, isLogged } = useSelector(
    (state: RootState) => state.userReducer
  );

  const {
    data: animeData,
    loading: isAnimeLoading,
    //refetch,
  } = useQuery(GET_ALL_ANIME, {
    variables: {
      userId,
    },
    pollInterval: 0,
  });

  const [anime, setAnime] = useState<IAnime[]>([]);
  const [value, setValue] = useState("");
  const [displayedItems, setDisplayedItems] = useState<IAnime[]>([]);

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (!value) {
      setDisplayedItems([]);
      return;
    }

    const newItems = anime
      .filter((item: IAnime) => compareStrings(item.title, debouncedValue))
      .slice(0, 50);
    setDisplayedItems(newItems);
  }, [debouncedValue]);

  useEffect(() => {
    if (!isAnimeLoading) {
      setAnime(animeData.getAllAnime);
    }
  }, [isAnimeLoading]);

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
        {displayedItems.length !== 0 ? (
          <AnimePopup items={displayedItems} />
        ) : null}
      </div>
    </header>
  );
}

export default Header;
