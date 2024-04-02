import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cls from "./AnimeList.module.scss";

function AnimeList({
  watched,
  watching,
  planned,
  stalled,
  dropped,
}: EAnimeCount) {
  const { t } = useTranslation("profilePage");

  return (
    <div className={cls.AnimeList}>
      <Link to="/profile/anime">
        <h3>{t("Anime list")}</h3>
      </Link>
      <hr />
      <div>
        <p>
          <span className="dot watched"></span>
          {t("watched")}: {watched}
        </p>
        <p>
          <span className="dot watching"></span>
          {t("watching")}: {watching}
        </p>
        <p>
          <span className="dot planned"></span>
          {t("planned")}: {planned}
        </p>
        <p>
          <span className="dot stalled"></span>
          {t("stalled")}: {stalled}
        </p>
        <p>
          <span className="dot dropped"></span>
          {t("dropped")}: {dropped}
        </p>
      </div>
    </div>
  );
}

export default AnimeList;
