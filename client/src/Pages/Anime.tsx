import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ONE_ANIME } from "../query/anime";
import { IAnime } from "../types";
import CategorySelector from "../components/Anime/CategorySelector";

function Anime() {
  const location = useLocation();
  const { id } = location.state;

  const { data, loading } = useQuery(GET_ONE_ANIME, {
    variables: {
      id,
    },
  });

  const [anime, setAnime] = useState<IAnime>();

  useEffect(() => {
    if (!loading) {
      setAnime(data.getOneAnime);
    }
  }, [data, loading]);

  return (
    <main className="anime-page">
      <div className="container">
        <h1 className="anime-page__title">{anime?.title}</h1>
        <hr className="anime-page__line" />
        <div className="anime-page__info">
          <p className="border">{anime?.type}</p>
          <p className="border">{anime?.episodes}</p>
          <p className="border">{anime?.status}</p>
          <p>{anime?.animeSeason.year}</p>
        </div>
        <div className="anime-page__content">
          <img
            className="anime-page__image image"
            src={anime?.picture}
            alt={anime?.title}
          />
          <div className="anime-page__data">
            <p className="anime-page__synopsis">
              This is just some dummy text to fill this text box so don’t mind
              it. Just assume that here should be a synopsis of this anime. Yah
              I know I still need to add more text to fill this stupid text box.
            </p>
            <div className="anime-page__tags">
              <h4 className="anime-page__tag-title">Tags:</h4>
              {anime?.tags.map((item) => (
                <div key={`${item}_tag`} className="tag">
                  #{item}
                </div>
              ))}
            </div>
            <CategorySelector animeId={id} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Anime;
