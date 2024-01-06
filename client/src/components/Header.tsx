import { Link } from "react-router-dom";

import profileImage from "../assets/profile-image.jpeg";

function Header() {
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
              <input type="text" />
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
      </div>
    </header>
  );
}

export default Header;
