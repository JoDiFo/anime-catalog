import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import { Loading } from "@/widgets/Loading";
import { AnimeCategorySelector } from "@/widgets/AnimeCategorySelector";

import { GET_ONE_ANIME } from "@/app/graphql/anime";
import { RootState } from "@/app/redux/store";

import "./AnimePage.scss";

function AnimePage() {
  const location = useLocation();
  const { t } = useTranslation("translation");
  const { id } = location.state;
  const userId = useSelector((state: RootState) => state.userReducer.id);

  const { data, loading, refetch } = useQuery(GET_ONE_ANIME, {
    variables: {
      animeId: id,
      userId,
    },
  });

  const [anime, setAnime] = useState<EAnime>();

  useEffect(() => {
    if (!loading) {
      setAnime(data.getOneAnime);
    }
  }, [data, loading]);

  const update = () => {
    refetch();
  };

  if (!anime) {
    return <Loading />;
  }

  return (
    <main className="anime-page">
      <div className="container">
        <h1 className="anime-page__title">{anime?.title}</h1>
        <hr className="anime-page__line" />
        <div className="anime-page__info">
          <p className="border">{anime.type}</p>
          <p className="border">{anime.episodes}</p>
          <p className="border">{anime.status}</p>
          <p>{anime.year}</p>
        </div>
        <div className="anime-page__content">
          <img
            className="anime-page__image image"
            src={anime.imageUrl}
            alt={anime.title}
          />
          <div className="anime-page__data">
            <p className="anime-page__synopsis">{t("dummy text")}</p>
            <div className="anime-page__tags">
              <h4 className="anime-page__tag-title">{t("Tags")}:</h4>
              {anime.tags.map((item) => (
                <div key={item} className="tag">
                  {item}
                </div>
              ))}
            </div>
            <AnimeCategorySelector
              animeId={id}
              defaultValue={anime.watchStatus}
              onChange={update}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AnimePage;
