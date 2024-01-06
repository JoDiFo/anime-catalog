import profileImage from "../assets/profile-image.jpeg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header__title">
            <h2>Anime Catalog</h2>
          </div>
          <div className="header__link">
            <h2>Browse All</h2>
          </div>
          <div className="left">
            <div className="header__search">
              <input type="text" />
            </div>
            <img
              className="header__profile"
              src={profileImage}
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;