import linkedinImage from "../../assets/linkedin-svgrepo-com.svg";
import telegramImage from "../../assets/telegram-svgrepo-com.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="footer--content">
            <a href="#" className="footer--text">
              Anime Catalog
            </a>
            <div className="footer--icons">
              <a href="#">
                <img src={linkedinImage} alt="linkedin" />
              </a>
              <a href="#">
                <img src={telegramImage} alt="telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
