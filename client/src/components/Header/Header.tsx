import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import profileImage from "../../assets/profile-image.jpeg";
import { AnimePopup } from "../index";
import compareStrings from "../../Utils/compareStrings";

function Header() {
  const animeSlice = useSelector((state: RootState) => state.anime.items);

  const [value, setValue] = useState("");
  const [displayedItems, setDisplayedItems] = useState<IAnime[]>([]);

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (!value) {
      setDisplayedItems([]);
      return;
    }

    const newItems = animeSlice
      .filter((item) => compareStrings(item.title, debouncedValue))
      .slice(0, 50);
    setDisplayedItems(newItems);
  }, [debouncedValue]);

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
            <Link to="/profile">
              <img
                className="header__profile"
                src={profileImage}
                alt="profile image"
              />
            </Link>
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
