import linkedinImage from "@/shared/assets/linkedin-svgrepo-com.svg";
import telegramImage from "@/shared/assets/telegram-svgrepo-com.svg";
import cls from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={cls.Footer}>
      <div className="container">
        <div className="wrapper">
          <div className={cls.content}>
            <a href="/" className={cls.text}>
              Anime Catalog
            </a>
            <div className={cls.icons}>
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
