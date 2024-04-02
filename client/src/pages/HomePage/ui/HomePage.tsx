import { useTranslation } from "react-i18next";
import thumbnailImage from "@/shared/assets/thumbnail-image.png";

function HomePage() {
  const { t } = useTranslation("homePage");

  return (
    <main className="page">
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
        <h3>{t("Welcome to Anime Catalog")}</h3>
        <p>{t("Discover new anime and track your progress")}</p>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="page__section">
            <h3>{t("POPULAR THIS WEEK")}</h3>
            {/** TODO: change card container to component */}
            <p>{t("Nothing here yet")}</p>
          </div>
          <div className="page__section">
            <h3>{t("YOU MIGHT ALSO LIKE")}</h3>
            {/** TODO: change card container to component */}
            <p>{t("Nothing here yet")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
